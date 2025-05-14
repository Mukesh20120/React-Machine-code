
/**
 * @param {any[]} arr
 */
function deduplicate(arr) {
  arr.sort();
  let j=0;
  for(let i=1;i<arr.length;i++){
    if(arr[i]!==arr[j]){
      j++;
      arr[j]=arr[i];
    }
  }
  console.log(arr);
return arr.slice(0,j+1);
}
