
/**
 * @param {string} str
 * @return {string}
 */
function longestUniqueSubstr(str) {
  let hash = new Array(255);
  hash.fill(0);
  let ln = str.length;
  let i = 0, j = 0, ans = '';
  while (i < ln) {
    hash[str.charCodeAt(i)]++;

    if (hash[str.charCodeAt(i)] > 1) {
      while (j <= i && hash[str.charCodeAt(i)] > 1) {
        hash[str.charCodeAt(j++)]--;
      }
    }

    if (ans.length < (i - j + 1)) {
      ans = str.slice(j, i - j + 1);
    }
    i++;
  }
  return ans;
}