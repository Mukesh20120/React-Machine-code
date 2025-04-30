import React, {  useState } from 'react'
import useUpdateEffect from './useUpdateEffect';

function UpdateEffectComponent() {
    const [count,setCount] = useState(10);
    useUpdateEffect(()=>{alert(count)},[count]);
  return (
    <div>
       <div>
        <h1>{count}</h1>
       </div>
       <div>
        <button className='p-2 border m-1' onClick={()=>{setCount(prev=>prev+1)}}>Increase</button>
        <button className='p-2 border m-1' onClick={()=>{setCount(prev=>prev-1)}}>Decrease</button>
       </div>
    </div>
  )
}

export default UpdateEffectComponent
