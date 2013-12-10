module.exports = function(express) {
  var app = express();
  var port = process.env.PORT || 3000;

  app.get("/", function(req, res) {
    res.end('{ "response": "OK" }');
  });

  app.use(function(req, res, next){
    if (!res.getHeader('Cache-Control')) res.setHeader('Cache-Control', 'public, max-age=' + 28800);
    next();
  });

  app.listen(port);
  console.log("Listening on " + port);

  return app;
};
