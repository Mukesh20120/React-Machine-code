/** 
 * class Node {
 *  new(val: number, next: Node);
 *    val: number
 *    next: Node
 * }
 */

/**
 * @param {Node} list
 * @return {Node} 
 */
const reverseLinkedList = (list) => {
    let p=list,q=null,r=null;
    while(p){
      r=q;
      q=p;
      p=p.next;
      q.next=r;
    }
 return q;
 }