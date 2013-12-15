module.exports = function(app) {
  var request = require('request')
    , parser = require('../player.parser')
    , S = require('string');

  app.get("/players/:country", function(req, res) {
    var url = getUrl(req.url);

    request(url, function(error, response, data) {
      res.end(parser.parse(data));
    });
  });

  function getUrl(baseUrl) {
    var countryId = baseUrl.match(/(players)\/([a-zA-Z]*)/)[2].toUpperCase();
    var values = {
      repositoryDomainUrl: 'http://c3420952.r52.cf0.rackcdn.com',
      countryId: countryId,
      fileName: 'playerbasicdata.xml'
    };
    return S('{{repositoryDomainUrl}}/{{countryId}}{{fileName}}').template(values).s;
  }

};