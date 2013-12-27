var nock = require('nock')
  , app = require('../../lib/players')
  , url = 'http://c3420952.r52.cf0.rackcdn.com';

describe('Players', function () {
  describe('GET /bra/players', function () {
    before(function () {
      var xml = '<?xml version="1.0"?><PackData><PlayerData baseImageUrl="http://cdn.soccerwiki.org/images/player/"><P id="1" f="John" s="Doe" i="1.jpg"/><P id="2" f="Mary" s="Doe" i="2.jpg"/></PlayerData></PackData>';
      nock(url).get('/BRAplayerbasicdata.xml').reply(200, xml);
    });
    it('respond with json', function (done) {
      var expectedResponse = [
        {
          "id": "1",
          "fullName": "John Doe",
          "firstName": "John",
          "lastName": "Doe",
          "photo": "http://cdn.soccerwiki.org/images/player/1.jpg"
        },
        {
          "id": "2",
          "fullName": "Mary Doe",
          "firstName": "Mary",
          "lastName": "Doe",
          "photo": "http://cdn.soccerwiki.org/images/player/2.jpg"
        }
      ];
      request(app).get('/bra/players', 200, expectedResponse, done);
    });
  });

  describe('GET /ita/players', function () {
    before(function () {
      var xml = '<?xml version="1.0"?><PackData><PlayerData baseImageUrl="http://cdn.soccerwiki.org/images/player/"><P id="10" f="Roberto" s="Baggio" i="10.jpg"/><P id="21" f="Cristian" s="Vieri" i="21.jpg"/></PlayerData></PackData>';
      nock(url).get('/ITAplayerbasicdata.xml').reply(200, xml);
    });
    it('respond with json', function (done) {
      var expectedResponse = [
        {
          "id": "10",
          "fullName": "Roberto Baggio",
          "firstName": "Roberto",
          "lastName": "Baggio",
          "photo": "http://cdn.soccerwiki.org/images/player/10.jpg"
        },
        {
          "id": "21",
          "fullName": "Cristian Vieri",
          "firstName": "Cristian",
          "lastName": "Vieri",
          "photo": "http://cdn.soccerwiki.org/images/player/21.jpg"
        }
      ];
      request(app).get('/ita/players', 200, expectedResponse, done);
    });
  });

  describe('GET /not_found/players', function () {
    before(function () {
      nock(url) .get('/XXXplayerbasicdata.xml').reply(404, '<html><h1>Not Found</h1><p>The resource could not be found.</p></html>');
    });
    it('respond with json', function (done) {
      request(app).get('/xxx/players', 404, {}, done);
    });
  });

  describe('Returning only the 23 selected players', function() {
    describe('GET /bra/players', function () {
      before(function () {
        var xml = '<?xml version="1.0"?><PackData><PlayerData><P id="1" f="John" s="Doe"/><P id="1" f="John" s="Doe"/><P id="1" f="John" s="Doe"/><P id="1" f="John" s="Doe"/><P id="1" f="John" s="Doe"/><P id="1" f="John" s="Doe"/><P id="1" f="John" s="Doe"/><P id="1" f="John" s="Doe"/><P id="1" f="John" s="Doe"/><P id="1" f="John" s="Doe"/><P id="1" f="John" s="Doe"/><P id="1" f="John" s="Doe"/><P id="1" f="John" s="Doe"/><P id="1" f="John" s="Doe"/><P id="1" f="John" s="Doe"/><P id="1" f="John" s="Doe"/><P id="1" f="John" s="Doe"/><P id="1" f="John" s="Doe"/><P id="1" f="John" s="Doe"/><P id="2" f="Mary" s="Doe"/><P id="1" f="John" s="Doe"/><P id="2" f="Mary" s="Doe"/><P id="1" f="John" s="Doe"/><P id="2" f="Mary" s="Doe"/><P id="1" f="John" s="Doe"/><P id="2" f="Mary" s="Doe"/><P id="1" f="John" s="Doe"/><P id="2" f="Mary" s="Doe"/><P id="1" f="John" s="Doe"/><P id="2" f="Mary" s="Doe"/><P id="1" f="John" s="Doe"/><P id="2" f="Mary" s="Doe"/><P id="1" f="John" s="Doe"/><P id="2" f="Mary" s="Doe"/><P id="1" f="John" s="Doe"/><P id="2" f="Mary" s="Doe"/><P id="1" f="John" s="Doe"/><P id="2" f="Mary" s="Doe"/></PlayerData></PackData>';
        nock(url).get('/BRAplayerbasicdata.xml').reply(200, xml);
      });

      it('respond with json', function (done) {
        var lengthShouldEqual = function(lengthToCheck) {
          return function(res) { assert.equal(res.body.length, lengthToCheck); }
        };
        request(app).getWithPredicate('/bra/players', lengthShouldEqual(23), done);
      });
    });
  });
});
