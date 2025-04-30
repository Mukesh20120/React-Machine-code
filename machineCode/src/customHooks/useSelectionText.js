import React, { useEffect, useState } from 'react'

function useSelectionText({ref}) {
  const [data,setData] = useState({showTool: false});

  const onMouseUp = ()=>{
     const selection = window.getSelection();
     const start = selection.getRangeAt(0).startContainer.parentNode;
     const end = selection.getRangeAt(0).endContainer.parentNode;

     if(!start.isEqualNode(ref.current) || !start.isEqualNode(end)){
        setData({showTool: false});
        return;
     }
     const {x,y,width} = selection.getRangeAt(0).getBoundingClientRect();
     if(!width){
        setData({showTool: false});
        return;
     }
      const newY = y + window.scrollY - 25
     if(selection.toString()){
        setData({
            showTool: true,
            selectedText: selection.toString(),
            x,
            y: newY,
            width
        })
     }
  }

  useEffect(()=>{
    document.addEventListener("mouseup", onMouseUp);
    return ()=>{
        document.removeEventListener("mouseup", onMouseUp);
    }
  },[]);
return data;
}

export default useSelectionText
