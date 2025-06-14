
/**
 * @param {number[]} arr1 - sorted integer array
 * @param {number[]} arr2 - sorted integer array
 * @returns {number}
 */
function findElementAt(arr1, arr2, mid) {
  let i = 0, j = 0, k = 0;
  let n = arr1.length, m = arr2.length;
  while (i < n && j < m) {
    if (arr1[i] <= arr2[j]) {
      if (k === mid) return arr1[i];
      i++;
    }
    else {
      if (k === mid) return arr2[j];
      j++;
    }
    k++;
  }
  while (j < m) {
    if (k === mid) return arr2[j];
    j++;
    k++;
  }
  while (i<n) {
    if (k === mid) return arr1[i];
    i++;
    k++;
  }
 return -1;
}
function median(arr1, arr2) {
  let n = arr1.length, m = arr2.length;
  let mid = Math.floor((n + m) / 2);
  let midElement = findElementAt(arr1, arr2, mid)
  if ((n + m) % 2 == 0) {
    return (findElementAt(arr1, arr2, mid - 1) + midElement) / 2
  }
  return midElement;
}