/**
 * @param {HTMLElement} el - element to be wrapped
 */
function $(el) {
  return {
    css: function (property, value) {
      el.style[property] = value;
      return this;
    },
  };
}

//oop
function $(el) {
  return new Wrapper(el);
}
class Wrapper {
  constructor(el) {
    this.el = el;
  }
  css(property, value) {
    this.el.style[property] = value;
    return this;
  }
}
