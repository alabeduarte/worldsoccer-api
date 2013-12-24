var express = require('express');
var app = module.exports = express();
var Country = require('./model');

app.use('/', require('../players'));

app.get('/', function (req, res) {
  Country.find({}).sort('group').sort([['points', 'descending']]).exec(function (err, countries) {
    res.send(countries);
  });
});