var express = require('express');
var router = express.Router();
// var request = require('request');
var saved = require('../database/saved');

/* GET users listing. */
router.get('/', function(req, res, next) {
  saved.getSaved(req.query.id)
  .then( (data) => {
    res.send(data)
  })
});

router.post('/', function(req, res, next) {
  saved.postSaved(req.body)
  .then( (data) => {
    res.send('New data saved')
  })
})

router.put('/', function(req, res, next) {
  saved.updateSaved(req.body)
  .then( (data) => {
    res.send('Data updated saved')
  })
})

module.exports = router;
