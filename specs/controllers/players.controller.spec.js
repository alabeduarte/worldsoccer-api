var request = require(__dirname + '/requestTest')
  , nock = require('nock')
  , app = require(__dirname + '/../../lib/server')(require('express'))
  , url = 'http://c3420952.r52.cf0.rackcdn.com';

  before(function() { require(__dirname + '/../../lib/controllers/players.controller')(app) });

  describe('GET /players/brazil', function() {
    before(function() {
      var xml = '<?xml version="1.0"?><PackData><PlayerData baseImageUrl="http://cdn.soccerwiki.org/images/player/"><P id="1" f="John" s="Doe" i="1.jpg"/><P id="2" f="Mary" s="Doe" i="2.jpg"/></PlayerData></PackData>';
      nock(url) .get('/BRAplayerbasicdata.xml').reply(200, xml);
    });
    it('respond with json', function(done) {
      var expectedResponse = '[{"id":"1","fullName":"John Doe","firstName":"John","lastName":"Doe","photo":"http://cdn.soccerwiki.org/images/player/1.jpg"},{"id":"2","fullName":"Mary Doe","firstName":"Mary","lastName":"Doe","photo":"http://cdn.soccerwiki.org/images/player/2.jpg"}]';
      request(app).get('/players/brazil', expectedResponse, done);
    });
  });

  describe('GET /players/italy', function() {
    before(function() {
      var xml = '<?xml version="1.0"?><PackData><PlayerData baseImageUrl="http://cdn.soccerwiki.org/images/player/"><P id="10" f="Roberto" s="Baggio" i="10.jpg"/><P id="21" f="Cristian" s="Vieri" i="21.jpg"/></PlayerData></PackData>';
      nock(url) .get('/ITAplayerbasicdata.xml').reply(200, xml);
    });
    it('respond with json', function(done) {
      var expectedResponse = '[{"id":"10","fullName":"Roberto Baggio","firstName":"Roberto","lastName":"Baggio","photo":"http://cdn.soccerwiki.org/images/player/10.jpg"},{"id":"21","fullName":"Cristian Vieri","firstName":"Cristian","lastName":"Vieri","photo":"http://cdn.soccerwiki.org/images/player/21.jpg"}]';
      request(app).get('/players/italy', expectedResponse, done);
    });
  });
