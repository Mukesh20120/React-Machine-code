/**
 * @param {any} a
 * @param {any} b
 * @return {boolean}
 */
function isEqual(a, b,seen = new WeakMap()) {
   if(typeof a !== typeof b)return false;
   if(typeof a !== 'object')return a===b;
   
   if(seen.has(a) && seen.get(a)===b)return true;

   seen.set(a,b);
   if(Array.isArray(a)){
      if(a.length !== b.length)return false;
      for(let i=0;i<a.length;i++){
        if(!isEqual(a[i],b[i],seen))
           return false;
      }
      return true;
   }
   const aKeys = Reflect.ownKeys(a);
   const bKeys = Reflect.ownKeys(b);
   if(aKeys.length !== bKeys.length)return false;
   for(let i=0;i<aKeys.length;i++){
      if(aKeys[i] !== bKeys[i])return false;
      if(!isEqual(a[aKeys[i]],b[bKeys[i]],seen))
         return false;
   }
  return true;
}