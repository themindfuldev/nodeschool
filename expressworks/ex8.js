var express = require('express');
var fs = require('fs');
var app = express();

app.get('/', function(req, res) {
    fs.readFile(process.argv[3], function(data) {
        var object = JSON.parse(data);
        res.json(object);
    });
});
app.listen(process.argv[2]);
