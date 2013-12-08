var request = require('supertest')
  , express = require('express')
  , parser = require(__dirname + '/../../lib/player.parser')(require("xml2json"))
  , countryPrefix = require(__dirname + '/../../lib/country.prefix')(require('string'))
  , app = require(__dirname + '/../../lib/server')(express);

  var port = 6900;

  before(function() {
    var brazilXml = '<?xml version="1.0"?><PackData><PlayerData baseImageUrl="http://cdn.soccerwiki.org/images/player/"><P id="1" f="John" s="Doe" i="1.jpg"/><P id="2" f="Mary" s="Doe" i="2.jpg"/></PlayerData></PackData>';
    var italyXml = '<?xml version="1.0"?><PackData><PlayerData baseImageUrl="http://cdn.soccerwiki.org/images/player/"><P id="10" f="Roberto" s="Baggio" i="10.jpg"/><P id="21" f="Cristian" s="Vieri" i="21.jpg"/></PlayerData></PackData>';

    express().get('/BRAplayerbasicdata.xml', function(req, res) {
      res.end(brazilXml);
    }).get('/ITAplayerbasicdata.xml', function(req, res) {
      res.end(italyXml);
    }).listen(port);

    initController();
  });

  describe('GET /players/brazil', function() {

    it('respond with json', function(done) {
      var expectedResponse = '[{"id":"1","fullName":"John Doe","firstName":"John","lastName":"Doe","photo":"http://cdn.soccerwiki.org/images/player/1.jpg"},{"id":"2","fullName":"Mary Doe","firstName":"Mary","lastName":"Doe","photo":"http://cdn.soccerwiki.org/images/player/2.jpg"}]';

      request(app)
        .get('/players/brazil')
        .expect(200, expectedResponse)
        .end(function(err, res) {
          if (err) return done(err);
          done()
        });
    })
  });

  describe('GET /players/italy', function() {

    it('respond with json', function(done) {
      var expectedResponse = '[{"id":"10","fullName":"Roberto Baggio","firstName":"Roberto","lastName":"Baggio","photo":"http://cdn.soccerwiki.org/images/player/10.jpg"},{"id":"21","fullName":"Cristian Vieri","firstName":"Cristian","lastName":"Vieri","photo":"http://cdn.soccerwiki.org/images/player/21.jpg"}]';
      request(app)
        .get('/players/italy')
        .expect(200, expectedResponse)
        .end(function(err, res) {
          if (err) return done(err);
          done()
        });
    })
  });

  function initController() {
    require(__dirname + '/../../lib/controllers/players.controller')
      (
        app,
        countryPrefix,
        { host: 'http://localhost:' + port, request: require('request'),  parser: parser}
      );
  }
