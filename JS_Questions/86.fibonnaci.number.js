/**
 * @param {number} n - non-negative integer
 * @return {number}
 */

// function fib(n) {
//   if (n <= 1) return n;
//   let first = 0;
//   let second = 1;
//   for (let i = 2; i <= n; i++) {
//     let next = first + second;
//     first = second;
//     second = next;
//   }
//   return second;
// }

function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

function testFib() {
  const testCases = [
    { input: 0, expected: 0 },
    { input: 1, expected: 1 },
    { input: 2, expected: 1 },
    { input: 3, expected: 2 },
    { input: 4, expected: 3 },
    { input: 5, expected: 5 },
    { input: 6, expected: 8 },
    { input: 7, expected: 13 },
    { input: 10, expected: 55 },
  ];

  testCases.forEach(({ input, expected }) => {
    const actual = fib(input);
    const result = actual === expected ? '✅ Passed' : '❌ Failed';
    console.log(
      `fib(${input}) → Expected: ${expected}, Actual: ${actual} → ${result}`
    );
  });
}

testFib();

