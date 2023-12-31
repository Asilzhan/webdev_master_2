/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    var innerValue = n;
    return function() {
        return innerValue++;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */