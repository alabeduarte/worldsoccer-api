var xml2json = require('xml2json');

exports.toJSON = function (xml) {
  var json = xml2json.toJson(xml, { object: true, coerce: false });
  var players = json.PackData.PlayerData.P.map(function (player) {
    return {
      id: player.id,
      fullName: player.f + ' ' + player.s,
      firstName: player.f,
      lastName: player.s,
      photo: json.PackData.PlayerData.baseImageUrl + player.i
    };
  });

  return players;
};