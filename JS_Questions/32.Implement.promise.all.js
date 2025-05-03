
/**
 * @param {Array<any>} promises - notice input might have non-Promises
 * @return {Promise<any[]>}
 */
function all(promises) {
    return new Promise((resolve, reject) => {
      const result = [];
      let complete = 0;
      if (promises.length === 0) {
        resolve([]);
      }
      promises.forEach((promise, index) => {
        Promise.resolve(promise).then((value) => {
          result[index] = value;
          complete++;
          if (complete === promises.length) {
            resolve(result);
          }
        }).catch(error => {
          reject(error);
        })
      });
    })
  }