
/**
 * @param {any} input
 * @return {(observable: Observable) => Observable}
 * returns a function which trasnform Observable
 */
function map(transform) {
  return source =>{
    return new Observable(sub=>{
      source.subscribe(val=>{
        sub.next(transform(val));
      })
    })
  }
}