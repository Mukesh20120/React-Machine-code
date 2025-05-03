
/**
 * @param {Array<any>} promises - notice that input might contains non-promises
 * @return {Promise<Array<{status: 'fulfilled', value: any} | {status: 'rejected', reason: any}>>}
 */
function allSettled(promises) {
    return new Promise((resolve, reject) => {
      let completed = 0;
      const result = [];
      if (promises.length == 0) {
        resolve([]);
      }
      promises.forEach((promise, index) => {
        Promise.resolve(promise).then(value => {
          result[index] = { status: 'fulfilled', value };
        }).catch(err => {
          result[index] = { status: 'rejected', reason: err };
        }).finally(() => {
          completed++;
          if (completed === promises.length) {
            resolve(result);
          }
        })
      })
    })
  }
  
  