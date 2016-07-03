
var express = require('express');
var posts = require('./mock/posts.json');
var app = express();

app.get('/', function (req, res) {
  res.send('<h1>My name is Max</h1>');
});

app.get('/blog', function (req,res) {
  res.send(posts);
});

app.listen(3000, function () {
  console.log('Frontend Server Running');
});
