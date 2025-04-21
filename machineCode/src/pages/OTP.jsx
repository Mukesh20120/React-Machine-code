import React, { useEffect, useRef, useState } from "react";

function OTP({ fieldNumber = 5 }) {
  const [inputArray, setInputArray] = useState(new Array(fieldNumber).fill(""));
  const refArray = useRef([]);

  useEffect(() => {
    refArray.current[0]?.focus();
  }, []);

  const handleOnChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return;
    const newArray = [...inputArray];
    newArray[index] = value.slice(-1);
    setInputArray(newArray);
    if (value && index < fieldNumber - 1) {
      refArray.current[index + 1]?.focus();
    }
  };

  const handleOnKeyDown = (e, index) => {
    if (e.key === "Backspace" && inputArray[index] === "") {
      if (index > 0) {
        refArray.current[index - 1]?.focus();
      }
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className=" my-5">
        <h1 className=" text-2xl font-bold">OTP Verification</h1>
      </div>
      <div className="flex">
        {inputArray.map((box, index) => (
          <div
            key={index}
            className="border-2 w-10 h-10 rounded-2xl mx-1 overflow-hidden"
          >
            <input
              value={inputArray[index]}
              ref={(input) => {
                refArray.current[index] = input;
              }}
              onChange={(e) => handleOnChange(e, index)}
              onKeyDown={(e) => handleOnKeyDown(e, index)}
              type="text"
              className="font-light text-2xl w-full h-full text-center transform-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OTP;
