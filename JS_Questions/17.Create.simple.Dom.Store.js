class NodeStore {
    /**
    * @param {Node} node
    * @param {any} value
    */
   constructor(){
     this.hash = {};
   }
   set(node, value) {
    let key = JSON.stringify(node);
    this.hash[key] = value;
   }
   /**
    * @param {Node} node
    * @return {any}
    */
   get(node) {
     let key = JSON.stringify(node);
    return this.hash[key];
   }
   
   /**
    * @param {Node} node
    * @return {Boolean}
    */
   has(node) {
      let key = JSON.stringify(node);
     return this.hash.hasOwnProperty(key);
   }
 }
 //the problem with this solution is the json.stringfy converting all the data into string taking a lot of time


 
//how below solution work as javascript pass the object by reference we can create our own
//it _nsid node store id and store a unique value in it and hash
class NodeStore {
    /**
    * @param {Node} node
    * @param {any} value
    */
   constructor(){
     this.hash = {};
     this.id = 0;
   }
   set(node, value) {
    if(!node._nsid){
      node._nsid = ++this.id;
    }
    this.hash[node._nsid] = value;
   }
   /**
    * @param {Node} node
    * @return {any}
    */
   get(node) {
     return node._nsid?this.hash[node._nsid]:undefined;
   }
   
   /**
    * @param {Node} node
    * @return {Boolean}
    */
   has(node) {
     return node._nsid?true:false;
   }
 }