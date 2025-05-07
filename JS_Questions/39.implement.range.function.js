/**
 * @param {integer} from
 * @param {integer} to
 */
function range(from, to) {
    return Array.from({length: to-from+1},(_,i)=>i+from);
   }

   
   // function* range(from, to) {
   //   while(from<=to){
   //     yield from++;
   //   }
   // }