var express = require('express');
var router = express.Router();
// var request = require('request');
var saved = require('../database/saved');

/* GET users listing. */
router.get('/', function(req, res, next) {
  saved.getSaved()
  .then( (data) => {
    res.send(data)
  })
});

module.exports = router;
