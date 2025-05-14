// you can change this to generator function if you want
const fetchListWithAmount = async (amount = 5) => {
  let result = [];
  let id;
  while(result.length < amount){
    const {items} = await fetchList(id);
    if(items.length>0){
      result.push(...items);
      id = items[items.length-1].id;
    }
    else{
      break;
    }
  }
  return result.slice(0,amount);
}

//async iterator
// fetchList is provided for you
// const fetchList = (since?: number) => 
//   Promise<{items: Array<{id: number}>}>


// you can change this to generator function if you want
//change back to original name for running 
// const fetchListWithAmount = async (amount = 5) => {
const fetchListWithAmount1 = async (amount = 5) => {
  let result = [];
  for await (const items of fetchListIterator()) {
    result.push(...items);
  }
  return result.slice(0, amount);

  function fetchListIterator() {
    let totalFetched = 0;
    let cursor;
    return {
      [Symbol.asyncIterator]() {
        return {
          async next() {
            const { items } = await fetchList(cursor);
            if (items.length === 0 || totalFetched >= amount) {
              return { done: true }
            }
            totalFetched += items.length;
            cursor = items[items.length - 1].id;
            return { done: false, value: items }
          }
        }
      }
    }
  }
}


// you can change this to generator function if you want
// const fetchListWithAmount = async (amount = 5) => {
const fetchListWithAmount2 = async (amount = 5) => {
   let result = [];
   for await (const items of fetchListGenerator()){
    result.push(...items);
   }
  return result.slice(0,amount);

  async function* fetchListGenerator(){
    let totalFetch = 0;
    let cursor;
    while(totalFetch < amount){
      const {items} = await fetchList(cursor);
      if(items.length === 0)break;
      totalFetch += items.length;
      cursor = items[items.length-1].id;
      yield items;
    }
  }
}

// fetchList is provided for you
// const fetchList = (since?: number) => 
//   Promise<{items: Array<{id: number}>}>


// you can change this to generator function if you want
const fetchListWithAmoun3 = async (amount = 5) => {
// const fetchListWithAmount = async (amount = 5) => {
  return new Promise((resolve)=>{
    let result = [];
    let cursor;
    getData(cursor);
    async function getData(cursor){
      const {items} = await fetchList(cursor);
      result.push(...items);
      if(items.length===0 || result.length >= amount){
       return resolve(result.slice(0,amount));
      }
      cursor = items[items.length-1].id;
      getData(cursor);
    }
  })
}
