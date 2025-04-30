import React, { useState } from 'react'
import usePrevious from './usePrevious';

function PreviousComponent() {
    const [count,setCount] = useState(0);
    const [name,setName] = useState('');
    const preValue = usePrevious(count);
  return (
    <div>
      <div>{name} and count is {count} previous {preValue}</div>
      <div>
        <label htmlFor="name">Name:</label>
        <input type='text' name='name' id='name' onChange={(e)=>{setName(e.target.value)}}/>
        <button onClick={()=>{setCount(prev=>prev+1)}}>increse</button>
      </div>
    </div>
  )
}

export default PreviousComponent
