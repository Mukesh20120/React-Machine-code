
//using boolean array
//O(N*M)
function highlightKeywords(html, keywords) {
  let arr = new Array(html.length + 1);
  //fill the array with true
  keywords.forEach(w => {
    let start = html.indexOf(w);
    while (start != -1) {
      arr.fill(true, start, start + w.length);
      start = html.indexOf(w, start + 1);
    }
  });
  let res = arr[0] ? "<em>" : '';
  for (let i = 0; i < arr.length - 1; i++) {
    res += html.charAt(i);
    if (!arr[i] && arr[i + 1]) res += '<em>';
    else if (arr[i] && !arr[i + 1]) res += '</em>';
  }
  return res;
}
console.log(highlightKeywords(
  'Hello FrontEnd Lovers',
  ['Hello', 'Front', 'JavaScript']
));


//using merge interval
//O(N*M) + O(NlogN)
function highlightKeywords(html, keywords) {
  let intervals = [];
  //give 1 index based
  keywords.forEach(w => {
    let start = html.indexOf(w);
    while (start != -1) {
      intervals.push([start,start+w.length])
      start = html.indexOf(w, start + 1);
    }
  });
  if(intervals.length===0)return html;
  //merge all overlaped intervals
  intervals.sort((a,b)=>a[0]-b[0]);
  let merged = [intervals[0]];
  for(let i=1;i<intervals.length;i++){
    let last = merged[merged.length-1];
    if(last[1] >= intervals[i][0]){
       last[1] = Math.max(last[1],intervals[i][1]);
    }
    else{
      merged.push(intervals[i]);
    }
  }

  let prev = 0;
  let res = '';

  merged.forEach(([start,end])=>{
     res+=html.substring(prev,start);
     res+='<em>'+html.substring(start,end)+'</em>';
     prev = end;
  })
  res+=html.substring(prev);
  return res;
}
console.log(highlightKeywords(
  'Hello FrontEnd Lovers',
  ['Hello', 'Front', 'JavaScript']
));


//using aho-corasick algorithm
//O(N+M)

// This is a JavaScript coding question from BFE.dev
/**
 * @param {string} html
 * @param {string[]} keywords
 */
class TrieNode {
  constructor() {
    this.children = {};
    this.fail = null;
    this.output = [];
  }
}

function buildTrie(patterns = []) {
  const root = new TrieNode();
  //building trie
  for (let word of patterns) {
    let node = root;
    for (let ch of word) {
      if (!node.children[ch]) {
        node.children[ch] = new TrieNode();
      }
      node = node.children[ch];
    }
    node.output.push(word);
  }

  //building fail links
  let queue = [];
  for (let key in root.children) {
    root.children[key].fail = root;
    queue.push(root.children[key]);
  }

  while (queue.length > 0) {
    let current = queue.shift();
    for (let key in current.children) {
      let child = current.children[key];
      let f = current.fail;

      while (f && !f.children[key]) {
        f = f.fail;
      }

      child.fail = f ? f.children[key] : root;
      child.output = child.output.concat(child.fail.output);
      queue.push(child);
    }
  }
  return root;
}

function highlightKeywords(html, keywords) {
  let intervals = [];
  const root = buildTrie(keywords);
  let node = root;
  for (let i = 0; i < html.length; i++) {
    let key = html[i];
    while (node && !node.children[key]) {
      node = node.fail;
    }
    node = node ? node.children[key] : root;
    for (let word of node.output) {
      intervals.push([i - word.length + 1, i + 1]);
    }
  }

  if (intervals.length === 0) return html;
  //merge all overlaped intervals
  intervals.sort((a, b) => a[0] - b[0]);
  let merged = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    let last = merged[merged.length - 1];
    if (last[1] >= intervals[i][0]) {
      last[1] = Math.max(last[1], intervals[i][1]);
    }
    else {
      merged.push(intervals[i]);
    }
  }

  let prev = 0;
  let res = '';

  merged.forEach(([start, end]) => {
    res += html.substring(prev, start);
    res += '<em>' + html.substring(start, end) + '</em>';
    prev = end;
  })
  res += html.substring(prev);
  return res;
}
console.log(highlightKeywords(
  'Hello FrontEnd Lovers',
  ['Hello', 'Front', 'JavaScript']
));
