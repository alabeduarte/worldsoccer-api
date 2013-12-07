var express = require('express');
var app = express();
var port = 3000;

app.get("/", function(req, res){
  var body = '{ "response": "OK" }';
  res.setHeader('Content-Type', 'text/json');
  res.setHeader('Content-Length', body.length);
  res.end(body);
});

app.listen(port);
console.log('Listening on port ' + port);