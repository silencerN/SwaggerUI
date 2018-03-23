var express = require('express');
var fs = require('fs');
var path = require("path");
var router = express.Router();

/* GET users listing. */
router.get('/dialog', function(req, res, next) {
  res.redirect('/Swagger/oauth2-redirect.html')
});

module.exports = router;
