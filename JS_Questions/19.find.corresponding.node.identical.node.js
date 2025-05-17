//recursive
const findCorrespondingNode = (rootA, rootB, target) => {
   if(rootA === target)return rootB;
   for(let i=0;i<rootA.children.length;i++){
     const res =  findCorrespondingNode(rootA.children[i],rootB.children[i],target);
     if(res!==undefined){
      return res;
     }
   }
}

//BFS

/**
 * @param {HTMLElement} rootA
 * @param {HTMLElement} rootB - rootA and rootB are clone of each other
 * @param {HTMLElement} nodeA
 */
const findCorrespondingNode2 = (rootA, rootB, target) => {
   const queue=[[rootA,rootB]];
  while(queue.length > 0){
    const [nodeA,nodeB] = queue.pop();
    if(nodeA==target){
      return nodeB;
    }
    for(let i=0;i<nodeA.children.length;i++){
      let childA = nodeA.children[i];
      let childB = nodeB.children[i];
      queue.push([childA,childB]);
    }
  }
return null;
}


//tree walker
const findCorrespondingNode3 = (rootA, rootB, target) => {
  // your code here
  const nodeAWalker = document.createTreeWalker(rootA,NodeFilter.SHOW_ELEMENT);
  const nodeBWalker = document.createTreeWalker(rootB,NodeFilter.SHOW_ELEMENT);
  let currentNode = [nodeAWalker.currentNode,nodeBWalker.currentNode];
  while(currentNode[0]!==target){
    currentNode = [nodeAWalker.nextNode(),nodeBWalker.nextNode()];
  }
  return currentNode[1];
}