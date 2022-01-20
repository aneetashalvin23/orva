var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();



/* GET home page. */
router.get('/',function(req,res,next){
 
  res.render("admin/indexHome",{homePage:true})
})
router.get('/adminLogin',function(req,res,next){
 
  res.render("admin/adminLogin",{homePage:true})
})
router.get('/mechReg',function(req,res,next){
 
  res.render("admin/adminReg",{homePage:true})
})





module.exports = router;

