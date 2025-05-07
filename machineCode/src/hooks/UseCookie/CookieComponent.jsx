import React, { useState } from "react";
import UseCookie from "./UseCookie";

export default function CookieComponent() {
  const [input, setInput] = useState("");
  const [value, updateCookie, removeCookie] = UseCookie("name", "ram");
  return (
    <div>
      <div>{value}</div>
      <div>
        <input
          className="border p-4"
          type="text"
          value={input}
          onChange={(e)=>{setInput(e.target.value)}}
        />
      </div>
      <div>
        <button
          className="p-2 bg-green-600 text-white border m-2"
          onClick={() => {
            updateCookie(input);
          }}
        >
          change
        </button>
        <button
          className="p-2 bg-green-600 text-white border m-2"
          onClick={() => {
            removeCookie();
          }}
        >
          remove
        </button>
      </div>
    </div>
  );
}
