import React, { useEffect, useRef } from 'react'

function useUpdateEffect(callback,dependencies) {
  const firstRef = useRef(true);
  useEffect(()=>{
    if(firstRef.current){
      firstRef.current = false;
        return;
    }
    return callback();
  },dependencies)
}

export default useUpdateEffect
