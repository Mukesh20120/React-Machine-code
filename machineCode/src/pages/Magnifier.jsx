import React, { useRef, useState } from "react";
import smallImage from "../assets/small.jpg";
import largeImage from "../assets/large.jpg";
import small from "../assets/small.jpg";
import large from "../assets/large.jpg";

function Magnifier({zoomMultiplier=3,lensDiameter=100}) {
  const imageRef = useRef();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLensVisible, setIsLensVisible] = useState(false);

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



export  function Maginifer2() {
  const [show, setShow] = useState(false);
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });
  const imageRef = useRef();
  const zoomfactor = 2;
  const onMouseMove = (event) => {
    if (!imageRef.current) return;
    const { left, top, height, width } =
      imageRef.current.getBoundingClientRect();
    let x = event.clientX - left;
    let y = event.clientY - top;

    x = Math.max(0, Math.min(x, width));
    y = Math.max(0, Math.min(y, height));
    setMouseCoords({ x, y });
  };
  return (
    <div
      onMouseEnter={() => {
        setShow(true);
      }}
      onMouseLeave={() => {
        setShow(false);
      }}
      onMouseMove={onMouseMove}
      style={{
        backgroundColor: "yellow",
        display: "inline-block",
        position: "relative",
      }}
    >
      <img ref={imageRef} src={small} />
      {show && (
        <div
          style={{
            position: "absolute",
            top: mouseCoords.y - 50,
            left: mouseCoords.x - 50,
            height: "100px",
            width: "100px",
            borderRadius: "50%",
            backgroundImage: `url(${large})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: `${imageRef.current.clientWidth * zoomfactor}px ${
              imageRef.current.clientHeight * zoomfactor
            }px`,
            backgroundPosition: `-${Math.max(
              0,
              mouseCoords.x * zoomfactor - 50
            )}px -${Math.max(0, mouseCoords.y * zoomfactor - 50)}px`,
          }}
        />
      )}
    </div>
  );
}
