const array = [1,2,3,4];
function fisherYatesShuffleAlgorithm(arr){
    const ln = arr.length;
    //starting from end 
    for(let i=ln-1;i>0;i--){
        const j = Math.floor(Math.random()*(i+1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function suffle(arr){
    const ln = arr.length;
    const result = [...arr];
    const hash = new Array(ln).fill(-1);
    for(let i=0;i<ln;i++){
        let index = Math.floor(Math.random()*ln); 
        while(hash[index]!==-1){
         index = Math.floor(Math.random()*ln); 
        }
        result[i] = arr[index];
        hash[index]=index;
    }
return result;
}

console.log(suffle(array))
console.log(fisherYatesShuffleAlgorithm(array))