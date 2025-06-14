


/**
 * @param {string} str
 * @returns {string}
 */
function uncompress(str) {
  let stack = [];
  for(let ch of str){
    if(ch!==')')stack.push(ch);
    else{
      //char is ')'
      let repeatString = '';
      while(stack.length && stack[stack.length-1]!=='('){
        repeatString = stack.pop()+repeatString;
      }
      stack.pop() //remove '('
      let digit = '';
      while(stack.length && !isNaN(stack[stack.length-1])){
         digit = stack.pop() + digit;
      }
      //create repeat string
      stack.push(repeatString.repeat(parseInt(digit)));
    }
  }
  return stack.join('');
}


