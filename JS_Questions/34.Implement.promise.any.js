
/**
 * @param {Array<Promise>} promises
 * @return {Promise}
 */
function any(promises) {

    return new Promise((resolve, reject) => {
      let settleCount = 0;
      const errors = [];
      if (promises.length == 0) {
        reject(new AggregateError(
          'No Promise in Promise.any was resolved'
        ));
      }
      promises.forEach((promise, index) => {
        Promise.resolve(promise).then((value) => {
          resolve(value);
        }).catch(err => {
          errors[index] = err;
          if (++settleCount == promises.length) 
          reject(new AggregateError(
            'No Promise in Promise.any was resolved',
            errors
          ));
        })
      })
    })
  }