import React, { useEffect, useState } from 'react'

export default function useGeolocation(options) {
    const [isloading,setIsLoading] = useState(true);
    const [error,setError] = useState(null);
    const [data,setData] = useState({});
    useEffect(()=>{
        const success = (e)=>{
            setIsLoading(false);
            setError(null);
            setData(e.coords);
        }
        const failed = (error)=>{
            setIsLoading(false);
            setError(error);
        }
        navigator.geolocation.getCurrentPosition(success,failed,options);
        const id = navigator.geolocation.watchPosition(success,failed,options);

        return ()=>navigator.geolocation.clearWatch(id);
    },[options])
  return {isloading,error,data};
}
