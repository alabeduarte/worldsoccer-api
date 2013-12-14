module.exports = function(app) {
  return {
    get: function(url, expectedResponse, done) {
      var request = require('supertest');
      request(app)
        .get(url)
        .expect(200, expectedResponse)
        .end(function(err, res) {
          if (err) return done(err);
            done();
        });
    }
  };
}