
/**
 * @param {HTMLElement} tree
 * @return {string[]}
 */
//BFS
function getTags(tree) {
  // your code here
  if(!tree)return [];
  const res = new Set();
  let queue = [tree];
  while(queue.length > 0){
    let node = queue.pop();
     res.add(node.tagName.toLowerCase());
     for(const child of node.children){
        queue.push(child);
     }
  }
return [...res];
}

//DFS
function getTags(tree,res=new Set()) {
  if(!tree)return [];
  res.add(tree.tagName.toLowerCase());
  for(const child of tree.children){
    getTags(child,res);
  }
  return [...res];
}