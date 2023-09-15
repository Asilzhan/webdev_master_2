/**
 * @param {number[]} nums
 */
var ArrayWrapper = function(nums) {
    this.nums = nums;
};

ArrayWrapper.prototype.valueOf = function() {
    return this.nums.reduce((acc, num) => acc + num, 0);
};

ArrayWrapper.prototype.toString = function() {
    return `[${this.nums.join(',')}]`;
};
