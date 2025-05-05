function moveZeros(list) {
    let i=0;
    let ln=list.length;
    let j=0;
    while(j<ln){
        [list[i],list[j]]=[list[j],list[i]];
       j++;
       if(list[i]!=0)i++;
    }
  }
  
  const list = [1,0,0,2,3]
  moveZeros(list) 
  console.log(list) // [1,2,3,0,0]
  