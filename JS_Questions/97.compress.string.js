
/**
 * @param {string} str
 * @return {string}
 */
function compress(str) {
  let res = '';
  let i = 0, ln = str.length;
  while (i < ln) {
    let j = i+1, cnt = 1;
    while (j < ln && str[i] === str[j]) { 
      cnt++; 
      j++; 
    }
    res+=str[i];
    if(cnt>1){
      res+=cnt;
    }
    i=j;
  }
  return res;
}




function compress(str) {
  let res = [];
  let i = 0, ln = str.length;
  while (i < ln) {
    let cnt = 1;
    while (str[i] === str[i + cnt]) cnt++;
    res.push(str[i]);
    if (cnt > 1) res.push(cnt);
    i += cnt;
  }
  return res.join('');
}