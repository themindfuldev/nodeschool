var http = require('q-io/http');

http.read('http://localhost:1337').then(function(json) {
    var object = JSON.parse(json);
    console.log(object);
})
