class BrowserHistory {

  /**
   * @param {string} url
   * if url is set, it means new tab with url
   * otherwise, it is empty new tab
   */
  constructor(url) {
    this.history = [];
    this.cur = 0;
    if (url !== undefined) this.history.push(url);
  }
  /**
   * @param { string } url
   */
  visit(url) {
    this.history.length = this.cur + 1;
    this.history.push(url);
    this.cur++;
  }

  /**
   * @return {string} current url
   */
  get current() {
    return this.history[this.cur];
  }

  // go to previous entry
  goBack() {
    return this.cur = Math.max(0, --this.cur);
  }

  // go to next visited url
  forward() {
    return this.cur = Math.min(this.history.length - 1, ++this.cur);
  }
}