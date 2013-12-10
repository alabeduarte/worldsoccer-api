module.exports = function(app) {
  var request = require('request')
    , countryPrefix = require('../country.prefix')
    , parser = require('../player.parser');

  app.get("/players/:country", function(req, res) {
    var url = getUrl(req.url);

    request(url, function(error, response, data) {
      res.end(parser.parse(data));
    });
  });

  function getUrl(baseUrl) {
    var prefix = countryPrefix.get('/players/', baseUrl);
    var values = {repositoryBaseUrl: 'http://c3420952.r52.cf0.rackcdn.com', countryPrefix: prefix, fileName: 'playerbasicdata.xml' };
    return require('string')('{{repositoryBaseUrl}}/{{countryPrefix}}{{fileName}}').template(values).s;
  }

};