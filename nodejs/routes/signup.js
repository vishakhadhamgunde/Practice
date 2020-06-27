var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
var mysql = require("./mysql");

router.get('/signup', function(req, res) {
  res.render('signup');
});

router.post('/signup', function(req, res){
  var fName = req.body.firstname;
  var lName = req.body.lastname;
  var uName = req.body.username;
  var pwd = req.body.password;

  bcrypt.hash(pwd, 10, function(err, hash) {
        var query = "INSERT INTO users (username, firstname, lastname, password) VALUES('"+uName+"', '"+fName+"', '"+lName+"', '"+hash+"')";
        mysql.createUser(query, function(err, response){
          res.send({"signup": "successful"});  
      });      
  });
});

  module.exports = router;