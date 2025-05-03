

// This is a JavaScript coding problem from BFE.dev 
/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
// recursive infinite
function recursiveFlat(arr){
  let result = [];
  for(const item of arr){
    if(Array.isArray(item)){
      //  result.push(...recursiveFlat(item));
       result = result.concat(recursiveFlat(item));
    }
    else{
      result.push(item);
    }
  }
  return result;
}
function flat(arr,depth=1){
  let result = [];
  for(let i=0;i<arr.length;i++){
    if(!(i in arr))
      continue;
    const item = arr[i];
    if(Array.isArray(item) && depth > 0){
       result = result.concat(flat(item,depth - 1));
    }
    else{
      result.push(item);
    }
  }
  return result;
}
function iterativeFlat(arr){
  let stack = [...arr];
  let result = [];
  while(stack.length>0){
    const item = stack.pop();
      if(Array.isArray(item)){
        stack.push(...item);
        // stack = stack.concat(item);
      }
    else{
      result.push(item);
    }
  }
return result.reverse();
}
function iterativeFlatWithQueue(arr){
  let queue = [...arr];
  let result = [];
  while(queue.length>0){
    const item = queue.shift();
      if(Array.isArray(item)){
        queue.push(...item);
      }
    else{
      result.push(item);
    }
  }
return result;
}
function flat(arr,depth=1){
    // let stack = arr.map((item)=>[item,depth]); it will copy the hole also 
    let stack = [];
    arr.forEach((item)=>{
      stack.push([item,depth]);
    })
    let result = [];
    while(stack.length>0){
      const [item,depth] = stack.pop();
        if(Array.isArray(item) && depth > 0){
          // stack.push(...item.map(it=>[it,depth-1]));  it will copy the hole also
          item.forEach((it)=>{
            stack.push([it,depth-1]);
          })
        }
      else{
        result.push(item);
      }
    }
  return result.reverse();
  }
  Array.prototype.iterativeFlatWithDepth = function(depth=1){
    let stack = this.map((item)=>[item,depth]);
    let result = [];
    while(stack.length>0){
      const [item,depth] = stack.pop();
        if(Array.isArray(item) && depth > 0){
          stack.push(...item.map(it=>[it,depth-1]));
        }
      else{
        result.push(item);
      }
    }
  return result.reverse();
  }
  
  const arr = [1, [2], [3, [4]]];
  console.log(arr.iterativeFlatWithDepth());
  
  
  
  