

/**
 * @param {any} data
 * @param {Object} command
 */
function update(data, command) {
  for(const [key,value] of Object.entries(command)){
     switch(key){
      case '$push':
        return [...data,...value];
      case '$set':
       return value;
      case '$merge':
       if(!( data instanceof Object)){
        throw Error('Bad merge');
       }
       return {...data, ...value};
      case '$apply':
       return value(data);
       default:
       if(data instanceof Array){
        const res = [...data];
        res[key]=update(data[key],value);
        return res;
       }
       else{
        return {...data, [key]: update(data[key],value)}
       }
     }
  }
}

