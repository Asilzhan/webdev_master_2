class EventEmitter {
    constructor() {
      this.events = {};
    }
  
    subscribe(event, cb) {
      if (!this.events[event]) {
        this.events[event] = [];
      }
  
      this.events[event].push(cb);
  
      return {
        unsubscribe: () => {
          const index = this.events[event].indexOf(cb);
          if (index !== -1) {
            this.events[event].splice(index, 1);
          }
        }
      };
    }
  
    emit(event, args = []) {
      const results = [];
  
      if (!this.events[event]) {
        return results;
      }
  
      for (const cb of this.events[event]) {
        results.push(cb(...args));
      }
  
      return results;
    }
  }
  
  
  /**
   * const emitter = new EventEmitter();
   *
   * // Subscribe to the onClick event with onClickCallback
   * function onClickCallback() { return 99 }
   * const sub = emitter.subscribe('onClick', onClickCallback);
   *
   * emitter.emit('onClick'); // [99]
   * sub.unsubscribe(); // undefined
   * emitter.emit('onClick'); // []
   */