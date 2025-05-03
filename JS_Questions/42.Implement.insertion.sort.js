/**
 * @param {number[]} arr
 */
function insertionSort(arr) {
    let ln = arr.length;
    let i=0;
    while(i<ln-1){
      let j=i+1;
      let k=i;
      while(j<ln && arr[k]>arr[j]){
        [arr[k],arr[j]]=[arr[j],arr[k]];
        k--;
        j--;
      }
      i++;
    }
  return arr;
  }