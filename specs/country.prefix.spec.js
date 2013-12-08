var assert = require('assert')
  , S = require('string');

  var countryPrefix;

  beforeEach(function() {
    countryPrefix = require(__dirname + '/../lib/country.prefix')(S);
  });

  describe('given url "/players/brazil"', function() {
    it('should return country prefix', function() {
      assert.equal(countryPrefix.get('/players/', '/players/brazil'), 'BRA');
    });
  });

  describe('given url "/players/italy"', function() {
    it('should return country prefix', function() {
      assert.equal(countryPrefix.get('/players/', '/players/italy'), 'ITA');
    });
  });