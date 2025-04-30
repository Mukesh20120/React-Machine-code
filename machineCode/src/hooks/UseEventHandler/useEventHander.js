import React, { useEffect, useRef } from "react";

function useEventHander(eventType, callback, element = window) {
  const callbackRef = useRef(callback);
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback, element]);

  useEffect(() => {
    if (element == null) return;
    const handler = (e) => callbackRef.current(e);
     element.addEventListener(eventType, handler);
    return () => element.removeEventListener(eventType, handler);
  }, [eventType, element]);
}

export default useEventHander;
