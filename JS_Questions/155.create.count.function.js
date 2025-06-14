

const count = (function(){
  let val = 0;
  function counter(){
    return ++val;
  }
  counter.reset = function(){
    val = 0;
  }
  return counter;
})();