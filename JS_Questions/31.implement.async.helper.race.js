function race(funcs){
    let called=false;
    return function fun(cb,data){
      funcs.forEach(fn=>{
        fn((error,res)=>{
          if(called)return;
          if(error){
            called=true;
            cb(error,undefined);
            return;
          }
          called = true;
          cb(undefined,res);
        })
      })
    }
  }