
/**
 * @param {any} data
 * @return {string}
 */
function detectType(data) {
    const stringTag = Object.prototype.toString.call(data);
    const tp = stringTag.slice(1, -1).split(' ')[1].toLowerCase();
    if (tp === 'function' && Function.prototype.toString.call(data).startsWith('class'))
      return 'class';
    const allowedType = new Set([
      'undefined',
      'null',
      'boolean',
      'number',
      'string',
      'date',
      'arraybuffer',
      'bigint',
      'symbol',
      'array',
      'set',
      'map',
      'function',
      'class'
    ]);
    if (allowedType.has(tp)) {
      return tp;
    }
    return 'object';
  }
  
  function stringify(data) {
    const dataType = detectType(data);
    switch (dataType) {
      case 'null':
        return 'null';
      case 'boolean':
        return `${data}`;
      case 'number':
        if (Number.isNaN(data) || !Number.isFinite(data))
          return 'null';
        return `${data}`;
      case 'string':
        return `"${data}"`;
      case 'date':
        return `"${data.toISOString()}"`;
      case 'arraybuffer':
      case 'bigint':
        throw new Error('not convertable');
      case 'array':
        return '[' + data.reduce((prefix, val) => {
          let str = stringify(val);
          str = str === undefined ? 'null' : str;
          return `${prefix}${str},`;
        }, '').slice(0, -1) + ']';
      case 'map':
      case 'object':
        {
          const keys = Object.keys(data);
          return '{' + keys.reduce((prefix, key) => {
            if (data[key] === undefined)
              return prefix;
            const str = stringify(data[key]);
            return `${prefix}"${key}":${str},`;
          }, '').slice(0, -1) + '}';
        }
      case 'class':
      case 'function':
      case 'undefined':
      case 'symbol':
      default:
        return undefined;
    }
  }



  //
  
/**
 * @param {any} data
 * @return {string}
 */
function detectType(data) {
  const stringTag = Object.prototype.toString.call(data);
  const tp = stringTag.slice(1, -1).split(' ')[1].toLowerCase();
  const allowedType = new Set([
    'undefined',
    'null',
    'boolean',
    'number',
    'string',
    'date',
    'arraybuffer',
    'bigint',
    'symbol',
    'array',
    'set',
    'map',
    'function'
  ]);
  if (allowedType.has(tp)) {
    return tp;
  }
  return 'object';
}

function stringify(data) {
  const dataType = detectType(data);
  switch (dataType) {
    case 'null':
      return 'null';
    case 'boolean':
      return `${data}`;
    case 'number':
      if (Number.isNaN(data) || !Number.isFinite(data))
        return 'null';
      return `${data}`;
    case 'string':
      return `"${data}"`;
    case 'date':
      return `"${data.toISOString()}"`;
    case 'arraybuffer':
    case 'bigint':
      throw new Error('not convertable');
    case 'array':
      return '[' + data.reduce((prefix, val) => {
        let str = stringify(val);
        str = str === undefined ? 'null' : str;
        return `${prefix}${str},`;
      }, '').slice(0, -1) + ']';
    case 'map':
    case 'object':
      {
        const keys = Object.keys(data);
        return '{' + keys.reduce((prefix, key) => {
          if (data[key] === undefined)
            return prefix;
          const str = stringify(data[key]);
          return `${prefix}"${key}":${str},`;
        }, '').slice(0, -1) + '}';
      }
    default:
      return undefined;
  }
}

  