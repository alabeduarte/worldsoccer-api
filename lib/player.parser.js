module.exports = function(xml2json) {
  var Parser = function() {};

  Parser.prototype.parse =  function(xml) {
    var json = xml2json.toJson(xml, { object: true });
    var players = json.PackData.PlayerData.P.map(function(player) {
      return {
        id: player.id,
        fullName: player.f + ' ' + player.s,
        firstName: player.f,
        lastName: player.s,
        photo: json.PackData.PlayerData.baseImageUrl + player.i
      };
    });

    return JSON.stringify(players);
  };

  return new Parser();
};