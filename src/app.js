
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('<h1>My name is Max</h1>');
});

app.listen(3000, function () {
  console.log('Frontend Server Running');
});
