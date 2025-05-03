
/**
 * @param {number[]} arr - ascending unique array
 * @param {number} target
 * @return {number}
 */
function binarySearch(arr, target) {
    let l = 0, r = arr.length;
    while (l < r) {
      let mid = l + Math.floor((r - l) / 2);
      if (arr[mid] == target) return mid;
      else if (arr[mid] > target) r = mid - 1;
      else
        l = mid + 1;
    }
    return -1;
  }
  