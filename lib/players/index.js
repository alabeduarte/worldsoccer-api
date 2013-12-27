var express = require('express');
var app = module.exports = express();
var request = require('request')
  , parser = require('./parser')
  , S = require('string')
  , _ = require('underscore');

app.get('/:countryId/players', function (req, res) {
  var url = getUrl(req.params.countryId);

  request(url, function (error, response, data) {
    if (response.statusCode === 404) return res.send(response.statusCode);

    var json = _.take(parser.toJSON(data), 23);
    _.extend(json[0], {position: 'GK'});
    res.send(json);
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