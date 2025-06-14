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


//   Every property you add to an object isn’t just a value — it also has some extra metadata:

// Is it writable (can you change it?)

// Is it enumerable (does it show up in for..in or Object.keys?)

// Is it configurable (can you delete or change its flags?)

// Is it a value property or a getter/setter?

// We call this extra info a property descriptor.