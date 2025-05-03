
/**
 * @param {any} data
 * @return {string}
 */
function detectType(data) {
    const dataTypes = [
      {type: Map, name: 'map'},
      {type: Set, name: 'set'},
      {type: ArrayBuffer, name: 'arraybuffer'},
      {type: Date, name: 'date'},
      {type: Number, name: 'number'},
      {type: String, name: 'string'},
      {type: Boolean, name: 'boolean'}
    ];
    for(let {type,name} of dataTypes){
      if(data instanceof type){
        return name;
      }
    }
    if(Array.isArray(data))return 'array';
    if(data === null)return 'null';
    if(data === undefined) return 'undefined';
    return typeof(data);
  }