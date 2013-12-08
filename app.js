var app = require('./lib/server')(
  require('express')
);

var countryPrefix = require('./lib/country.prefix')(require('string'));
var playerParser = require('./lib/player.parser')(require('xml2json'));
var repository = { host: 'http://c3420952.r52.cf0.rackcdn.com', request: require('request'), parser: playerParser };
require('./lib/controllers/players.controller')(app, countryPrefix, repository);