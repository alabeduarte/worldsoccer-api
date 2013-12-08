module.exports = function(app, sourceHost, request, parser) {

  app.get("/players/brazil", function(req, res) {
    var url = sourceHost + "/BRAplayerbasicdata.xml";
    request(url, function(error, response, data) {
      res.end(parser.parse(data));
    });
  });

  app.get("/players/italy", function(req, res) {
    var url = sourceHost + "/BRAplayerbasicdata.xml";
    request(url, function(error, response, data) {
      res.end(parser.parse(data));
    });
  });

};