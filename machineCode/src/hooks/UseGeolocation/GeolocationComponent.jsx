import React from 'react'
import useGeolocation from './useGeolocation'

export default function GeolocationComponent() {
    const {isloading,error,data} = useGeolocation();
  return (
    <div>
      <div>Loading: {isloading.toString()}</div>
      <div>Error: {error && error.message}</div>
      <div>{JSON.stringify(data)}</div>
    </div>
  )
}
