/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function subtract(num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;
    let res = '';
  
    while (i >= 0) {
      let digit1 = num1[i] - '0' - carry;
      let digit2 = j >= 0 ? num2[j] - '0' : 0;
  
      if (digit1 < digit2) {
        digit1 += 10;
        carry = 1;
      } else {
        carry = 0;
      }
  
      let sub = digit1 - digit2;
      res = sub + res;
  
      i--;
      j--;
    }
  
    // Remove leading zeros
    res = res.replace(/^0+/, '');
  
    // Edge case: if result is empty, it's zero
    return res === '' ? '0' : res;
  }
  
  console.log(subtract('1000000000000000000000', '999999999999999999999'));
  