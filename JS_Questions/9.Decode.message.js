

// This is a JavaScript coding problem from BFE.dev 

/**
 * @param {string[][]} message
 * @return {string}
 */
function decode(message) {
    if(!message || message.length === 0)return '';
    const n=message.length,m=message[0].length;
    let j=0,i=0;
    let ans='';
    while(j<m){
      //move down right
      while(i<n && j<m){
        ans+=message[i][j];
        i+=1;
        j+=1;
      }
      //move up right
      i-=2;
      while(i>=0 && j<m){
        ans+=message[i][j];
        i--;
        j++;
      }
      i=1;
    }
    return ans;
  }
  const message = [['I', 'B', 'C', 'A', 'L', 'K', 'A'],
                   ['D', 'R', 'F', 'C', 'A', 'E', 'A'],
                   ['G', 'H', 'O', 'E', 'L', 'A', 'D']];
  
  console.log(decode(message));
  
  
  
  