var dbURI    = process.env.MONGOLAB_URI
  , mongoose = require('mongoose')
  , clearDB  = require('mocha-mongoose')(dbURI)
  , Country = require(__dirname + '/../../lib/models/country.model')()
  , request = require(__dirname + '/requestTest')
  , app = require(__dirname + '/../../lib/server')(require('express'));

  require(__dirname + '/../../lib/controllers/countries.controller')(app);

  beforeEach(function(done) {
    if (mongoose.connection.db) return done();
    mongoose.connect(dbURI, done);
  });

  before(function(done) {
    clearDB(done);
  });

  describe('GET /countries', function() {
    var expectedResponse;
    beforeEach(function(done) {
      Country.create({
        name: "Brazil",
        flag: "http://image.worldsoccer-api.com/brazil.jpg",
        counryId: "BRA"
      }, function(err, country) {
        Country.find({}, function(err, countries) {
          expectedResponse = JSON.stringify(countries);
          done();
        });
      });
    });

    it('respond with json', function(done) {
      request(app).get('/countries', expectedResponse, done);
    });
  });