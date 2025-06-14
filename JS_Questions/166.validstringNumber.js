/**
 * @param {string} str
 * @returns {boolean}
 */
function validateNumberString(str) {
  if (str.length === 0) return false;

  let i = 0;
  let n = str.length;

  // Optional leading + or -
  if (str[i] === '+' || str[i] === '-') i++;
  if (i === n) return false;  // string was just a sign

  let hasDigit = false;
  let hasDot = false;
  let hasE = false;

  while (i < n) {
    let char = str[i];

    if (char >= '0' && char <= '9') {
      hasDigit = true;
    } else if (char === '.') {
      if (hasDot || hasE) return false;
      hasDot = true;
    } else if (char === 'e' || char === 'E') {
      if (hasE || !hasDigit) return false;
      hasE = true;
      hasDigit = false;  // need digits after 'e'

      i++;
      if (i < n && (str[i] === '+' || str[i] === '-')) i++;  // optional sign after 'e'
      if (i === n) return false; // must be something after 'e'
      continue;
    } else {
      return false;
    }

    i++;
  }

  return hasDigit;
}
