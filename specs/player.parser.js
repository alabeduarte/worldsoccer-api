var assert = require('assert')
  , xml2json = require('xml2json');

it('should return players parsed from xml to json', function() {
  var xml = '<?xml version="1.0"?><PackData><PlayerData baseImageUrl="http://cdn.soccerwiki.org/images/player/"><P id="1" f="John" s="Doe" i="1.jpg"/><P id="2" f="Mary" s="Doe" i="2.jpg"/></PlayerData></PackData>';
  var expectedJson = '[{"id":1,"fullName":"John Doe","firstName":"John","lastName":"Doe","photo":"http://cdn.soccerwiki.org/images/player/1.jpg"},{"id":2,"fullName":"Mary Doe","firstName":"Mary","lastName":"Doe","photo":"http://cdn.soccerwiki.org/images/player/2.jpg"}]';
  var parser = require(__dirname + '/../lib/player.parser')(xml2json);

  console.log(parser);

  assert.equal(parser.parse(xml), expectedJson);
});