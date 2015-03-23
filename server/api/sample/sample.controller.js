'use strict';

var _ = require('lodash');
var db = require('./../../models')
// Get list of samples
exports.index = function(req, res) {
  res.json([]);
};

exports.create = function(req, res) {
  console.log(req.body);
  db.sample.create(req.body)
  .then(function(result){
    console.log(result);
    res.send('success');
  })
  .catch(function(error){
    res.send('error');
  });
};
