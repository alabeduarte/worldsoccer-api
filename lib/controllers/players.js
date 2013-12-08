module.exports = function(app, sourceHost, request, parser) {
  var url = sourceHost + "/BRAplayerbasicdata.xml";

  app.get("/players/brazil", function(req, res) {
    request(url, function(error, response, data) {
      var players = parsePlayers(data);
      res.end(JSON.stringify(players));
    });
  });

  app.get("/players/italy", function(req, res) {
    request(url, function(error, response, data) {
      var players = parsePlayers(data);
      res.end(JSON.stringify(players));
    });
  });

  function parsePlayers(data) {
    var json = parser.toJson(data, { object: true });
    var players = json.PackData.PlayerData.P.map(function(player) {
      return {
        id: player.id,
        fullName: player.f + ' ' + player.s,
        firstName: player.f,
        lastName: player.s,
        photo: json.PackData.PlayerData.baseImageUrl + player.i
      };
    });

    return players;
  }

};