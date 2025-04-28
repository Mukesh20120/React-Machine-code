


// This is a JavaScript coding problem from BFE.dev 

/**
 * @typedef {(version: number) => boolean} IsBad
 */

/**
 * @param {IsBad} isBad
 * @return {(v: number) => number}
 */
function firstBadVersion(isBad) {
	// firstBadVersion receive a check function isBad
  // and should return a closure which accepts a version number(integer)
  return (version) => {
       let left = 0;
       let right = version;
       while(left < right){
        let mid = left + Math.floor((right - left)/2);
        if(isBad(mid)){
          right = mid;
        }
        else{
          left=mid+1;
        }
       }
    return isBad(left)?left:-1;
  }
}




