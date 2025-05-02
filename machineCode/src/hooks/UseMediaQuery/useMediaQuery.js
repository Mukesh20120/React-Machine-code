import React, { useEffect, useState } from 'react'
import useEventHander from '../UseEventHandler/useEventHander';

export default function useMediaQuery(mediaList) {
    const [isMatch,setIsMatch] = useState(false);
    const [mediaQueryList,setMediaQueryList] = useState(null);
    useEffect(()=>{
        const list = window.matchMedia(mediaList);
        setMediaQueryList(list);
        setIsMatch(list.matches);
    },[mediaList]);
    useEventHander('change',(e)=>setIsMatch(e.matches),mediaQueryList);
  return isMatch;
}
