import React, { useCallback, useState } from "react";

export default function useCopyClipboard() {
  const [copied, setCopied] = useState(false);
  const copyFunction = useCallback((text) => {
    if(!navigator.clipboard){
        console.warn('navigator api is not supported');
        return;
    }
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }).catch((error)=>{
        console.error('failed to copy',error);
    });
  }, []);
  return [copied, copyFunction];
}
