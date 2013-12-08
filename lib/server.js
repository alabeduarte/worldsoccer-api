module.exports = function(express) {
  var app = express();
  var port = process.env.PORT || 3000;

  app.get("/", function(req, res) {
    res.end('{ "response": "OK" }');
  });

  app.listen(port);
  console.log("Listening on " + port);

  return app;
};
