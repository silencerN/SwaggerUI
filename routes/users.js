var express = require('express');
var child_process=require("child_process");
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/codeGen', function(req, res, next) {
  child_process.execFile("run-local.bat",null,{cwd:'D:/ReactWebProject/SwaggerUI/codegen'},function(error,stdout,stderr){
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
module.exports = router;
