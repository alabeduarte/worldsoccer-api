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
    var positions = [
      {position: 'GK'},{position: 'RB'},{position: 'CB'},{position: 'CB'},{position: 'LB'},
      {position: 'CM'},{position: 'CM'},{position: 'M'},{position: 'M'},{position: 'FW'},
      {position: 'FW'},{position: 'GK'},{position: 'CB'},{position: 'CB'},{position: 'RB'},
      {position: 'LB'},{position: 'CM'},{position: 'M'},{position: 'M'},{position: 'FW'},
      {position: 'FW'},{position: 'FW'},{position: 'GK'}];

    _.each(json, function(player, index){
      _.extend(player, positions[index]);
    });

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