var TimeLimitedCache = function() {
    this.cache = {};
    this.keyCount = 0;
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    let existed = false;
    if (this.cache[key] && !this.cache[key].expired) {
        existed = true;
        clearTimeout(this.cache[key].timeoutId);
    }
    
    this.cache[key] = { value, expired: false };
    
    if (!existed) {
        this.keyCount++;
    }
    
    this.cache[key].timeoutId = setTimeout(() => {
        this.cache[key].expired = true;
        this.keyCount--;
    }, duration);
    
    return existed;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    if (this.cache[key] && !this.cache[key].expired) {
        return this.cache[key].value;
    }
    return -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return this.keyCount;
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */