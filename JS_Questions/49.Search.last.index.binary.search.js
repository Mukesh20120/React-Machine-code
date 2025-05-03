
/**
 * @param {number[]} arr - ascending array with duplicates
 * @param {number} target
 * @return {number}
 */
function lastIndex(arr, target){
    let l=0,r=arr.length;
    let result = -1;
    while(l<=r){
     let m = l + Math.floor((r-l)/2);
     if(arr[m]==target){
       result=m;
       l=m+1;
     }
     else if(arr[m]<target){
       l=m+1;
     }
     else{
       r=m-1;
     }
    }
    return arr[result]==target?result:-1;
   }
   
   //[1,2,3,5,5,5,8,9]