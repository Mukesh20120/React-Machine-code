
function excludeItems(items, excludes) {
  if(items.length === 0)return [];
  const map = new Map();
  excludes.forEach(({k,v})=>{
    if(!map.has(k)){
      map.set(k,new Set());
    }
    map.get(k).add(v);
  })
  const itemKeys = Object.keys(items[0]) || [];
 return  items.filter(item => !itemKeys.some(key=>map.has(key) && map.get(key).has(item[key])));
}