import React, { useState, useRef } from "react";

function GenerateRandomColor() {
  const letters = "0123456789ABCDEF";
  let newColor = "#";
  for (let i = 0; i < 6; i++) {
    newColor += letters[Math.floor(Math.random() * 16)];
  }
  return newColor;
}

function CircleUI({ backgroundColor, top, left, radius }) {
  return (
    <div
      style={{
        height: `${radius * 2}px`,
        width: `${radius * 2}px`,
        borderRadius: "50%",
        backgroundColor,
        position: "absolute",
        top: top - radius,
        left: left - radius,
        transition: "height 0.05s, width 0.05s", // smoother growth
      }}
    ></div>
  );
}

function GrowingCircleOverlapDetection() {
  const [circles, setCircles] = useState([]);
  const [currentCircle, setCurrentCircle] = useState(null);
  const intervalRef = useRef(null);

  const handleMouseDown = (e) => {
    const containerRect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - containerRect.left;
    const clickY = e.clientY - containerRect.top;

    const newCircle = {
      left: clickX,
      top: clickY,
      radius: 0,
      backgroundColor: "red",
    };

    setCurrentCircle(newCircle);

    // start growing the circle
    intervalRef.current = setInterval(() => {
      setCurrentCircle((prev) =>
        prev ? { ...prev, radius: prev.radius + 2 } : null
      );
    }, 16); // ~60fps
  };

  const handleMouseUp = () => {
    if (currentCircle) {
      const newCircle = {
        ...currentCircle,
        backgroundColor: GenerateRandomColor(),
      };
      setCircles((prev) => [...prev, newCircle]);
      setCurrentCircle(null);
      clearInterval(intervalRef.current);
    }
  };

  return (
    <div
      className="h-screen w-screen"
      style={{ position: "relative" }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {circles.map((circle, index) => (
        <CircleUI
          key={index}
          top={circle.top}
          left={circle.left}
          backgroundColor={circle.backgroundColor}
          radius={circle.radius}
        />
      ))}
      {currentCircle && (
        <CircleUI
          top={currentCircle.top}
          left={currentCircle.left}
          backgroundColor={currentCircle.backgroundColor}
          radius={currentCircle.radius}
        />
      )}
    </div>
  );
}

export default GrowingCircleOverlapDetection;
