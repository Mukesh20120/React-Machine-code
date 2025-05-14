
/**
 * @param {number[]} arr
 * @return {number[]}
 */
function findTwo(arr) {
  const hash = new Map();
  for(let i=0;i<arr.length;i++){
    if(hash.has(-arr[i])){
      return [hash.get(-arr[i]),i];
    }
    hash.set(arr[i],i);
  }
  return null;
}