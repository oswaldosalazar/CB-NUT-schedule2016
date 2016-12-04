var express = require('express');
var _ = require('lodash');
var router = express.Router();
// var request = require('request');
var student = require('../database/performanceStudent');

/* GET users listing. */
router.get('/', function(req, res, next) {
  student.getPerformancesStudents()
  .then( (data) => {
    data = _.sortBy(data, 'dateTime');
    res.send(data)
  })
});

module.exports = router;
