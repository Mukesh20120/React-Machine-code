

/**
 * @param {Array<(arg: any) => any>} funcs 
 * @return {(arg: any) => any}
 */
function pipe(funcs) {
	return function fun(args){
		let result = args;
		for(let item of funcs){
			// result = item(result);
			//preverve the this of the object
			result = item.call(this,result);
		}
  return result;
	}
}

