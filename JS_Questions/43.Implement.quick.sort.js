/**
 * @param {number[]} arr
 */
function partition(l,r,arr){
    let pivot = arr[r];
    let i=l;
    for(let j=l;j<r;j++){
       if(arr[j]<pivot){
         [arr[j],arr[i]]=[arr[i],arr[j]];
         i++;
       }
    }
     [arr[i],arr[r]]=[arr[r],arr[i]];
     return i;
 }
 function quickSortLayer(l,r,arr){
   if(l<r){
     let p = partition(l,r,arr);
     quickSortLayer(l,p-1,arr);
     quickSortLayer(p+1,r,arr);
   }
 }
 function quickSort(arr) {
   let l=0,r=arr.length-1;
   quickSortLayer(l,r,arr);
   return arr;
 }