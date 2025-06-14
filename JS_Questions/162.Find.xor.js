

/**
 * @param {number[]} arr
 * @returns number
 */
function findSingle(arr) {
  let res = 0;
  for(let item of arr){
    res^=item;
  }
  return res;
}

