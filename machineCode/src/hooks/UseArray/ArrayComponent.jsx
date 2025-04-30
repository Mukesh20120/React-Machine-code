import React, { useState } from 'react';
import useArray from './useArray';

function ArrayComponent() {
  const { array, push, insert, remove, filter, clear, update } = useArray([1, 2, 3, 4, 5]);
  const [inputValue, setInputValue] = useState('');
  const [indexValue, setIndexValue] = useState('');

  return (
    <div style={{ padding: '20px' }}>
      <h2>Array: {array && array.join(', ')}</h2>

      <div style={{ margin: '10px 0' }}>
        <input
          type="number"
          placeholder="Value"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{ marginRight: '5px' }}
        />
        <input
          type="number"
          placeholder="Index"
          value={indexValue}
          onChange={(e) => setIndexValue(e.target.value)}
          style={{ marginRight: '5px' }}
        />
      </div>

      <div>
        <button onClick={() => push(Number(inputValue))} className="p-2 border m-1">
          Push
        </button>
        <button onClick={() => insert(Number(indexValue), Number(inputValue))} className="p-2 border m-1">
          Insert
        </button>
        <button onClick={() => update(Number(indexValue), Number(inputValue))} className="p-2 border m-1">
          Update
        </button>
        <button onClick={() => remove(Number(indexValue))} className="p-2 border m-1">
          Remove
        </button>
        <button onClick={() => filter((x) => x !== Number(inputValue))} className="p-2 border m-1">
          Filter Out Value
        </button>
        <button onClick={clear} className="p-2 border m-1">
          Clear
        </button>
      </div>
    </div>
  );
}

export default ArrayComponent;
