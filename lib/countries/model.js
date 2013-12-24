var mongoose = require('mongoose');
var CountrySchema = mongoose.Schema({
  name: String,
  flag: String,
  countryId: String,
  group: String,
  points: Number,
  matches: mongoose.Schema.Types.Mixed,
  goals: mongoose.Schema.Types.Mixed
}, { versionKey: false });

module.exports = mongoose.model('Country', CountrySchema);