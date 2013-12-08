var app = require('./lib/server')(
  require('express')
);

var sourceHost = 'http://c3420952.r52.cf0.rackcdn.com';
require('./lib/controllers/players.controller')(app, sourceHost, require('request'), require('xml2json'));