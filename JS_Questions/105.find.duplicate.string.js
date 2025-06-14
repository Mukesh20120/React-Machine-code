/**
 * @param {string} str
 * @return {string | null}
 */
function firstDuplicate(str) {
  const hash = {};
  for(let ch of str){
    if(hash[ch])return ch;
    hash[ch]=ch;
  }
  return null;
}
function firstDuplicate(str) {
  const hash = new Set();
  for(let ch of str){
    if(hash.has(ch))return ch;
    hash.add(ch);
  }
  return null;
}