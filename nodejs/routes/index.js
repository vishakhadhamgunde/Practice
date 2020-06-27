var express = require('express');
var router = express.Router();

/* GET home page. */

/*router.post('/register', function(req, res){
  res.send({"username": "vishakha dhamgunde",
            "email":"vishakhadhamgunde1.2.3.v@gmail.com",
            "password":"dv123",
            "collagename":"stc,latur",
            });
  });*/

router.get('/register', function(req, res){
   console.log(req.body);
    res.render('register');
  })

  router.post('/register',function(req, res){
    console.log(req.body);
    res.send({"username": "mohini dhamgunde",
            "email":"mohinidhamgunde30@gmail.com",
            "password":"happy123",
            "collagename":"stc,latur"});
  })
module.exports = router;