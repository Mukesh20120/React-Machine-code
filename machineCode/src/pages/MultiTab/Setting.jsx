import React from "react";

export default function Setting({ state, setState }) {
  const setting = ["dark", "light", "save"];
 
  const handleOnChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setState((prev) => ({ ...prev, setting: [...prev.setting, value] }));
    } else {
      setState((prev) => ({
        ...prev,
        setting: prev.setting.filter((item) => item !== value),
      }));
    }
  };
  return (
    <>
      {setting.map((item, index) => (
        <div>
          <input
            type="checkbox"
            id={item}
            value={item}
            checked={state.setting[index]===item}
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
