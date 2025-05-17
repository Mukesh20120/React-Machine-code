//using es6 feature weakmap
class NodeStore {
  /**
  * @param {Node} node
  * @param {any} value
  */
  constructor() {
    this.hash = new WeakMap(); //key->obj value
  }
  set(node, value) {
    this.hash.set(node,value);
  }
  /**
   * @param {Node} node
   * @return {any}
   */
  get(node) {
   return this.hash.get(node);
  }

  /**
   * @param {Node} node
   * @return {Boolean}
   */
  has(node) {
   return this.hash.has(node);
  }
}
//solution 3 using symbol
// class NodeStore {
//   /**
//   * @param {Node} node
//   * @param {any} value
//   */
//   constructor() {
//     this.hash = {}; //key ,value
//   }
//   set(node, value) {
//    if(!node.cstmId){
//      node.cstmId = Symbol();
//    }
//    this.hash[node.cstmId]=value;
//   }
//   /**
//    * @param {Node} node
//    * @return {any}
//    */
//   get(node) {
//     if(!node.cstmId)return undefined;
//   return this.hash[node.cstmId];
//   }

//   /**
//    * @param {Node} node
//    * @return {Boolean}
//    */
//   has(node) {
//    return node.cstmId?true:false;
//   }
// }
//solution 2 using cstmId modify given node
// class NodeStore {
//   /**
//   * @param {Node} node
//   * @param {any} value
//   */
//   constructor() {
//     this.hash = {}; //key ,value
//     this.id = 0;
//   }
//   set(node, value) {
//    if(!node.cstmId){
//      node.cstmId = ++this.id;
//    }
//    this.hash[node.cstmId]=value;
//   }
//   /**
//    * @param {Node} node
//    * @return {any}
//    */
//   get(node) {
//     if(!node.cstmId)return undefined;
//   return this.hash[node.cstmId];
//   }

//   /**
//    * @param {Node} node
//    * @return {Boolean}
//    */
//   has(node) {
//    return node.cstmId?true:false;
//   }
// }

//solution 1 store object in array
// class NodeStore {
//   /**
//   * @param {Node} node
//   * @param {any} value
//   */
//   // array = [{node,value},{node1,value2}]
//   // -> O(n)
//   // -> O(n)
//   //->has O(n)
//   constructor() {
//     this.array = [];
//   }
//   set(node, value) {
//     for (let i = 0; i < this.array.length; i++) {
//       if (this.array[i].node === node) {
//         this.array[i].value = value;
//         return;
//       }
//     }
//     this.array.push({ node, value });
//   }
//   /**
//    * @param {Node} node
//    * @return {any}
//    */
//   get(node) {
//     for (let i = 0; i < this.array.length; i++) {
//       if (this.array[i].node === node) {
//         return this.array[i].value;
//       }
//     }
//     return undefined;
//   }

//   /**
//    * @param {Node} node
//    * @return {Boolean}
//    */
//   has(node) {
//     for (let i = 0; i < this.array.length; i++) {
//       if (this.array[i].node === node) {
//         return true;
//       }
//     }
//     return false;
//   }
// }