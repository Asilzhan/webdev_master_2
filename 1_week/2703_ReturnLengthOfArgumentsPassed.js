/**
 * @return {number}
 */
var argumentsLength = function(...args) {
    return args?.length ?? 0;
};

/**
* argumentsLength(1, 2, 3); // 3
*/