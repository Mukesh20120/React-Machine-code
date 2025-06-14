
/**
 * @param {integer} from
 * @param {integer} to
 */
function range(from, to) {
    return  Array.from({length: to-from+1},(_,idx)=>idx+from);
}
function* range(from, to) {
      while (from <= to) { yield from++; }
}
function range(from, to) {
  return  (function* () {
      while (from <= to) { yield from++; }
  })(from,to);
}
function range(from, to) {
  return {
    [Symbol.iterator]: function* () {
      while (from <= to) { yield from++; }
    }
  }
}
function range(from, to) {
  return {
    [Symbol.iterator]() {
      return {
        next() {
          return { done: from > to, value: from++ }
        }
      }
    }
  }
}