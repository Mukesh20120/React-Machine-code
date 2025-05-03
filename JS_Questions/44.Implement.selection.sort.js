function selectionSort(arr) {
    let ln = arr.length;
    for(let i=0;i<ln-1;i++){
      let k=i;
      for(let j=i+1;j<ln;j++){
          if(arr[j]<arr[k])
              k=j;
      }
      [arr[i],arr[k]]=[arr[k],arr[i]];
    }
  }