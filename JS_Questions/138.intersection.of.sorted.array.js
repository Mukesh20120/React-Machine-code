/**
 * @param {number[]} arr1 - integers
 * @param {number[]} arr2 - integers
 * @returns {number[]}
 */
function intersect(arr1, arr2) {
 let i=0,j=0;
 let n=arr1.length,m=arr2.length;
 let res = [];
 while(i<n && j<m){
  if(arr1[i]===arr2[j]){
    res.push(arr1[i]);
    i++;
    j++;
  }else if(arr1[i]>arr2[j]){
    j++;
  }
  else{
    i++;
  }
 }
 return res;
}