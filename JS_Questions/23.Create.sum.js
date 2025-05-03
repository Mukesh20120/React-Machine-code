/**
 * @param {number} num
 */
function sum(x) {
    function innerSum(y){
     return sum(x+y)
    }
    innerSum.valueOf = function(){
      return x;
    }
  return innerSum;
  }
  