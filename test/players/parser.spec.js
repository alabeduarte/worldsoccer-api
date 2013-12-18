describe('parse xml to JSON', function () {
  it('should return players parsed from xml to json', function() {
    var xml = '<?xml version="1.0"?><PackData><PlayerData baseImageUrl="http://cdn.soccerwiki.org/images/player/"><P id="1" f="John" s="Doe" i="1.jpg"/><P id="2" f="Mary" s="Doe" i="2.jpg"/></PlayerData></PackData>';
    var expectedJson = [
      {
        "id": "1",
        "fullName": "John Doe",
        "firstName": "John",
        "lastName": "Doe",
        "photo": "http://cdn.soccerwiki.org/images/player/1.jpg"
      },
      {
        "id": "2",
        "fullName": "Mary Doe",
        "firstName": "Mary",
        "lastName": "Doe",
        "photo": "http://cdn.soccerwiki.org/images/player/2.jpg"
      }
    ];
    var parser = require('../../lib/players/parser');

    assert.deepEqual(parser.toJSON(xml), expectedJson);
  });
});
