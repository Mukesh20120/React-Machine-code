import React from "react";
import useToggle from "./useToggle";

function ToggleComponent() {
  const [toggle, setToggleValue] = useToggle(false);
  return (
    <div className="flex flex-col">
      <div>
        <h1>{toggle.toString()} is the current vlaue</h1>
      </div>
      <div>
        <button
        className=" px-3 border"
          onClick={() => {
            setToggleValue();
          }}
        >
          default
        </button>
        <button
          className=" px-3 border mx-2"
          onClick={() => {
            setToggleValue(true);
          }}
        >
          setTrue
        </button>
        <button
        className=" px-3 border"
          onClick={() => {
            setToggleValue(false);
          }}
        >
          setFalse
        </button>
      </div>
    </div>
  );
}

export default ToggleComponent;
