var app = require('./lib/server')(
  require('express')
);

var mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL);

require('./lib/controllers/players.controller')(app);
require('./lib/controllers/country.controller')(app);