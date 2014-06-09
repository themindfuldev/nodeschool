var express = require('express');
var path = require('path');
var stylus = require('stylus');
var app = express();

app.use(stylus.middleware(__dirname + '/public'));
app.use(express.static(process.argv[3]));
app.listen(process.argv[2]);
