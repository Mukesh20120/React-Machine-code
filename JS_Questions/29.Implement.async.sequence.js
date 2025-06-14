
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
function sequence(funcs){

    return function run(callback,data){
       function runNext(index,data){
           if(index == funcs.length){
             callback(undefined,data);
             return;
           }
           const curFun = funcs[index];
           const cb = ((e,d)=>{
             if(e){
               callback(e,d);
               return;
             }
             runNext(index+1,d);
           });
         curFun(cb,data);
       }
       runNext(0,data);
    }
   }

   
   function sequence(funcs){
     let q = [...funcs];
     return function run(callback,data){
       if(q.length === 0){
         callback(undefined,data);
         return;
       }
       const curFun = q.shift();
       const cb = ((e,d)=>{
         if(e){
           callback(e,d);
           return;
         }
         run(callback,d);
       });
       curFun(cb,data);
     }
   }



   function sequence(funcs) {
  return function (callback, data) {
    let i = 0;

    function next(err, result) {
      if (err || i === funcs.length) {
        callback(err, result);
        return;
      }
      funcs[i++](next, result);
    }

    next(undefined, data);
  };
}
