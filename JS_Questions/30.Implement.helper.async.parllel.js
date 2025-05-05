
/*
type Callback = (error: Error, data: any) => void

type AsyncFunc = (
   callback: Callback,
   data: any
) => void

*/

/**
 * @param {AsyncFunc[]} funcs
 * @return {(callback: Callback) => void}
 */
const promisify = fun => input => new Promise((res,rej)=>{
    fun((error,data)=>error?rej(error):res(data),input);
  })
  function parallel(funcs) {
   return function(cb,data){
     Promise.all(funcs.map(fun=>promisify(fun)(data)))
     .then(outputs=>cb(undefined,outputs))
     .catch(error=>cb(error,undefined));
   }
  }
  
  //without using promise
  function parallel(funcs) {
    let res = [], cnt = 0, hasError = false;
    return function run(cb, result) {
      funcs.forEach((fn, index) => {
        fn((error, data) => {
          if (hasError) return;
          if (error) {
            hasError = true;
            cb(error, undefined);
            return;
          }
          res[index] = data;
          cnt++;
          if (cnt === funcs.length) {
            cb(undefined, res);
          }
        })
      })
    }
  }