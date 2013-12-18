var mongoose = require('mongoose');
var countrySchema = mongoose.Schema({
  name: String,
  flag: String,
  countryId: String
}, { versionKey: false });

module.exports = mongoose.model('Country', countrySchema);