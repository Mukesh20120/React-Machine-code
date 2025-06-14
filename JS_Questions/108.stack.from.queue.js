/* you can use this Queue which is bundled together with your code
class Queue {
  enqueue(element) {
    // add new element to the queue
  }
  peek() { 
    // return the head element
  }
  dequeue() { 
    // remove head element from the queue
  }
  size() { 
    // return the queue size
  }
}
*/


// you need to complete the following Stack, using only Queue
class Stack {
  constructor(){
    this.q = new Queue();
  }
  push(element) {
    // push an element into the stack
    let ln = this.q.size();
    this.q.enqueue(element);
    while(ln--){
      this.q.enqueue(this.q.dequeue());
    }
  }
  peek() { 
    // get the top element 
    return this.q.peek();
  }
  pop() { 
    // remove top element from stack
    return this.q.dequeue();
  }
  size() { 
    // return count of elements
    return this.q.size();
  }
}