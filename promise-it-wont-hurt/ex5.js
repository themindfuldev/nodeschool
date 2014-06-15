var q = require('q');
var defer = q.defer();

function attachTitle(value) {
    return 'DR. ' + value;
}

defer.promise.then(attachTitle).then(console.log);

defer.resolve('MANHATTAN');

