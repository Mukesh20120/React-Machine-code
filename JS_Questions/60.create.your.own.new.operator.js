
const myNew = (constructor, ...args) => {
    const obj = {};
    Object.setPrototypeOf(obj,constructor.prototype);
    const result = constructor.apply(obj,args);
    if(result && typeof result === 'object')
     return result;
    return obj;
}