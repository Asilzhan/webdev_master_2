/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const idMap = {};

    // Process arr1
    for (const obj of arr1) {
        idMap[obj.id] = { ...obj };
    }

    // Process arr2
    for (const obj of arr2) {
        if (idMap[obj.id]) {
            // Merge properties if id already exists
            idMap[obj.id] = { ...idMap[obj.id], ...obj };
        } else {
            // Add new object if id doesn't exist
            idMap[obj.id] = { ...obj };
        }
    }

    // Convert the idMap to an array and sort it by id
    const joinedArray = Object.values(idMap).sort((a, b) => a.id - b.id);

    return joinedArray;
};