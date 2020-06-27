var express = require('express');
var router = express.Router();
var mysql = require("./mysql");
const bcrypt = require('bcrypt');

router.get('/login', function(req, res) {
  res.render('login');
});

router.get('/dasboard', function(req, res) {
  res.render('dashboard');
});

router.post('/login', function(req, res, err){
  var uName = req.body.username;
  var pwd = req.body.password;

  var query = "SELECT * FROM users WHERE username = '"+uName+"';"
  
  mysql.user(query, function(error, result){
    if(result[0]){
      bcrypt.compare(pwd, result[0].password, function(err, response) {
        if(response == true){
          res.send({"login": "successful"});
        }else{
          res.send({"login": "failed"});
        }          
      });   
    }else{
        res.send({"login": "failed"});
    }
  })
});

module.exports = router;