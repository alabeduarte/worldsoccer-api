module.exports = {
  parse: function(xml) {
    var json = require('xml2json').toJson(xml, { object: true, coerce: false });
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
  }
};