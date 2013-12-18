var config = require('config')
  , dbURI    = config.database
  , mongoose = require('mongoose')
  , clearDB  = require('mocha-mongoose')(dbURI)
  , Country = require('../../lib/countries/model')
  , app = require('../../lib/countries');

  beforeEach(function(done) {
    if (mongoose.connection.db) return done();
    mongoose.connect(dbURI, done);
  });

  before(function(done) {
    clearDB(done);
  });

describe('Countries', function () {
  describe('GET /', function () {

    var brazil, italy;
    beforeEach(function (done) { (brazil = new Country()).save(done); });
    beforeEach(function (done) { (italy = new Country()).save(done); });

    it('respond with json', function (done) {
      request(app).get('/', 200, JSON.stringify([brazil, italy]), done);
    });
  });
});
