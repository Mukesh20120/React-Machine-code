
/**
 * @param {number[]} arr - ascending array with duplicates
 * @param {number} target
 * @return {number}
 */
function firstIndex(arr, target){
    let l=0,r=arr.length;
    while(l<r){
     let m = l + Math.floor((r-l)/2);
     if(arr[m] < target){
      l=m+1;
     }
     else if(arr[m]>=target){
      r=m;
     }
    }
    return arr[l]==target?l:-1;
   }
   

   
/**
 * @param {number[]} arr - ascending array with duplicates
 * @param {number} target
 * @return {number}
 */
function firstIndex(arr, target){
    let l = 0, r = arr.length - 1, result = -1;
     while (l <= r) { //taking when l==r also
       let m = l + Math.floor((r - l) / 2);
       if (arr[m] == target) {
         result = m;
         r = m - 1; // keep searching to the left
       } else if (arr[m] < target) {
         l = m + 1;
       } else {
         r = m - 1;
       }
     }
     return result;
   }
   