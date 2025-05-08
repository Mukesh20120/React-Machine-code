import React, { useState } from 'react'
import useEventHander from '../UseEventHandler/useEventHander';

export default function useOnlineStatus() {
   const [online,setOnline] = useState(navigator.onLine);
   useEventHander('online',()=>{setOnline(navigator.onLine)});
   useEventHander('offline',()=>{setOnline(navigator.onLine)});
   return online;
}
