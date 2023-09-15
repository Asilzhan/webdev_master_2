/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    if (Array.isArray(obj)) {
        const compactedArray = obj
            .map(item => compactObject(item))
            .filter(Boolean);
        return compactedArray;
    } else if (typeof obj === 'object' && obj !== null) {
        const compactedObj = {};
        for (const [key, value] of Object.entries(obj)) {
            const compactedValue = compactObject(value);
            if (Boolean(compactedValue)) {
                compactedObj[key] = compactedValue;
            }
        }
        return compactedObj;
    } else {
        return obj;
    }
};