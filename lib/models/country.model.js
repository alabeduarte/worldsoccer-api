var mongoose = require('mongoose');
var countrySchema = mongoose.Schema({ name: String, imageUrl: String});

module.exports = function() {
  return mongoose.model('Country', countrySchema);
}