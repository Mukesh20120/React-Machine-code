/**
 * @param {number[]} arr
 */
function bubbleSort(arr) {
    let ln = arr.length;
    for(let i=0;i<ln-1;i++){
      for(let j=0;j<ln-i-1;j++){
        if(arr[j]>arr[j+1]){
         [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
        }
      }
    }
  return arr;
  }