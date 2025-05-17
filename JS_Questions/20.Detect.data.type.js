
/**
 * @param {any} data
 * @return {string}
 */
/**
 * @param {any} data
 * @return {string}
 */
function detectType(data) {
  const dataType = Object.prototype.toString.call(data)
  // return Object.prototype.toString.call(data).split(' ')[1].slice(0,-1).toLowerCase();
  const AllDataType = {
    "[object Object]": "object",
    "[object Null]": "null",
    "[object Number]": "number",
    "[object Boolean]": "boolean",
    "[object String]": "string",
    "[object Function]": "function",
    "[object Map]": "map",
    "[object Set]": "set",
    "[object ArrayBuffer]": "arraybuffer",
    "[object Array]": "array",
    "[object BigInt]": "bigint",
    "[object Symbol]": "symbol",
    "[object Date]": "date",
    "[object Undefined]": "undefined",
  };
  return AllDataType[dataType] || "";
}

function detectType(data) {
  if (data === null) {
    return 'null';
  }
  if (data === undefined) {
    return 'undefined'
  }
  return data.constructor.name.toLowerCase();
}

// function detectType(data) {
//   if(data===null)return "null";
//   if(data===undefined)return "undefined";
//  return data.constructor.name.toLowerCase();
// }

console.log({}.toString()); // "[object Object]"
console.log([].toString()); // ""

// because array's own `toString` is overridden to output its elements
Object.prototype.toString.call([1, 2, 3])

console.log(Object.prototype.toString.call(1));            // "[object Number]"
console.log(Object.prototype.toString.call(new Number(1))); // "[object Number]"
console.log(Object.prototype.toString.call("abc"));         // "[object String]"
console.log(Object.prototype.toString.call([]));            // "[object Array]"
console.log(Object.prototype.toString.call(null));          // "[object Null]"
console.log(Object.prototype.toString.call(undefined));     // "[object Undefined]"
console.log(Object.prototype.toString.call(() => {}));      // "[object Function]"
console.log(Object.prototype.toString.call(new Date()));    // "[object Date]"





// Excellent question — let's unpack this in a clean, clear way.

// When you see this:

// ```javascript
// Object.prototype.toString.call(data)
// ```

// there's a lot of cool stuff happening under the hood. Let's break it down step by step.

// ---

// ## 📦 What is `Object.prototype`?

// * In JavaScript, **every object inherits from `Object.prototype` unless you explicitly set its prototype chain otherwise.**
// * `Object.prototype` is essentially the base object from which all other objects derive.
// * It contains standard methods like:

//   * `toString()`
//   * `hasOwnProperty()`
//   * `valueOf()`
//   * etc.

// ---

// ## 📖 What does `toString()` normally do?

// * By default, if you call `.toString()` on an object, it returns something like `"[object Object]"`.
// * Different object types have their own `[[Class]]` internal property (not directly accessible in code — but `Object.prototype.toString.call()` can extract it).

// Example:

// ```javascript
// console.log({}.toString()); // "[object Object]"
// console.log([].toString()); // ""

// // because array's own `toString` is overridden to output its elements
// ```

// But if you call it from **Object.prototype** directly via:

// ```javascript
// Object.prototype.toString.call([1, 2, 3])
// ```

// → It will skip any custom `.toString()` the object might have and give you its internal **`[[Class]]`** tag.

// **Result:**

// ```javascript
// "[object Array]"
// ```

// ---

// ## ⚙️ How does `Object.prototype.toString.call(data)` work?

// 1. **`Object.prototype.toString`** is a method on `Object.prototype`.
// 2. **`.call(data)`** invokes that method with `data` as its `this` value.
// 3. Internally, it looks up the `[[Class]]` property of the object (not something you can access normally).
// 4. It returns a string like:

//    * `"[object Number]"`
//    * `"[object String]"`
//    * `"[object Date]"`
//    * etc.

// This is a reliable, consistent way to detect types, even when `typeof` falls short or behaves weirdly (like with `null`, `array`, or `function`).

// ---

// ## 🔍 Example:

// ```javascript
// console.log(Object.prototype.toString.call(1));            // "[object Number]"
// console.log(Object.prototype.toString.call(new Number(1))); // "[object Number]"
// console.log(Object.prototype.toString.call("abc"));         // "[object String]"
// console.log(Object.prototype.toString.call([]));            // "[object Array]"
// console.log(Object.prototype.toString.call(null));          // "[object Null]"
// console.log(Object.prototype.toString.call(undefined));     // "[object Undefined]"
// console.log(Object.prototype.toString.call(() => {}));      // "[object Function]"
// console.log(Object.prototype.toString.call(new Date()));    // "[object Date]"
// ```

// ---

// ## ✅ TL;DR

// * `Object.prototype.toString.call(data)` is a foolproof way to get the precise type tag of a value in JavaScript.
// * It uses the **`[[Class]]`** internal property.
// * It's more reliable than `typeof` or `instanceof` for distinguishing between types like `Array`, `Date`, `Set`, `null`, etc.

// ---

// Would you like a little diagram of how prototype inheritance and `Object.prototype.toString` fits into the chain? I can draw one up for you 👌
