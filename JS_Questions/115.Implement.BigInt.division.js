function compare(num1 = "0", num2 = "0") {
  if (num1.length !== num2.length) return num1.length > num2.length;
  return num1 >= num2;
}

function subtract(num1, num2) {
  let i = num1.length - 1, j = num2.length - 1, carry = 0, res = [];
  while (i >= 0) {
    let digit1 = num1[i] - '0' - carry;
    let digit2 = j >= 0 ? num2[j] - '0' : 0;
    if (digit1 < digit2) {
      digit1 += 10;
      carry = 1;
    } else {
      carry = 0;
    }
    res.push(digit1 - digit2);
    i--; j--;
  }
  while (res.length > 1 && res[res.length - 1] === 0) res.pop();
  return res.reverse().join('');
}

function multiply(num1, num2) {
  let res = [];
  let i = num1.length - 1;
  let carry = 0;
  let digit2 = num2 - '0';
  while (i >= 0 || carry) {
    let digit = i >= 0 ? num1[i--] - '0' : 0;
    let prod = (digit * digit2) + carry;
    carry = Math.floor(prod / 10);
    res.push(prod % 10);
  }
  return res.reverse().join('');
}

function divide(dividend, divisor) {
  let negative = false;
  if(divisor=='0')throw new Error('Infinite')
  if (dividend[0] === '-') {
    negative = !negative;
    dividend = dividend.slice(1);
  }
  if (divisor[0] === '-') {
    negative = !negative;
    divisor = divisor.slice(1);
  }

  if (!compare(dividend, divisor)) return "0";

  let remainder = '';
  let res = [];

  for (let digit of dividend) {
    remainder += digit;
    remainder = remainder.replace(/^0+/, '') || '0';

    if (!compare(remainder, divisor)) {
      res.push(0);
      continue;
    }

    // Binary search quotient digit between 1-9
    let low = 0, high = 9, count = 0;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      let product = multiply(divisor, mid.toString());
      if (compare(remainder, product)) {
        count = mid;
        low = mid + 1;
      } else if (remainder === product) {
        count = mid;
        break;
      } else {
        high = mid - 1;
      }
    }

    let product = multiply(divisor, count.toString());
    remainder = subtract(remainder, product);
    remainder = remainder.replace(/^0+/, '') || '0';

    res.push(count);
  }

  // Remove leading zeros
  while (res.length > 1 && res[0] === 0) res.shift();

  let resultStr = res.join('');
  if (negative && resultStr !== "0") resultStr = '-' + resultStr;
  return resultStr;
}


const divideTestCases = [
  { a: "0", b: "1", expected: "0" },
  { a: "10", b: "2", expected: "5" },
  { a: "9", b: "3", expected: "3" },
  { a: "100", b: "10", expected: "10" },
  { a: "123456789", b: "1", expected: "123456789" },
  { a: "123456789", b: "123456789", expected: "1" },
  { a: "123456789", b: "987654321", expected: "0" },
  { a: "500", b: "2", expected: "250" },
  { a: "999999999", b: "3", expected: "333333333" },
  { a: "1000000000", b: "1000000000", expected: "1" },
  { a: "98765432109876543210", b: "1234567890", expected: "80000000737" },
  { a: "1123456787654323456789", b: "1234567887654323456", expected: "910" },
  { a: "-1123456787654323456789", b: "1234567887654323456", expected: "-910" },
  { a: "1123456787654323456789", b: "-1234567887654323456", expected: "-910" },
  { a: "-1123456787654323456789", b: "-1234567887654323456", expected: "910" },
  { a: "1000000000000000000000", b: "1000000", expected: "1000000000000000" },
  { a: "5000000000", b: "4000000000", expected: "1" },
  { a: "4000000000", b: "5000000000", expected: "0" },
  { a: "4444", b: "3333", expected: "1" },
  { a: "2097152", b: "1024", expected: "2048" },
  { a: "999999999", b: "999999999", expected: "1" },
  { a: "1219326311370217952237463801111263526900", b: "12345678901234567890", expected: "98765432109876543210" }
];

divideTestCases.forEach(({ a, b, expected }, i) => {
  const result = divide(a, b);
  const pass = result === expected ? "✅" : `❌ (got ${result})`;
  console.log(`Test ${i + 1}: ${a} ÷ ${b} = ${expected} -> ${pass}`);
});
