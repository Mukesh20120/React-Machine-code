//bind method
Function.prototype.myBind = function (thisArg, ...args) {
  return (...newArgs) => {
    thisArg = thisArg ?? window;
    thisArg = Object(thisArg);
    const fun = Symbol();
    thisArg[fun] = this;
    const result = thisArg[fun](...newArgs,...args);
    delete thisArg[fun];
    return result
  }
}
//call  & apply both will be same
// Function.prototype.mycall = function(thisArg, ...args) {
//    thisArg = thisArg ?? window;
//    thisArg = Object(thisArg);
//    const fun = Symbol();
//    thisArg[fun] = this;
//    const result = thisArg[fun](...args);
//    delete thisArg[fun];
//    return result;
// }
