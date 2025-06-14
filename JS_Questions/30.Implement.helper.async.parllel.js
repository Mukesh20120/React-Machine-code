const promisify = fun => input => new Promise((res,rej)=>{
    fun((error,data)=>error?rej(error):res(data),input);
  })
 
function promisify(func) {
  return function (input) {
    return new Promise((res, rej) => {
      func((error, data) => {
        if (error) rej(error);
        else res(data);
      }, input)
    })
  }
}
function parallel(funcs) {
  return function (callback, data) {
    const proimises = funcs.map(func => promisify(func)(data));
    Promise.all(proimises)
    .then(results => callback(undefined, results))
    .catch(error => callback(error, undefined));
  }
}

 function parallel(funcs) {
    return function(callback,input){
      let res = [],hasError=false;
       funcs.forEach(func=>{
        func((error,data)=>{
          if(hasError)return;
          if(error){
            hasError=true;
            callback(error,undefined);
            return;
          }
         res.push(data);
         if(res.length === funcs.length){
           callback(undefined,res);
           return;
         }
        },input);
       })
    } 
  }