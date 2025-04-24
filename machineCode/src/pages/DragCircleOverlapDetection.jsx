import React, { useState } from "react";

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
        pointerEvents: "none",
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
  return dist <= circle1.radius + circle2.radius;
}

function DragCircleOverlapDetection() {
  const [circles, setCircles] = useState([]);
  const [currentCircle, setCurrentCircle] = useState(null);

  const handleMouseDown = (e) => {
    const startX = e.clientX;
    const startY = e.clientY;
    setCurrentCircle({
      left: startX,
      top: startY,
      radius: 0,
      backgroundColor: "red",
    });
  };

  const handleMouseMove = (e) => {
    if (currentCircle) {
      const moveX = e.clientX;
      const moveY = e.clientY;

      const dx = moveX - currentCircle.left;
      const dy = moveY - currentCircle.top;
      const newRadius = Math.sqrt(dx * dx + dy * dy);

      setCurrentCircle({
        ...currentCircle,
        radius: newRadius,
      });
    }
  };

  const handleMouseUp = () => {
    if (currentCircle && currentCircle.radius > 5) {
      let newCircle = { ...currentCircle };

      for (const item of circles) {
        if (CheckOverlap(item, newCircle)) {
          newCircle.backgroundColor = GenerateRandomColor();
          break;
        }
      }

      setCircles((prev) => [...prev, newCircle]);
    }
    setCurrentCircle(null);
  };

  return (
    <div
      className="h-screen w-screen relative overflow-hidden"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {circles.map((circle, index) => (
        <CircleUI
          key={index}
          top={circle.top}
          left={circle.left}
          radius={circle.radius}
          backgroundColor={circle.backgroundColor}
        />
      ))}
      {currentCircle && (
        <CircleUI
          top={currentCircle.top}
          left={currentCircle.left}
          radius={currentCircle.radius}
          backgroundColor={currentCircle.backgroundColor}
        />
      )}
    </div>
  );
}

export default DragCircleOverlapDetection;
