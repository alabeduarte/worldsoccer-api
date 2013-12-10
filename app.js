var app = require('./lib/server')(
  require('express')
);

require('./lib/controllers/players.controller')(app);