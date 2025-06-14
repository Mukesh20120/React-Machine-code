
/**
 * @param {Node} head
 * @return {boolean}
 */
function hasCircle(head) {
  // your code here
  let slow = head,fast = head;
  while(slow && fast){
    slow=slow.next;
    fast=fast.next?.next;
    if(slow===fast)return true;
  }
  return false;
}