import React, { useState } from 'react'

export default function useToggle(defaultValue) {
    const [toggle, setToggle] = useState(defaultValue);
    const setToggleValue = (value) => {
      setToggle((prev) => (typeof value === 'boolean' ? value : !prev));
    };
    return [toggle, setToggleValue];
  }
  
