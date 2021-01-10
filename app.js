const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/get', function (req, res) {
  res.send('Welcome to my api')
})

app.listen(3000, () => console.log('Example app listening on port 3000!'));