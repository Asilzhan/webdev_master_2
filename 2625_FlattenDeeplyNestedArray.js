/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function(arr, depth) {
    if (depth === 0) {
        return arr;
    }

    const result = [];
    for (const item of arr) {
        if (Array.isArray(item)) {
            const flattened = flat(item, depth - 1);
            result.push(...flattened);
        } else {
            result.push(item);
        }
    }
    return result;
};