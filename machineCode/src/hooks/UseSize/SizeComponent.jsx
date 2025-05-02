import React, { useRef } from "react";
import useSize from "./useSize";

export default function SizeComponent() {
  const ref = useRef();
  const size = useSize(ref);
  return (
    <div className="max-w-full">
      <div>size: {JSON.stringify(size)}</div>
      
        <textarea ref={ref} className="resize border"></textarea>
      
    </div>
  );
}
