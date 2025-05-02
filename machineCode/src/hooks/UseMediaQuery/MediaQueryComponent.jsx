import React from 'react'
import useMediaQuery from './useMediaQuery'

export default function MediaQueryComponent() {
    const isLarge = useMediaQuery("(min-width: 800px)")
  return (
    <div>
      isLarge: {isLarge.toString()}
    </div>
  )
}
