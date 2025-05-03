

// This is a JavaScript coding problem from BFE.dev 

/**
 * @param {(...args: any[]) => any} func
 * @param {number} wait
 * @param {boolean} option.leading
 * @param {boolean} option.trailing
 * @returns {(...args: any[]) => any}
 */
function throttle(func, wait, option = {leading: true, trailing: true}) {
    let isWaiting = false;
    let lastArgs = null;
    const {leading=true, trailing=true} = option;
    const coolDownPeriod = ()=>{
      if(lastArgs!=null && trailing){
        func.apply(this,lastArgs);
        lastArgs = null;
        setTimeout(coolDownPeriod,wait);
      }
      else{
        isWaiting = false;
      }
    }
  
    return function(...args){
       if(!isWaiting){
        if(leading){
        func.apply(this,args);
        }
        else if(trailing){
          lastArgs = args;
        }
        isWaiting = true;
        setTimeout(coolDownPeriod,wait);
       }
       else if(trailing){
        lastArgs = args;
       }
    }
  }
  
  
  
  