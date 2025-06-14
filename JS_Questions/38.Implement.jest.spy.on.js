
/**
 * @param {object} obj
 * @param {string} methodName
 */
function spyOn(obj, methodName) {
  let calls = [];
  const fun = obj[methodName];
  if (typeof fun !== 'function')
    throw new Error('Not a function');
  obj[methodName] = function (...args) {
    calls.push(args);
    fun.apply(this.args);
  }
  return {
    calls
  }
}



/**
 * @param {object} obj
 * @param {string} methodName
 */
function spyOn(obj, methodName) {
  let calls = [];
  const proxyObj = new Proxy(obj[methodName], {
    apply: (target, thisArg, args) => {
      calls.push(args);
      return target.apply(thisArg, args);
    }
  });
  obj[methodName] = proxyObj;
  return { calls };
}