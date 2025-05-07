(function(){
    const originalSetTimeOut = window.setTimeout;
    const originalClearTimeOut = window.clearTimeout;
    const timerIds = new Set();
  
    window.setTimeout = function(fn,dely,...args){
      const id = originalSetTimeOut(fn,dely,...args);
      timerIds.add(id);
      return id;
    }
    window.clearTimeout = function(id){
      originalClearTimeOut(id);
      timerIds.delete(id);
    }
    window.clearAllTimeout = function(){
      for(const id of timerIds){
         originalClearTimeOut(id);
      }
      timerIds.clear();
    }
  })();