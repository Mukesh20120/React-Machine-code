
/**
 * @param {HTMLElement} element
 * @param {string} eventName
 * @param {boolean} capture
 * @return {Observable}
 */
function fromEvent(element, eventName, capture = false) {
  // your code here
  return new Observable(sub=>{
    const handler = event=>sub.next(event);
    element.addEventListener(eventName,handler,capture);
    return ()=>{
      element.removeEventListener(eventName,handler,capture);
    }
  })
}