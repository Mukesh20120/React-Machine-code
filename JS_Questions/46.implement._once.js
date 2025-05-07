/**
 * @param {Function} func
 * @return {Function}
 */
function once(func) {
    let result;
    let isCalled=false;
    return function(...args){
      if(isCalled)return result;
      result = func.apply(this,args);
      isCalled = true;
      return result;
    }
  }