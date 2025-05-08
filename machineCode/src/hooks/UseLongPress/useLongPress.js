import React from 'react'
import useTimeout from '../UseTimeOut/useTimeout'
import useEffectOnce from '../UseEffectOnce/useEffectOnce';
import useEventHander from '../UseEventHandler/useEventHander';

export default function useLongPress(ref, cb, {delay=250}={}) {
   const {reset,clear} = useTimeout(cb, delay);
   useEffectOnce(clear);

   useEventHander('mousedown', reset, ref.current);
   useEventHander('touchstart', reset, ref.current);

   useEventHander('mouseleave', clear, ref.current);
   useEventHander('mouseup', clear, ref.current);
   useEventHander('touchend', clear, ref.current);
}
