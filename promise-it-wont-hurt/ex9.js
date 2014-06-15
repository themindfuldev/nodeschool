var q = require('q');

var defer1 = q.defer();
var defer2 = q.defer();

function all() {
    var newDefer = q.defer();
    var counter = 0;
    var results = [];
    var args = Array.prototype.slice.call(arguments, 0);

    args.forEach(function(promise) {
        promise.then(function(result) {
            results.push(result);
            if (++counter === 2) {
                newDefer.resolve(results);
            }
        }, function() {
            newDefer.reject();
        });
    });

    return newDefer.promise;
}

all(defer1.promise, defer2.promise).then(console.log);

setTimeout(function() {
    defer1.resolve('PROMISES');
    defer2.resolve('FTW');
}, 200);
