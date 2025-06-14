
/**
 * @param {number} period
 * @return {Observable}
 */
function interval(period) {
  return new Observable(sub => {
    try {
      timer = setInterval(() => { sub.next() }, period);
    } catch (error) {
      clearInterval(timer);
      sub.error(error);
    } finally {
      sub.complete();
    }
  })
}