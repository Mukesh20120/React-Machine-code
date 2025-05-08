import React, {  useState } from 'react'
import useEventHander from '../UseEventHandler/useEventHander';

export default function useHover(ref) {
   const [hover,setHover] = useState(false);
   useEventHander('mouseover',()=>{setHover(true)},ref.current);
   useEventHander('mouseout',()=>{setHover(false)},ref.current);
return hover;
}
