
// This is a JavaScript coding problem from BFE.dev 

/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {
    const placeholder = curry.placeholder;
    return function curryInner(...args) {
   const newArgs = args.filter((item) => item != placeholder);
  if (newArgs.length >= fn.length && args.slice(0, fn.length).every(a => a !== placeholder)) {
    return fn(...args.slice(0, fn.length));
  }
  
      return (...args2) => {
        let finalArg = [];
        let i = 0, j = 0;
        while (i < args.length ) {
          if (args[i] === placeholder && j<args2.length) {
            finalArg.push(args2[j]);
            j++;
          }
          else {
            finalArg.push(args[i]);
          }
          i++;
        }
        while(j<args2.length){
          finalArg.push(args2[j]);
          j++;
        }
      return curryInner(...finalArg);
      }
    }
  }
  
  
  curry.placeholder = Symbol()
  
  // const  join = (a, b, c) => {
  //    return `${a}_${b}_${c}`
  // }
  // const curriedJoin = curry(join)
  // const _ = curry.placeholder
  // console.log(curriedJoin(1, 2, 3)) // '1_2_3'
  // console.log(curriedJoin(_, 2)(1, 3)) // '1_2_3'
  // console.log(curriedJoin(_, _, _)(1)(_, 3)(2)) // '1_2_3'
  
  function curry(fn) {
    const placeholder = curry.placeholder;
    return function curryInner(...args) {
      const fnLength = fn.length;
      const isActualLength = args.length >= fnLength &&
        args.slice(0, fnLength).every(item => item !== placeholder);
  
      if (isActualLength) return fn.apply(this, args);
  
      return (...args2) => {
        let finalArg = [];
        let i = 0, j = 0;
  
        while (i < args.length && j < args2.length) {
          if (args[i] === placeholder) {
            finalArg.push(args2[j]);
            j++;
          } else {
            finalArg.push(args[i]);
          }
          i++;
        }
  
        // ✅ Important missing part — push remaining from args
        while (i < args.length) {
          finalArg.push(args[i]);
          i++;
        }
  
        // push remaining from args2
        while (j < args2.length) {
          finalArg.push(args2[j]);
          j++;
        }
  
        return curryInner(...finalArg);
      };
    }
  }
  
  curry.placeholder = Symbol();
    