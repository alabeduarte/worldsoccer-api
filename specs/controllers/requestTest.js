module.exports = function(app) {
  return {
    get: function(url, statusCode, expectedResponse, done) {
      var request = require('supertest');
      request(app)
        .get(url)
        .expect(statusCode, expectedResponse)
        .end(function(err, res) {
          if (err) return done(err);
            done();
        });
    }
  };
}