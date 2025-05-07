
/**
 * @param {any} target
 * @param {any[]} sources
 * @return {object}
 */
function objectAssign(target, ...sources) {
    if(target===null || target === undefined)
      throw new Error('cannot assign into the null or undefined');
    if (typeof target != 'object')
      target = Object(target);
    for (let source of sources) {
      if(source === null || source === undefined)continue;
      const keys = [
        ...Object.keys(source),
        ...Object.getOwnPropertySymbols(source).filter(skey => Object.getOwnPropertyDescriptor(source, skey).enumerable)
      ];
  
      for (let key of keys) {
        if (!Reflect.set(target, key, source[key])) {
          throw new Error('cannot assign');
        }
      }
    }
    return target
  }