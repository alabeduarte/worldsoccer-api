require('mongoose').connect(process.env.MONGOLAB_URI);
var app = require('./lib/server')(
  require('express')
);

['players', 'countries'].map(function(name) {
  require('./lib/controllers/' + name + '.controller')(app);
});