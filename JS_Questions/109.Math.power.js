
/**
 * @param {number} base
 * @param {number} power - integer
 * @return {number}
 */
function pow(base, power){
  let negative = false;
  if(power===0)return 1;
  if(power<0){negative=true;power=-power;}
  let res = 1;
  while(power>0){
     if(power%2==1)
       res*=base;
      power=Math.floor(power/2);
      base*=base;
  }
  return negative?1/res:res;
}