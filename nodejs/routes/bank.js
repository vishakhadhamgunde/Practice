var express = require('express');
var router = express.Router();
var mysql = require("./mysql");

router.post('/banks', function(req, res){
   
    var bankname = req.body.bankname ;
    var address = req.body.address;
    var city = req.body.city;
    var state = req.body.state;
    var postalcode = req.body.postalcode;
    var branchname = req.body.branchname;

    var query = "INSERT INTO banks( bankname, address, city, state, postalcode, branchname) VALUES('"+bankname+"', '"+address+"', '"+city+"', '"+state+"', '"+postalcode+"','"+branchname+"')";
    console.log("query is "+ query);
    mysql.createbankUser(function(error, response){
      console.log("response is "+ response);
      res.send({"bank": "successful"});
    }, query)
   
  });
  module.exports = router;