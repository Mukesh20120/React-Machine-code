import React from "react";

export default function Interest({ state, setState }) {
  const Interest = ["dance", "coding", "food"];
 
  const handleOnChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setState((prev) => ({ ...prev, interest: [...prev.interest, value] }));
    } else {
      setState((prev) => ({
        ...prev,
        interest: prev.interest.filter((item) => item !== value),
      }));
    }
  };
  return (
    <>
      {Interest.map((item, index) => (
        <div>
          <input
            type="checkbox"
            id={item}
            value={item}
            checked={state.interest[index]===item}
            onChange={(e) => {
              handleOnChange(e, index);
            }}
          />
          <label htmlFor={item}>{item}</label>
        </div>
      ))}
    </>
  );
}
