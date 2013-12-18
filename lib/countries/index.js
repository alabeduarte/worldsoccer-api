var express = require('express');
var app = module.exports = express();
var Country = require('./model');

app.use('/', require('../players'));

app.get('/', function (req, res) {
  Country.find({}, function (err, countries) {
    res.send(countries);
  });
});