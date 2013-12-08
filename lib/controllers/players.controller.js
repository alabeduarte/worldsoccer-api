module.exports = function(app, countryPrefix, repository) {
  var host = repository.host
    , request = repository.request
    , parser = repository.parser;

  app.get("/players/brazil", function(req, res) {
    findAll(req, res);
  });

  app.get("/players/italy", function(req, res) {
    findAll(req, res);
  });

  function findAll(req, res) {
    var prefix = countryPrefix.get('/players/', req.url);
    var url = host + '/' + prefix + 'playerbasicdata.xml';
    request(url, function(error, response, data) {
      res.end(parser.parse(data));
    });
  }

};