

function createCounter() {
 let val = -1;
 return Object.defineProperty({},'count',{
  get (){
    return ++val;
  },
  set(){

  },
  enumerable: true,
  configurable: false
 });
}

