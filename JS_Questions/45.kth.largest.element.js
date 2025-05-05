
/**
 * @param {number[]} arr
 * @param {number} k
 */
function partition(arr,s,e){
    let pivot = arr[e];
    let i=s;
    for(let j=s;j<e;j++){
      if(arr[j]<pivot){
        [arr[i],arr[j]]=[arr[j],arr[i]];
        i++;
      }
    }
    [arr[e],arr[i]]=[arr[i],arr[e]];
  return i;
  }
  function quickSort(arr,s,e,t){
    let p = partition(arr,s,e);
    if(p==t)return arr[p];
    else if(p>t){
      return quickSort(arr,s,p-1,t);
    }
    else
     return quickSort(arr,p+1,e,t);
  }
  function findKThLargest(arr, k) {
    let ln = arr.length-1;
    let t=arr.length-k;
    return quickSort(arr,0,ln,t);
  }