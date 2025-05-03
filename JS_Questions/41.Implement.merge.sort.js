/**
 * @param {number[]} arr
 */
function merge(l,m,r,arr){
    let i=l,j=m+1;
    let res=[];
    while(i<=m && j<=r){
      if(arr[i]<arr[j])
         res.push(arr[i++]);
      else
         res.push(arr[j++]);
    }
    while(i<=m)res.push(arr[i++]);
    while(j<=r)res.push(arr[j++]);
    for(let k=0;k<res.length;k++){
       arr[k+l]=res[k];
    }
  }
  function mergeLayer(start,end,arr){
    if(start<end){
      let mid = start + Math.floor((end-start)/2);
      mergeLayer(start,mid,arr);
      mergeLayer(mid+1,end,arr);
      merge(start,mid,end,arr);
    }
  }
  function mergeSort(arr) {
    let start = 0,end = arr.length;
     mergeLayer(start,end-1,arr);
    return arr;
  }