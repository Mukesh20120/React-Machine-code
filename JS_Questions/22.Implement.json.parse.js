/**
 * @param {string} str
 * @return {object | Array | string | number | boolean | null}
 */
function splitPair(pair) {
  const idx = pair.indexOf(":")
  if (idx === -1) throw new Error('invalid pair');
  return [pair.slice(0, idx), pair.slice(idx + 1)];
}
function splitTopLevel(data) {
  let cur = '';
  let inString = false;
  let res = [];
  let depth = 0;
  for (let ch of data) {
    if (ch === '"') {
      inString = !inString;
    }
    if (!inString) {
      if (ch === '[' || ch === '{') depth++;
      if (ch === ']' || ch === '}') depth--;
    }

    if (ch === ',' && depth === 0 && !inString) {
      res.push(cur);
      cur = '';
    }
    else {
      cur += ch;
    }
  }
  if (cur) res.push(cur);
  return res;
}
function parse(str) {
  if (str === '') throw new Error('empty string');
  if (str[0] === "'") throw new Error('Invalid format');

  if (str === 'null') return null;
  if (str === 'false') return false;
  if (str === 'true') return true;

  if (str === "[]") return [];
  if (str === "{}") return {};

  if (str[0] === '"' && str[str.length - 1] === '"') return str.slice(1, -1);
  if (!isNaN(str)) return Number(str);

  if (str[0] === '[' && str[str.length - 1] === ']') {
    str = str.slice(1, -1);
    if (/,\s*$/.test(str)) throw new Error('invalid string')
    const content = splitTopLevel(str);
    return content.map(val => parse(val));
  }
  if (str[0] === '{' && str[str.length - 1] === '}') {
    str = str.slice(1, -1);
    if (/,\s*$/.test(str)) throw new Error('invalid string')
    const content = splitTopLevel(str);
    const res = {};
    content.forEach(pair => {
      const [key, value] = splitPair(pair);
      res[parse(key)] = parse(value);
    })
    return res;
  }
  throw new Error('Invalid string', str);
}