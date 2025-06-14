
function countOne(num) {
  let cnt=0;
  for(let i=0;i<32;i++){
    if(num&(1<<i))cnt++;
  }
  return cnt;
}

//  Brian Kernighan’s Algorithm
function countOne(num) {
  let cnt=0;
  while(num){
    num&=(num-1);
    cnt++;
  }
  return cnt;
}
