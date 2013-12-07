var express = require('express');
var app = express();

app.get("/", function(req, res){  
  res.end('{ "response": "OK" }');
});

app.listen(process.env.PORT || 3000);
console.log("Listening on " + process.env.PORT);