var express = require('express');
var fs = require('fs');
var path = require("path");
var child_process=require("child_process")
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var _body=req.body;
  console.log(_body)
  res.send('respond with a resource');
});
router.get('/codeGen', function(req, res, next) {
  console.log(path.resolve(__dirname,'../codegen'))
  child_process.execFile("run-local.bat",null,{cwd:path.resolve(__dirname,'../codegen')},function(error,stdout,stderr){
    if(error !==null){
      console.log("exec error"+error)
      res.send('fail');
    }
    else {
      console.log("成功")
      res.send('success');
    }
  })
});
router.post('/pet', function(req, res, next) {
  var _body=req.body;
  console.log(_body)
  var testRes={'petName':'Tom cat','friend':'Jerry mouse'}
  res.send(testRes);
});
router.post('/saveSwaggerJson', function(req, res, next) {
  var _body=req.body;
  var jsonPath = path.resolve(__dirname,'../public/Swagger/swagger.json');
  var temp=JSON.stringify(JSON.parse(_body.data),null,2);
  fs.writeFile(jsonPath ,temp,function(err){
    if (err) {
      throw err;
      res.send({errcode:500,Msg:'Something err!'});
    }else{
      res.send({errcode:200,Msg:'Success save!'});
    }
  });
});
module.exports = router;
