/**
 * @param {any[]} items
 * @param {number[]} newOrder
 * @return {void}
 */
function sort(items, newOrder) {
    let i=0;
    let ln = items.length;
    while(i<ln){
      while(newOrder[i]!=i){
       let to = newOrder[i];
        [items[i],items[to]] = [items[to],items[i]];
        [newOrder[i],newOrder[to]] = [newOrder[to],newOrder[i]];
      }
      i++;
    }
   }
   const A = ['A', 'B', 'C', 'D', 'E', 'F']
   const B = [1,   5,   4,   3,   2,   0];
   sort(A,B);
   console.log(A);