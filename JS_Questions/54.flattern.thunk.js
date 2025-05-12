
/**
 * @param {Thunk} thunk
 * @return {Thunk}
 */
function flattenThunk(thunk) {
  return function(finalCallback){
    
    const unwrap = (error,result)=>{
       if(error){
        finalCallback(error);
       }
       else if(typeof result === 'function'){
         return result(unwrap);
       }
       else{
         finalCallback(undefined,result);
       }
    }
    thunk(unwrap);
  }
}