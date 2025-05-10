// a | b  || c | d
// (a*10(n/2)+b)(c*10(n/2)+d)
// (a*10(n/2)*c*10(n/2) + a*10(n/2)*d + b*c*10(n/2) + bd)
// (ac*10(n) + (ad+bd)*10(n/2) + bd)

//(a+b)(c+d)
//ac+ad+bc+bd=abcd
//abcd-ac-bd=ad+bc

function add(num1, num2) {
    let i = num1.length - 1, j = num2.length - 1, carry = 0, res = [];
    while (i >= 0 || j >= 0 || carry) {
      let sum = carry;
      if (i >= 0) sum += num1[i--] - '0';
      if (j >= 0) sum += num2[j--] - '0';
      carry = Math.floor(sum / 10);
      res.push(sum % 10);
    }
    return res.reverse().join('');
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
    let negative = false;
  
    if (num1[0] === '-') {
      negative = !negative;
      num1 = num1.slice(1);
    }
    if (num2[0] === '-') {
      negative = !negative;
      num2 = num2.slice(1);
    }
  
    if (num1 === '0' || num2 === '0') return '0';
    if (num1.length === 1 && num2.length === 1) {
      return (parseInt(num1) * parseInt(num2)).toString();
    }
  
    let n = Math.max(num1.length, num2.length);
    let m = Math.floor(n / 2);
  
    num1 = num1.padStart(n, '0');
    num2 = num2.padStart(n, '0');
  
    let a = num1.slice(0, n - m);
    let b = num1.slice(n - m);
    let c = num2.slice(0, n - m);
    let d = num2.slice(n - m);
  
    let ac = multiply(a, c);
    let bd = multiply(b, d);
    let aPlusb = add(a, b);
    let cPlusd = add(c, d);
    let abcd = multiply(aPlusb, cPlusd);
    let adPlusbc = subtract(subtract(abcd, ac), bd);
  
    let acShift = ac + '0'.repeat(2 * m);
    let adPlusbcShift = adPlusbc + '0'.repeat(m);
  
    let res = add(add(acShift, adPlusbcShift), bd);
    res = res.replace(/^0+/, '') || '0';
  
    return negative && res !== '0' ? '-' + res : res;
  }
  
  const testCases = [
    { a: "0", b: "0", expected: "0" },
    { a: "1", b: "1", expected: "1" },
    { a: "123", b: "0", expected: "0" },
    { a: "0", b: "456", expected: "0" },
    { a: "9", b: "9", expected: "81" },
    { a: "12", b: "34", expected: "408" },
    { a: "123", b: "456", expected: "56088" },
    { a: "111", b: "111", expected: "12321" },
    { a: "999", b: "999", expected: "998001" },
    { a: "1000", b: "1000", expected: "1000000" },
    { a: "1234", b: "5678", expected: "7006652" },
    { a: "9999", b: "9999", expected: "99980001" },
    { a: "100000", b: "100000", expected: "10000000000" },
    { a: "314159265358979323846264338327950288419716939937510", 
      b: "271828182845904523536028747135266249775724709369995", 
      expected: "853973422267356706546355086954657449503488853576511496187960112635269" +
                "072164730205622164701723270202500" },
    { a: "123456789", b: "987654321", expected: "121932631112635269" },
    { a: "1000000000", b: "1000000000", expected: "1000000000000000000" },
    { a: "5000000000", b: "4000000000", expected: "20000000000000000000" },
    { a: "4444", b: "3333", expected: "14810892" },
    { a: "1024", b: "2048", expected: "2097152" },
    { a: "999999999", b: "999999999", expected: "999999998000000001" },
    { a: "98765432109876543210", b: "12345678901234567890", expected: "1219326311370217952237463801111263526900" }
  ]
  
  testCases.forEach(({ a, b, expected }, i) => {
    const result = multiply(a, b);
    const pass = result === expected ? "✅" : `❌ (got ${result})`;
    console.log(`Test ${i + 1}: ${a} * ${b} = ${expected} -> ${pass}`);
  });