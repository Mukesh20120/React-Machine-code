





/**
 * interface Matcher {
 *  toBe(data: any): void
 * }
 */
/**
 * @param {any} input
 * @returns {Matcher & {not: Matcher}}
 */
function myExpect(input) {
  return {
    toBe: (value) => {
      if (!Object.is(input,value))
        throw new Error('Not matched');
    },
    not: {
      toBe: (value) => {
        if (Object.is(input,value))
        throw new Error('Not matched');
      },
    }
  }
}




// JavaScript Equality Notes
// ==========================

// 1. '===' (Strict Equality)
//    - Compares values without type conversion.
//    - Edge cases:
//      - 0 === -0 → true
//      - NaN === NaN → false

// 2. Object.is()
//    - Similar to '===', but with important differences:
//      - Object.is(0, -0) → false
//      - Object.is(NaN, NaN) → true
//    - Preferred for precise identity checks.

// 3. Use in Test Matchers
//    - toBe: Checks identity equality using Object.is()
//    - toEqual: Checks deep structural equality (for objects, arrays, etc.)

// 4. Lesson from Exercise
//    - Don't rely only on '===' for identity checks.
//    - Use Object.is() for correct handling of tricky cases like:
//      - 0 vs -0
//      - NaN vs NaN
//    - Understand subtle language behaviors when writing utility libraries.

// Summary:
// ========
// Use Object.is() for accurate identity checks in JavaScript, especially when building test matchers or comparing edge case values.

