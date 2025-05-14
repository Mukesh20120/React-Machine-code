const myExtends = (SuperType, SubType) => {
   const ExtendClass = function(...args){
      SuperType.call(this,...args); 
      SubType.call(this,...args);
      this.__proto__ = SubType.prototype;
   }
   SubType.prototype.__proto__ = SuperType.prototype;
   ExtendClass.__proto__ = SuperType
   return ExtendClass;
}

// https://www.youtube.com/watch?v=_JJgSbuj5VI
// https://stackoverflow.com/questions/9959727/what-is-the-difference-between-prototype-and-proto