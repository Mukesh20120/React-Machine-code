// complete the implementation
class PriorityQueue {
    /**
     * @param {(a: any, b: any) => -1 | 0 | 1} compare - 
     * compare function, similar to parameter of Array.prototype.sort
     */
    constructor(compare) {
      this.compare = compare;
      this.arr = [];
    }
    /**
     * return {number} amount of items
     */
    size() {
     return this.arr.length;
    }
    /**
     * returns the head element
     */
    peek() {
     return this.arr.length == 0?undefined:this.arr[0];
    }
    /**
     * @param {any} element - new element to add
     */
    add(element) {
     let idx = this.arr.findIndex(e=>this.compare(element,e) < 0);
     if( idx === -1){
      this.arr.push(element);
     }
     else{
      this.arr.splice(idx,0,element)
     }
    }
    /**
     * remove the head element
     * @return {any} the head element
     */
    poll() {
      return this.arr.shift();
    }
  }