
/**
 * @param {number[][]} arrList
 * non-descending integer array
 * @return {number[]} 
 */
function mergeList(l1,l2){
    let res=[];
    let i=0,j=0;
    let n=l1.length,m=l2.length;
    while(i<n && j<m){
      if(l1[i]<l2[j])res.push(l1[i++]);
      else res.push(l2[j++]);
    }
    while(i<n)res.push(l1[i++]);
    while(j<m)res.push(l2[j++]);
  return res;
  }
  function mergeAll(arrList,s,e){
    if(s==e)return arrList[s];
    let m= s+Math.floor((e-s)/2);
    let list1 = mergeAll(arrList,s,m);
    let list2 = mergeAll(arrList,m+1,e);
    return mergeList(list1,list2);
  }
  function merge(arrList) {
    let ln = arrList.length;
    if(ln==0)return [];
   return mergeAll(arrList,0,ln-1);
  }