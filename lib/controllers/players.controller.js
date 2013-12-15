module.exports = function(app) {
  var request = require('request')
    , parser = require('../player.parser')
    , S = require('string');

  app.get("/countries/:countryId/players", function(req, res) {
    var url = getUrl(req.params.countryId);

    request(url, function(error, response, data) {
      if (response.statusCode === 404) return res.send('404: Page not Found', response.statusCode);

      res.end(parser.parse(data));
    });
  });

  function getUrl(countryId) {
    var values = {
      repositoryDomainUrl: 'http://c3420952.r52.cf0.rackcdn.com',
      countryId: countryId.toUpperCase(),
      fileName: 'playerbasicdata.xml'
    };
    return S('{{repositoryDomainUrl}}/{{countryId}}{{fileName}}').template(values).s;
  }

};