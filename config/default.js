module.exports = {
  port: process.env.PORT || 5000,
  database: process.env.MONGOLAB_URI || 'mongodb://localhost:27017/worldsoccer-api-dev'
};