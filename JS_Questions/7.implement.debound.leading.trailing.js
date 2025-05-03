

// This is a JavaScript coding problem from BFE.dev 

/**
 * @param {(...args: any[]) => any} func
 * @param {number} wait
 * @param {boolean} option.leading
 * @param {boolean} option.trailing
 * @returns {(...args: any[]) => any}
 */
function debounce(func, wait, option = {leading: false, trailing: true}) {
    let timer=null;
    let isCalled = false;
    let lastArgs=null;
    const {leading=false,trailing=true} = option;
  
    const callLater = ()=>{
      timer = null;
      if(lastArgs!=null && trailing){
        func.apply(this,lastArgs);
        lastArgs = null;
      }
      isCalled = false;
    }
  
    return function (...args){
      if(!isCalled && !timer && leading){
        func.apply(this,args);
        isCalled = true;
      }
      else{
        lastArgs = args;
      }
      clearTimeout(timer);
      timer = setTimeout(callLater,wait);
    }
  }
  
  
  
  