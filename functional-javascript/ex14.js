function repeat(operation, num) {
    // Modify this so it doesn't cause a stack overflow!
    if (num <= 0) return 0;
    operation();
    return --num;//repeat(operation, --num);
}

function trampoline(fn, operation, num) {
    do {
      num = fn(operation, num);
    } while (num > 0);
}

module.exports = function(operation, num) {
    // You probably want to call your trampoline here!
    return trampoline(repeat, operation, num);
}