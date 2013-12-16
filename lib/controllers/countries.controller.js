module.exports = function(app) {
  var Country = require(__dirname + '/../models/country.model')();

  app.get("/countries", function(req, res) {
    Country.find({}, function(err, countries) {
      res.end(JSON.stringify(countries));
    });
  });

};