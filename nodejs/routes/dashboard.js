var express = require('express');
var router = express.Router();

router.get('/dashboard', function(req, res) {
    var uName = req.body.username;
    res.render('dashboard');
  });

  router.get('/login', function(req, res) {
    res.render('login');
  });  
  
router.post('/dashboard', function(req, res){
    var uName = req.body.username;
    //var pwd = req.body.password;
    // console.log("response is "+ response);
    res.send({"logout": "successful"
    });
});
  module.exports = router;