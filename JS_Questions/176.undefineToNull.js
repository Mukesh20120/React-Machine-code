

/**
 * @param {any} arg
 * @returns {any}
 */
function undefinedToNull(arg) {
  if (arg === undefined) return null;
  if (Array.isArray(arg)) {
    return arg.map(item => undefinedToNull(item));
  }
  if (arg!==null && typeof arg === 'object') {
    const keys = Object.keys(arg);
    const newObj = {};
    for (const key of keys) {
      newObj[key] = undefinedToNull(arg[key]);
    }
    return newObj;
  }
  return arg
}


const replacer = (key,val) => typeof val === 'undefined' ? null : val;
const undefinedToNull = (arg) => JSON.parse(JSON.stringify(arg,replacer));


// JavaScript: null vs undefined — Quick Revision Notes

// 1️⃣ undefined:
// - Type: 'undefined'
// - Meaning: A variable has been declared but has not been assigned a value.
// - Set by: JavaScript (automatically)
// - Commonly seen:
//   - Uninitialized variables
//   - Missing function arguments
//   - Non-existent object properties
// - typeof undefined → 'undefined'
// - Falsy value

// 2️⃣ null:
// - Type: 'object' (JavaScript quirk)
// - Meaning: An intentional absence of any value.
// - Set by: Developer (manually)
// - Commonly used:
//   - Resetting or clearing variables
//   - Placeholder for unknown value
// - typeof null → 'object'
// - Falsy value

// 3️⃣ Comparisons:
// - undefined == null → true (loose equality)
// - undefined === null → false (strict equality)

// 4️⃣ When to Use:
// - undefined: Automatically assigned by JS for uninitialized or missing values.
// - null: Intentionally assigned by developer to indicate 'no value'.

// 5️⃣ Falsiness:
// - Both null and undefined are falsy in condition checks.

// 6️⃣ Quirk:
// - typeof null → 'object' (legacy JavaScript bug)

// 📌 Summary:
// - undefined = "value missing or not assigned"
// - null = "intentionally no value"

