/**
 * @param {string} input
 * @returns string
 */
function removeChars(input) {
    let res = '';
    for(let ch of input){
      if(ch=='b')continue;
      if(ch=='c' && res.length > 0 && res.charAt(res.length-1)=='a'){
        res=res.slice(0,res.length-1);
        continue;
      }
      res += ch;
    }
    return res;
  }
  console.log(removeChars('ab')) // 'a'
  console.log(removeChars('abc')) // ''
  console.log(removeChars('cabbaabcca')) // 'caa'