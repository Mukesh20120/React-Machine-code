
//BFS
function getHeight(tree) {
  let ans = 0;
  if(!tree)return 0;
  let queue = [[tree, 1]];
  while (queue.length > 0) {
    let [node, height] = queue.shift();
    ans = Math.max(height, ans);
    for (let child of node.children) {
      queue.push([child, height + 1]);
    }
  }
  return ans;
}

//DFS
function getHeight(tree) {
  if(!tree)return 0;
  let height = 0;
  for(let child of tree.children){
    height = Math.max(height,getHeight(child));
  }
  return height+1;
}