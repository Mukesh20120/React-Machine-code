// num1 > num2 assumed
function subtractDigit(num1, num2) {
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
  
    res = res.replace(/^0+/, '');
    return res === '' ? '0' : res;
  }
  
  function addPositiveValue(num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;
    let res = '';
  
    while (i >= 0 || j >= 0 || carry) {
      let sum = carry;
      if (i >= 0) sum += (num1[i--] - '0');
      if (j >= 0) sum += (num2[j--] - '0');
  
      carry = Math.floor(sum / 10);
      res = (sum % 10) + res;
    }
  
    return res;
  }
  
  function parameter1GreaterThan2(num1, num2) {
    if (num1.length > num2.length) return true;
    if (num2.length > num1.length) return false;
  
    for (let i = 0; i < num1.length; i++) {
      if (num1[i] == num2[i]) continue;
      return num1[i] > num2[i];
    }
    return true; // equal numbers, can default to true
  }
  
  function subtract(num1, num2) {
    if (num1 == '') return num2;
    if (num2 == '') return num1;
  
    let digit1 = num1;
    let digit2 = num2;
  
    let sign1 = '', sign2 = '';
    if (isNaN(num1[0])) {
      sign1 = num1[0];
      digit1 = num1.slice(1);
    }
    else{
      sign1='+';
      digit1 = num1;
    }
    if (isNaN(num2[0])) {
      sign2 = num2[0]=='-'?'+':'-';
      digit2 = num2.slice(1);
    }
    else{
      sign2='-';
      digit2=num2;
    }
  
    // If both signs are same
    if (sign1 === sign2) {
      let sum = addPositiveValue(digit1, digit2);
      return (sign1 === '-' ? '-' : '') + sum;
    }
  
    // If signs are different, subtract smaller from bigger
    if (digit1 === digit2) return '0';
  
    if (parameter1GreaterThan2(digit1, digit2)) {
      let res = subtractDigit(digit1, digit2);
      return (sign1 === '-' ? '-' : '') + res;
    } else {
      let res = subtractDigit(digit2, digit1);
      return (sign2 === '-' ? '-' : '') + res;
    }
  }
  