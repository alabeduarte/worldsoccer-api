var app = require('./lib/server')(
  require('express')
);

var playerParser = require('./lib/player.parser')(require('xml2json'));
require('./lib/controllers/players.controller')(app, 'http://c3420952.r52.cf0.rackcdn.com', require('request'), playerParser);