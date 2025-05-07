import React, { useRef, useState } from "react";
import smallImage from "../assets/small.jpg";
import largeImage from "../assets/large.jpg";

function Magnifier({zoomMultiplier=3,lensDiameter=100}) {
  const imageRef = useRef();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLensVisible, setIsLensVisible] = useState(false);

  /**
   * Handles mouse movement inside the image area
   * Calculates mouse position relative to the image
   * Clamps values so the lens doesn't go outside
   */
  const handleMouseMove = (event) => {
    if (!imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;

    // Keep the lens inside the image boundaries
    x = Math.max(0, Math.min(x, rect.width));
    y = Math.max(0, Math.min(y, rect.height));

    setMousePosition({ x, y });
  };

  return (
    <div
      style={{ position: "relative", display: "inline-block" }}
      onMouseEnter={() => setIsLensVisible(true)}
      onMouseLeave={() => setIsLensVisible(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Small image */}
      <img
        ref={imageRef}
        src={smallImage}
        alt="Product Preview"
        style={{ width: "400px" }}
      />

      {/* Magnifier lens */}
      {isLensVisible && imageRef.current && (
        <div
          style={{
            position: "absolute",
            top: mousePosition.y - lensDiameter / 2,
            left: mousePosition.x - lensDiameter / 2,
            width: lensDiameter,
            height: lensDiameter,
            borderRadius: "50%",
            border: "2px solid black",
            backgroundImage: `url(${largeImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: `${imageRef.current.clientWidth * zoomMultiplier}px ${imageRef.current.clientHeight * zoomMultiplier}px`,
            backgroundPosition: `-${mousePosition.x * zoomMultiplier - lensDiameter / 2}px -${mousePosition.y * zoomMultiplier - lensDiameter / 2}px`,
            pointerEvents: "none",
            zIndex: 10
          }}
        />
      )}
    </div>
  );
}

export default Magnifier;
