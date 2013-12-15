var mongoose = require('mongoose');
var countrySchema = mongoose.Schema({ name: String, flag: String, countryId: String});

module.exports = function() {
  return mongoose.model('Country', countrySchema);
}