module.exports = {
  get: function(pattern, url) {
    var prefixLength = 3;
    var S = require('string');
    return S(url).chompLeft(pattern).left(prefixLength).toUpperCase().s;
  }
};