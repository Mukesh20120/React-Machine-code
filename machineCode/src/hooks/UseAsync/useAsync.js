import React, { useCallback, useEffect, useState } from 'react'

function useAsync(callback, dependencies) {
    const [value,setValue] = useState();
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);
   const callBackMemo = useCallback(()=>{
      setLoading(true);
      setValue(null);
      setError(null);
      callback().then(setValue).catch(setError).finally(()=>{setLoading(false)})
   },dependencies);
   useEffect(()=>{callBackMemo();},[callBackMemo])
  return [value,loading,error];
}

export default useAsync
