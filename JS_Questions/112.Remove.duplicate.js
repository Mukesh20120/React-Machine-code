
/**
 * @param {string} str
 * @return {string}
 */
function smallestUniqueSubstr(str) {
  let lastIndex = new Map();
  let seen = new Set();
  let stack = [];
  for(let i=0;i<str.length;i++){
    lastIndex.set(str[i],i);
  }
  for(let i=0;i<str.length;i++){
    let ch = str[i];
    if(seen.has(ch))continue;
    while(stack.length>0 && stack[stack.length - 1] > ch && lastIndex.get(stack[stack.length - 1])>i){
      seen.delete(stack.pop());
    }
    seen.add(ch);
    stack.push(ch);
  }
return stack.join('');
}