function completeAssign(target, ...sources) {
    if(target === null || target === undefined)
      throw new Error('Target not is null or undefined');
    if(typeof target !== 'object')
      target = Object(target);
    for(let source of sources){
      if(source === null || source === undefined)
        continue;
      const keys = [
        ...Object.getOwnPropertyNames(source),
        ...Object.getOwnPropertySymbols(source)
      ];
      for(let key of keys){
        const desc = Object.getOwnPropertyDescriptor(source,key);
        Object.defineProperty(target, key, desc);
      }
    }
  return target;
  }