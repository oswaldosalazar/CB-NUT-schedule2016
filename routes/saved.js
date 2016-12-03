var express = require('express');
var router = express.Router();
var saved = require('../database/saved');

const oops = "Something went wrong on our end.  Please try again."

/* GET users listing. */
router.get('/', function(req, res, next) {
  if (!req.query.id) {
    var err = new Error('Bad Request');
    err.status = 400;
    next(err);
    return;
  }
  saved.getSaved(req.query.id)
  .then( (data) => {
    res.send(data)
  })
  .catch( (err) => {
    console.log(err);
    res.send(oops);
  })
});

router.post('/', function(req, res, next) {
  if (!(req.body.userId && req.body.savedList)) {
    var err = new Error('Bad Request');
    err.status = 400;
    next(err);
    return;
  }
  saved.postSaved(req.body)
  .then( (data) => {
    res.json({message: 'New data saved'});
  })
  .catch( (err) => {
    console.log(err);
    res.send(oops);
  })
});

router.put('/', function(req, res, next) {
  if (!(req.body.id && req.body.savedList)) {
    var err = new Error('Bad Request');
    err.status = 400;
    next(err);
    return;
  }
  saved.updateSaved(req.body)
  .then( (data) => {
    res.json({message: 'Data updated'});
  })
  .catch( (err) => {
    console.log(err);
    res.send(oops);
  })
});

router.delete('/', function(req, res, next) {

 queries.deleteSaved(req.query.id)
    .then((results) => {
      res.jason({message: 'Saved deleted.'});
    })
    .catch((err) => {
      res.send(oops);
    })

});

module.exports = router;
