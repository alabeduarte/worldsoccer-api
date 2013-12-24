var config = require('config')
  , dbURI    = config.database
  , mongoose = require('mongoose')
  , clearDB  = require('mocha-mongoose')(dbURI)
  , Country = require('../../lib/countries/model')
  , app = require('../../lib/countries');

  beforeEach(function (done) {
    if (mongoose.connection.db) return done();
    mongoose.connect(dbURI, done);
  });

  before(function (done) {
    clearDB(done);
  });

describe('Countries', function () {
  describe('GET /', function () {

    var brazil, italy, germany, spain;
    beforeEach(function (done) { (germany = new Country({
      name: 'Alemanha',
      countryId: 'GER',
      group: 'C',
      points: 6
    })).save(done); });
    beforeEach(function (done) { (brazil = new Country({
      name: 'Brasil',
      countryId: 'BRA',
      group: 'A',
      points: 3
    })).save(done); });
    beforeEach(function (done) { (spain = new Country({
      name: 'Espanha',
      countryId: 'ESP',
      group: 'C',
      points: 10
    })).save(done); });
    beforeEach(function (done) { (italy = new Country({
      name: 'Itália',
      countryId: 'ITA',
      group: 'B',
      points: 6
    })).save(done); });

    it('respond with json', function (done) {
      request(app).get('/', 200, JSON.stringify([brazil, italy, spain, germany]), done);
    });
  });
});
