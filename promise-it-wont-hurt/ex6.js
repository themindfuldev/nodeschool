var q = require('q');
var defer = q.defer();

function parsePromised(json) {
    var promise = defer.promise;

    try {
        JSON.parse(json);
        defer.resolve();
    }
    catch (e) {
        defer.reject(e);
    }

    return promise;
}

parsePromised(process.argv[2]).then(null, console.log);
