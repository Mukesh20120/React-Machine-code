
/**
 * @param {number} num
 * @return {string}
 */
function addComma(num) {
    let neg = false;
    if(num<0){
      neg=true;
      num*=-1;
    }
    let [intPart,decPart] = num.toString().split('.');
    let res='';
    while(intPart.length>3){
      res=','+intPart.slice(-3)+res;
      intPart=intPart.slice(0,-3);
    }
    res=intPart+res;
    if(decPart){
      res=res+'.'+decPart;
    }
    return neg?"-"+res:res;
  }
  
  console.log(addComma(1)); // '1'
  console.log(addComma(1000)); // '1,000'
  console.log(addComma(-12345678)); // '-12,345,678'
  console.log(addComma(12345678.12345)); // '12,345,678.12345'