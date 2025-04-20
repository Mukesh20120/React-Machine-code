import React, { useEffect, useState } from "react";
import "../App.css"

function Progress({ value = 0 }) {
    const [animatedValue,setAnimatedValue] = useState(0);
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setAnimatedValue(value);
        },[300]);
        return ()=>{clearTimeout(timer)}
    },[value])
  return (
    <div
      style={{
        width: "100%",
        height: "20px",
        backgroundColor: "gray",
        border: "1px solid grey",
        borderRadius: "20px",
        overflow: "hidden",
        margin: '10px'
      }}
    >
      <div
        class="animation"
        style={{
        //   width: `${value}%`,
          transform: `translateX(${animatedValue-100}%)`,
          height: "100%",
          backgroundColor: "green",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <span style={{ textAlign: "center", paddingLeft: "10px" }}>
          {value}%
        </span>
      </div>
    </div>
  );
}

function ProgressBar() {
  const barData = [0,5, 10, 20, 30, 50, 90, 100];
  return (
    <div
      style={{ display: "flex", justifyContent: "center",flexDirection: 'column', marginTop: "30px" }}
    >
      {barData.map((value) => (
        <Progress key={value} value={value}/>
      ))}
    </div>
  );
}

export default ProgressBar;
