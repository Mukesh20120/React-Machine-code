import React from 'react'
import useCopyClipboard from './useCopyClipboard'

export default function UseCopyClipboardComponent() {
    const text = ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti minus sequi ducimus quisquam repellendus saepe natus placeat. Quo, distinctio cupiditate alias error corporis quisquam tempore nesciunt neque? In, quos odit.'
    const [copied,copyFunction] = useCopyClipboard();
  return (
    <div>
        <button onClick={()=>{copyFunction(text)}}>copy</button>
     <p>{text}</p>
     {copied && <span>copied</span>}
    </div>
  )
}
