import React, { useEffect, useState } from "react";

function useDebounce({ value, delay = 500 }) {
  const [useDebounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  return useDebounceValue;
}

export default useDebounce;
