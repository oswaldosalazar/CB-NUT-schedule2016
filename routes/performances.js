var express = require('express');
var router = express.Router();
// var request = require('request');
var student = require('../database/performance');

/* GET users listing. */
router.get('/', function(req, res, next) {
  student.getPerformances()
  .then( (data) => {
    res.send(data)
  })
});

module.exports = router;
