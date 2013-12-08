module.exports = function(S) {
  Prefix = function(){};

  Prefix.prototype.get = function(pattern, url) {
    var prefix_length = 3;
    return S(url).chompLeft('/players/').left(prefix_length).toUpperCase().s;
  };

  return new Prefix();
};