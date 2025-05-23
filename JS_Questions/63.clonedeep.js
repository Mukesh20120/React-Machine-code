
function cloneDeep(data,seen = new WeakMap()) {
  if(data === null || typeof data !== 'object')return data;
  if(seen.has(data))return seen.get(data);
  if(Array.isArray(data)){
    const copy = [];
    seen.set(data,copy);
    data.forEach((val,index)=>{
      copy[index]=cloneDeep(val,seen);
    });
    return copy;
  }
  const copy = {};
  seen.set(data,copy);
  Reflect.ownKeys(data).forEach(key=>{
    copy[key] = cloneDeep(data[key],seen);
  })
  return copy;
}
// Reflect.ownKeys(target)
// target → the object you want to list property keys from
// Returns an array of string and symbol keys