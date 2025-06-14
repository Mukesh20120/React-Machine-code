
/**
 * @param {string} str
 * @return {string}
 */
function trim(str) {
  let res = '';
  let i=0,ln=str.length;
  while(i<ln && +str.charAt(i)==0)i++;
  console.log(i);
  let lastSpaceCnt=0;
  while(i<ln){
    if(+str.charAt(i)==0)lastSpaceCnt++;
    else{
       if(lastSpaceCnt>0){
        res+= ' '.repeat(lastSpaceCnt);
        lastSpaceCnt=0;
       }
       res+=str.charAt(i);
    }
    i++;
  }
  return res;
}

//other solution to check

/**
 * @param {string} str
 * @return {string}
 */
const WHITESPACES = [" ","", "\s", "\t", "\n", "\u3000"];
function trim(str) {
  // your code here
  let ln=str.length;
  let i=0,j=ln-1;
  while(i<ln && WHITESPACES.includes(str[i]))i++;
  while(j>=0 && WHITESPACES.includes(str[j]))j--;

  return str.slice(i,j+1);
}