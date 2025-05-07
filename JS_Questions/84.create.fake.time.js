class FakeTimer {
    constructor(){
       this.origin = {
        setInterval: window.setInterval,
        clearInterval: window.clearInterval,
        date: Date.now
      }
      this.id=0;
      this.currentTime = 0;
      this.queue = []
    }
    scheduleTask(task){
      task.time = task.interval + this.currentTime;
      this.queue.push(task);
      this.queue.sort((a,b)=>a.time - b.time);
    }
    install() {
      // replace window.setInterval, window.clearInterval, Date.now
      // with your implementation
      window.setInterval = (fn,interval,...args)=>{
         const id = this.id++;
         const task = {id,fn,interval,args};
         this.scheduleTask(task);
         return id;
      }
      window.clearInterval = (id)=>{
        this.queue = this.queue.filter(item=>item.id!=id);
      }
      Date.now = ()=>this.currentTime;
    }
    
    uninstall() {
      // restore the original implementation of
      // window.setInterval, window.clearInterval, Date.now
      window.setInterval = this.origin.setInterval;
      window.clearInterval = this.origin.clearInterval;
      Date.now = this.origin.date;
    }
    
    tick() {
      while(this.queue.length){
        const task = this.queue.shift();
        const {fn,args,time} = task;
        this.currentTime = time;
        this.scheduleTask(task);
        fn(...args);
      }
    }
  }