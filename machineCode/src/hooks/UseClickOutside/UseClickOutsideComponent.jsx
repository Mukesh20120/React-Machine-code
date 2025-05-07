import React, { useRef, useState } from "react";
import useClickOutside from "./useClickOutside";

export default function UseClickOutsideComponent() {
  const [open, setOpen] = useState(false);
  const modelRef = useRef();
  const buttonRef = useRef();
  useClickOutside([modelRef,buttonRef], () => {
    if (open) setOpen(false);
  });
  console.log(open);
  return (
    <>
      <button
      ref={buttonRef}
        className="p-2 bg-green-500"
        onClick={() => {
          setOpen(true);
        }}
      >
        Show Modal
      </button>
      <div
        ref={modelRef}
        style={{
          height: "100px",
          width: "100px",
          position: "absolute",
          top: "calc(50%-50px)",
          left: "calc(50%-50px)",
          color: "white",
          backgroundColor: "blue",
          display: open ? "block" : "none",
        }}
      >
        <span>Modal</span>
      </div>
    </>
  );
}
