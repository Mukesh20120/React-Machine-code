
/* you can use this Class which is bundled together with your code
class Stack {
  push(element) { // add element to stack }
  peek() { // get the top element }
  pop() { // remove the top element}
  size() { // count of element }
}
*/
/* Array is disabled in your code */
// you need to complete the following Class
class Queue {
    constructor(){
      this.st1 = new Stack();
      this.st2 = new Stack();
    }
    enqueue(element) { 
      this.st2.push(element);
    }
    fillSt1(){
      while(this.st2.size()>0){
        this.st1.push(this.st2.pop());
      }
    }
    peek() { 
    if(this.st1.size() == 0){
      this.fillSt1();
    }
    return this.st1.size()>0?this.st1.peek():undefined;
    }
    size() { 
      return this.st1.size()+this.st2.size();
    }
    dequeue() {
      if(this.st1.size() == 0){
        this.fillSt1();
      }
    return this.st1.size()>0?this.st1.pop():undefined;
    }
  }


//   Arrow functions don’t bind their own this — so using .apply(this, ...) inside an arrow function will not preserve the caller’s this.