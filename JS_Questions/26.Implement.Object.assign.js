
// [{}, { a: 1, b: 2 }],
// [{ x: 10 }, { a: 1, b: 2 }],
// [{}, { a: 1 }, { b: 2 }, { c: 3 }],
  // [42, { a: 1 }]
  // [{ a: 1 }, null, undefined]

  //  const sym = Symbol('id');
  // const source = {
  //   name: 'John',
  //   [sym]: 123
  // };
  // const target = {};


  function objectAssign(target, ...sources) {
    if(target === null || target === undefined)throw new Error('Invalid target')
    target = Object(target);
    for (let source of sources) {
      if(source === null || source === undefined)continue;
      for (let key of [...Object.keys(source), ...Object.getOwnPropertySymbols(source)]) {
        target[key] = source[key];
        if(target[key] !== source[key]){
          throw new Error('Cannot copy');
        }
      }
    }
    return target;
  }