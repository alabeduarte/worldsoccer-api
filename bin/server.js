#!/usr/bin/env node
var express = require('express')
  , config = require('config')
  , app = express();

require('mongoose').connect(config.database);

app.use(function (req, res, next){
  if (!res.getHeader('Cache-Control')) res.setHeader('Cache-Control', 'public, max-age=' + 28800);
  next();
});

app.use('/countries', require('../lib/countries'));

require('http').createServer(app).listen(config.port, function () {
  console.log('Running on ', config.port);
});