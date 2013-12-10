module.exports = function(app) {
  var request = require('request')
    , countryPrefix = require('../country.prefix')
    , parser = require('../player.parser');

  app.get("/players/:country", function(req, res) {
    var prefix = countryPrefix.get('/players/', req.url);
    var url = 'http://c3420952.r52.cf0.rackcdn.com/' + prefix + 'playerbasicdata.xml';
    request(url, function(error, response, data) {
      res.end(parser.parse(data));
    });
  });

};