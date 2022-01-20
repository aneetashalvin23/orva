const { response } = require('express');
var express = require('express');
var router = express.Router();


/* GET users listing. */






router.get('/userLogin',function(req,res,next){
 
  res.render("user/userLogin",{homePage:true})
})
router.get('/userReg',function(req,res,next){
 
  res.render("user/userReg",{homePage:true})
})

module.exports = router;
