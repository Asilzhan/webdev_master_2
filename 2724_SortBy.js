/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    return arr.slice().sort((a, b) => {
        const valA = fn(a);
        const valB = fn(b);
        return valA < valB ? -1 : (valA > valB ? 1 : 0);
    });
};