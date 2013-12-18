var config = require('config');
require('mongoose').connect(config.database);
var app = require('./lib/server')(
  require('express')
);

['players', 'countries'].map(function(name) {
  require('./lib/controllers/' + name + '.controller')(app);
});