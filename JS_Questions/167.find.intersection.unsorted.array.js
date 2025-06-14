function getIntersection(arr1, arr2) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  let res = [];
  let i = 0, j = 0;
  let n = arr1.length, m = arr2.length;

  while (i < n && j < m) {
    if (arr1[i] === arr2[j]) {
      if (res.length === 0 || res[res.length - 1] !== arr1[i]) {
        res.push(arr1[i]);
      }
      i++;
      j++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else {
      j++;
    }
  }

  return res;
}
