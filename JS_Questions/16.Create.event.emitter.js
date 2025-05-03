class EventEmitter {
    constructor() {
      this.hashMap = new Map();
    }
    subscribe(eventName, callback) {
      if (!this.hashMap.has(eventName)) {
        this.hashMap.set(eventName, new Set());
      }
      const subArray = this.hashMap.get(eventName);
      const callbackObj = { callback };
      subArray.add(callbackObj);
      return {
        release: function () {
          subArray.delete(callbackObj);
          if (subArray.length == 0) {
            this.hashMap.delete(eventName);
          }
        }
      }
    }
    emit(eventName, ...args) {
      const subArray = this.hashMap.get(eventName) || [];
      if (subArray) {
        subArray.forEach((callbackObj) => {
          callbackObj.callback.apply(this, args);
        })
      }
    }
  }