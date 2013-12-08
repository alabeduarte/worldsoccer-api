module.exports = function(express) {
  var server = express();

  server.get("/", function(req, res) {
    res.end('{ "response": "OK" }');
  });

  server.listen(process.env.PORT || 3000);
  console.log("Listening on " + process.env.PORT);

  return server;
};
