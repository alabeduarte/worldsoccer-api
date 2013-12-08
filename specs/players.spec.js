var request = require('supertest')
  , S = require('string')
  , express = require('express')
  , app = require(__dirname + '/../lib/server.js')(express)
  , parser = require('xml2json');

var sourceHost = "http://localhost:6969";

before(function(){
  var mockServer = express();
  mockServer.get("/BRAplayerbasicdata.xml", function(req, res) {
    var xml = '<?xml version="1.0"?><PackData><PlayerData baseImageUrl="http://cdn.soccerwiki.org/images/player/"><P id="1" f="John" s="Doe" i="1.jpg"/><P id="2" f="Mary" s="Doe" i="2.jpg"/></PlayerData></PackData>';
    res.end(xml);
  });
  mockServer.listen(6969);

  var controller = require(__dirname + '/../lib/controllers/players')(app, sourceHost, require('request'), parser);
});


describe('GET /players/brazil', function() {
  it('respond with json', function(done) {
    var expectedResponse = '[{"id":1,"fullName":"John Doe","firstName":"John","lastName":"Doe","photo":"http://cdn.soccerwiki.org/images/player/1.jpg"},{"id":2,"fullName":"Mary Doe","firstName":"Mary","lastName":"Doe","photo":"http://cdn.soccerwiki.org/images/player/2.jpg"}]';

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
  xit('respond with json', function(done) {
    var expectedResponse = '[{"id":"10","fullName":"Roberto Baggio","firstName":"Roberto","lastName":"Baggio","photo":"http://cdn.soccerwiki.org/images/player/10.jpg"},{"id":"21","fullName":"Maria Antonieta","firstName":"Maria","lastName":"Antonieta","photo": "http://cdn.soccerwiki.org/images/player/21.jpg"}]';
    request(app)
      .get('/players/italy')
      .expect(200, expectedResponse)
      .end(function(err, res) {
        if (err) return done(err);
        done()
      });
  })
});
