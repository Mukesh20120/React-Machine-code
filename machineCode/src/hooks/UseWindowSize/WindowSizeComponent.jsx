import React from 'react'
import useWindowSize from './useWindowSize'

function WindowSizeComponent() {
    const {height,width} = useWindowSize();
  return (
    <div>
      {height} X {width}
    </div>
  )
}

export default WindowSizeComponent
