function excludeItems(items, excludes) {
    const map = new Map();
    excludes.forEach(({k,v})=>{
      if(!map[k])
         map[k]= new Set();
     map[k].add(v);
    })
  itemsKeys =items.length>0? Object.keys(items[0]) :[];
return items.filter(item => !itemsKeys.some(key=>map[key] && map[key].has(item[key])))
}