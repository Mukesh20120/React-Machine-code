import React, { useRef } from "react";

function usePrevious(value) {
  const currentRef = useRef();
  const prevRef = useRef();
  if (currentRef.current !== value) {
    prevRef.current = currentRef.current;
    currentRef.current = value;
  }
  return prevRef.current;
}

export default usePrevious;
