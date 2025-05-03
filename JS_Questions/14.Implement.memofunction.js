function memo(func, resolver) {
    const hash = new Map();
    // return (...args)=>{
    return function(...args){
      let key;
       if(typeof resolver == 'function')
         key = resolver.apply(this,args);
       else
         key = args.join("_");
       if(hash.has(key)){
         return hash.get(key);
       }
       const result = func.apply(this,args);
       hash.set(key,result);
      return result;
    }
  }

  //other way to write this solution
  function memo(func, resolver) {
    const hash = new Map();
    return function(){
      let key;
       if(typeof resolver == 'function')
         key = resolver.apply(this,arguments);
       else
         key = Array.from(arguments).join("_");
       if(hash.has(key)){
         return hash.get(key);
       }
       const result = func.apply(this,arguments);
       hash.set(key,result);
      return result;
    }
  }

  //   Arrow functions don’t bind their own this — so using .apply(this, ...) inside an arrow function will not preserve the caller’s this.