import React, { useState } from 'react'
import useEventHander from './useEventHander';

function EventHandlerComponent() {
    const [key,setKey] = useState();
    useEventHander('keydown',(e)=>{
      setKey(e.key);
    })
   
  return (
    <div>
      key: {key}
    </div>
  )
}

export default EventHandlerComponent
