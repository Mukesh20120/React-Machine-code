function curry(fn) {
    return function curryInner(...args) {
      if (args.length >= fn.length) return fn(...args);
      return (...args2) => curryInner(...args, ...args2);
    };
  }
  
  function curry(func) {
    return function curried(...args) {
      // 1. if enough args, call func 
      // 2. if not enough, bind the args and wait for new one
      
      if (args.length >= func.length) {
        return func.apply(this, args)
      } else {
        // 1,2
        return curried.bind(this, ...args)
      }
    }
  }

  function curry(fn) {
    return function curried(...args) {
      if (args.length >= fn.length) {
        return fn.apply(this, args);
      } else {
        return function(...nextArgs) {
          return curried.apply(this, args.concat(nextArgs));
        }
      }
    }
  }
  
  function sum(a, b, c) {
    return a + b + c;
  }
  
  const curriedSum = curry(sum);
  
  console.log(curriedSum(1)(2)(3)); // 6
  

// ## 📖 Imagine You Have:
// A **magic box** called `curry(fn)`.

// You give this box a recipe (a function) — like a cake recipe that needs **3 things: flour, sugar, and eggs**.

// Example:
// ```javascript
// function add(a, b, c) {
//   return a + b + c;
// }
// ```
// This recipe (function) needs 3 numbers.

// ---

// ## 📦 What The Magic Box Does:
// When you give it **some of the things**, it says:

// - **"Do I have everything to make the cake?"**
// - If **yes**: it makes the cake and gives it to you.
// - If **no**: it keeps what you gave it, and waits for you to give more things later.

// ---

// ## 🐣 Step by Step Example (Kid Version)

// Let’s pretend:
// ```javascript
// function add(a, b, c) {
//   return a + b + c;
// }

// const curriedAdd = curry(add);
// ```

// ---

// Now, imagine calling:
// ```javascript
// curriedAdd(1)
// ```
// - The box looks:  
//   🧐 "I have **1 thing**… but I need **3**."
// - So it says:  
//   ✋ "Okay, I’ll remember this 1, and wait for more."

// ---

// Then later:
// ```javascript
// curriedAdd(1)(2)
// ```
// - Now it has:  
//   **1 and 2** → still not enough.
// - It says:  
//   ✋ "Okay, I’ll remember 1 and 2, and wait for one more."

// ---

// Then:
// ```javascript
// curriedAdd(1)(2)(3)
// ```
// - Now it has:  
//   **1, 2, 3** → just what the recipe needs!
// - It makes the cake (adds them up) and gives you **6** 🎉

// ---

// ## 🔄 How It Remembers:
// Every time you give it a number:
// - It makes a new tiny box with the numbers you’ve given so far inside.
// - That tiny box can collect more numbers later.

// ---

// ## 📊 In Code:
// This is happening:
// ```javascript
// if (I have enough numbers)
//   run the recipe and give result
// else
//   return a new box that remembers these numbers and can take more
// ```

// ---

// ## 🎨 Simple Analogy:
// It’s like a bucket brigade passing water:

// 1. 🪣 1 bucket → not enough  
// 2. 🪣🪣 2 buckets → not enough  
// 3. 🪣🪣🪣 3 buckets → enough! Put out the fire (call the function)

