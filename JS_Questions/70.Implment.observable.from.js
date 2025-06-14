/**
 * @param {Array | ArrayLike | Promise | Iterable | Observable} input
 * @return {Observable}
 */
function from(input) {
  if (input == null) {
    throw new Error('Invalid input');
  }

  if (input instanceof Observable) {
    return input;
  }

  if (typeof input.then === 'function') { // Promise-like check
    return new Observable(sub => {
      input
        .then(value => {
          sub.next(value);
          sub.complete();
        })
        .catch(err => sub.error(err));
    });
  }

  if (typeof input[Symbol.iterator] === 'function') {
    return new Observable(sub => {
      try {
        for (let item of input) {
          sub.next(item);
        }
        sub.complete();
      } catch (err) {
        sub.error(err);
      }
    });
  }

  if (typeof input.length === 'number') { // Array-like check
    return new Observable(sub => {
      try {
        for (let i = 0; i < input.length; i++) {
          sub.next(input[i]);
        }
        sub.complete();
      } catch (err) {
        sub.error(err);
      }
    });
  }

  throw new Error('Invalid input');
}
