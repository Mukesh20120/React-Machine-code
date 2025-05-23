// You can use Observer which is bundled to your code

// class Observer {
//   // subscriber could one next function or a handler object {next, error, complete}
//   constructor(subscriber) { }
//   next(value) { }
//   error(error) { }
//   complete() {}
// }


class Subject {
  constructor() {
    this.subscribers = []
  }
  subscribe(subscriber) {
     const sub = new Observer(subscriber);
     this.subscribers.push(sub);
     return {
      unsubscribe : ()=>{
        this.subscribers = this.subscribers.filter(s=>s!==sub);
      }
     }
  }
  next = (val)=>{this.subscribers.forEach(sub=>sub.next(val))}
  error = (error)=>{this.subscribers.forEach(sub=>sub.error(error))}
  complete = ()=>{this.subscribers.forEach(sub=>sub.complete())}
}