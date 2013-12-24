var config = require('config')
  , dbURI    = config.database
  , mongoose = require('mongoose')
  , clearDB  = require('mocha-mongoose')(dbURI)
  , Country = require('../../lib/countries/model');

  beforeEach(function(done) {
    if (mongoose.connection.db) return done();
    mongoose.connect(dbURI, done);
  });

  before(function(done) {
    clearDB(done);
  });

describe('Country Model', function () {
  describe('Saving', function () {

    var brazil;

    beforeEach(function (done) { (brazil = new Country({
      name: 'Brasil',
      flag: 'http://s.glbimg.com/es/sde/f/organizacoes/2013/12/05/Brasil30.png',
      countryId: 'BRA',
      group: 'A',
      points: 0,
      matches: {
        wins: 0,
        draws: 0,
        losses: 0
      },
      goals: {
        scored: 0,
        against: 0
      }
    })).save(done); });

    it('should store name', function () {
      assert.equal(brazil.name, 'Brasil');
    });

    it('should store flag', function () {
      assert.equal(brazil.flag, 'http://s.glbimg.com/es/sde/f/organizacoes/2013/12/05/Brasil30.png');
    });

    it('should store countryId', function () {
      assert.equal(brazil.countryId, 'BRA');
    });

    it('should store group', function () {
      assert.equal(brazil.group, 'A');
    });

    it('should store points', function () {
      assert.equal(brazil.points, 0);
    });

    it('should store matches', function () {
      assert.equal(brazil.matches.wins, 0);
      assert.equal(brazil.matches.draws, 0);
      assert.equal(brazil.matches.losses, 0);
    });

    it('should store goals', function () {
      assert.equal(brazil.goals.scored, 0);
      assert.equal(brazil.goals.against, 0);
    });
  });
});
