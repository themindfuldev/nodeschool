var express = require('express');
var app = express();

app.get('/search', function(req, res) {
    var original = JSON.stringify(req.query);
    var response = original.replace('{', '{\n  ').replace(/,/g, ',\n  ').replace(/:/g, ': ').replace('}', '\n}');
    res.send(response);
})
app.listen(process.argv[2]);
