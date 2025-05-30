import React, { useState } from "react";
const radius = 50;

function GenerateRandomColor() {
  const letters = "0123456789ABCDEF";
  let newColor = "#";
  for (let i = 0; i < 6; i++) {
    newColor += letters[Math.floor(Math.random() * 16)];
  }
  return newColor;
}

function CircleUI({ backgroundColor, top, left }) {
  return (
    <div
      style={{
        height: `${radius * 2}px`,
        width: `${radius * 2}px`,
        borderRadius: "50%",
        backgroundColor,
        position: "absolute",
        top,
        left,
      }}
    ></div>
  );
}

function CheckOverlap(circle1, circle2) {
  const x1 = circle1.left;
  const y1 = circle1.top;
  const x2 = circle2.left;
  const y2 = circle2.top;

  const dist = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
  return dist <= radius * 2;
}

function OverlapCircleDetection() {
  const [circles, setCircles] = useState([]);

  const handleMouseClick = (e) => {
   
    const clickX = e.clientX ;
    const clickY = e.clientY;

    const newCircleCords = {
      left: clickX-radius,
      top: clickY-radius,
      backgroundColor: "red",
    };

    setCircles((prev) => {
      for (const item of prev) {
        if (CheckOverlap(item, newCircleCords)) {
          newCircleCords.backgroundColor = GenerateRandomColor();
          break;
        }
      }
      return [...prev, newCircleCords];
    });
  };

  return (
    <div
      className="h-screen w-screen relative"
      onClick={handleMouseClick}
    >
      {circles.map((circle, index) => (
        <CircleUI
          key={index}
          top={circle.top}
          backgroundColor={circle.backgroundColor}
          left={circle.left}
        />
      ))}
    </div>
  );
}

export default OverlapCircleDetection;
