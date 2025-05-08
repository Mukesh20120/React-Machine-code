import React, { useEffect, useRef } from 'react'

export default function useRenderCount() {
const countRef = useRef(0);
 useEffect(()=>{countRef.current++});
 return countRef.current;
}
