class FakeTimer {
    constructor() {
      this.origin = {
        dateNow: Date.now,
        setTimeout: window.setTimeout,
        clearTimeout: window.clearTimeout
      }
      this.queue = []
      this.id = 1
      this.currentTime = 0
    }
    install() {
      // replace window.setTimeout, window.clearTimeout, Date.now
      // with your implementation
      window.setTimeout = (cb, timer, ...args) => {
        const id = this.id++
        this.queue.push({
          id,
          cb,
          time: timer + this.currentTime,
          args
        })
        this.queue.sort((a, b) => a.time - b.time)
        return id
      }
      window.clearTimeout = id => {
        this.queue = this.queue.filter(item => item.id !== id)
      }
      Date.now = () => this.currentTime
    }
    
    uninstall() {
      // restore the original implementation of
      // window.setTimeout, window.clearTimeout, Date.now
      window.setTimeout = this.origin.setTimeout
      window.clearTimeout = this.origin.clearTimeout
      Date.now = this.origin.dateNow
    }
    
    tick() {
      // run the scheduled functions without waiting
      while(this.queue.length) {
        const { cb, time, args } = this.queue.shift()
        this.currentTime = time
        cb(...args)
      }
    }
  }