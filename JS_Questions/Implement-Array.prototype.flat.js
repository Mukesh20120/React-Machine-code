const array = [1, 2, 3, 5, [4],[1,[34,[34,3,342,[3242]]]]];

function fullFlat(arr) {
    let result = [];
    for(let item of arr) {
        if (Array.isArray(item)) { 
            //concat merge one array with other
            // [..nth...mth] = [...nth].concat([...mth]);
            result = result.concat(fullFlat(item));
        } else {
            result.push(item);
        }
    }
    return result;
}

function flatWithDepth(arr,level=1) {
    let result = [];
    for(let item of arr) {
        if (Array.isArray(item) && level > 0) { 
            result = result.concat(flatWithDepth(item,level-1));
        } else {
            result.push(item);
        }
    }
    return result;
}

function iterativeFlatWithDepth(arr,depth=1){
    let stack = [...arr.map((item)=>[item,depth])];
    let newArray = [];
    while(stack.length > 0){
        const [item,depth] = stack.pop(); //return last element
        if(Array.isArray(item) && depth > 0){
            stack = stack.concat(item.map((it)=>[it,depth-1]));
        }
        else{
            newArray.push(item);
        }
    }
return newArray.reverse();
}

function iterativeFlat(stack){
    let result = [];
    while(stack.length > 0){
        const item = stack.pop();
        if(Array.isArray(item)){
            stack = stack.concat(item);
        }
        else{
            result.push(item);
        }
    }
return result.reverse();
}

console.log(fullFlat(array)); 
console.log(flatWithDepth(array)); 
console.log(iterativeFlat(array));
console.log(iterativeFlatWithDepth(array));
console.log(array.flat()); //it take depth also by default it is depth = 1 means it will flat upto 1 array inside it [1,2,3,[4],[3,[34]]].flat() = [1,2,3,4,3,[34]]