function throttle(func, wait) {
    let isWaiting=false;
    let lastArg=null;
    const cooldownPeriod =()=>{
      if(lastArg!=null){
         func.apply(this,lastArg);
         lastArg = null;
         setTimeout(cooldownPeriod,wait);
      }else{
       isWaiting = false;
      }
    }
    return function(...args){
      if(!isWaiting){
          func.apply(this,args);
          isWaiting = true;
          setTimeout(cooldownPeriod,wait);
      }
      else{
       lastArg = args;
      }
    }
 }