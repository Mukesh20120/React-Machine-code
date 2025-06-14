/**
 * @param {object} source
 * @param {string | string[]} path
 * @param {any} [defaultValue]
 * @return {any}
 */
function get(source, path, defaultValue = undefined) {
  let pathArr = path;
  if (!Array.isArray(path)) {
    pathArr = path.replaceAll('[','.').replaceAll(']','').split('.');
  }
  function helper(src, pathArr, i) {
    if (i === pathArr.length - 1) {
      return src[pathArr[i]];
    }
    if (!src[pathArr[i]]) return undefined;
    return helper(src[pathArr[i]], pathArr, i + 1);
  }
  const result = helper(source, pathArr, 0);
  if (result) return result;
  return defaultValue;
}



/**
 * @param {object} source
 * @param {string | string[]} path
 * @param {any} [defaultValue]
 * @return {any}
 */
function get(source, path, defaultValue = undefined) {
  // Normalize path to array of keys
  let pathArr = Array.isArray(path)
    ? path
    : path.replaceAll('[', '.').replaceAll(']', '').split('.');

  let result = source;
 if (pathArr.length === 0 || (pathArr.length === 1 && pathArr[0] === '')) {
    return defaultValue;
  }
  for (let key of pathArr) {
    if (result == null || !(key in result)) {
      return defaultValue;
    }
    result = result[key];
  }

  return result;
}
