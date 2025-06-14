
/**
 * @param {string} str
 * @return {string}
 */
function snakeToCamel(str) {
  let result = '';
  let ln = str.length;
  let i = 0;
  while (i < ln && str[i] === '_') {
    result += '_';
    i++;
  }
  while (i < ln) {
    let ch = str[i++];
    if (ch === '_') {
      let cntUnderscore = 1;
      while (i<ln && str[i] === '_') {
        cntUnderscore++;
        i++;
      }
      if(cntUnderscore===1 && i<ln){
        result+=str[i++].toUpperCase();
      }
      else{
        result+='_'.repeat(cntUnderscore);
      }
    }
    else{
      result+=ch;
    }
  }
  return result;
}