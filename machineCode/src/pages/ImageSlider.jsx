import React, { useState } from "react";
import "../css/ImageSlider.css";

function ImageSlider({ imageArray }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOnClickPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? imageArray.length - 1 : prev - 1
    );
  };

  const handleOnClickNext = () => {
    setCurrentIndex((prev) =>
      prev === imageArray.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="slider-container">
      <div
        className="slider-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {imageArray.map((imageObj) => (
          <img
            className="slider-image"
            src={imageObj.url}
            alt=""
            key={imageObj.url}
          />
        ))}
      </div>
      <button onClick={handleOnClickPrev} className="image-slider-btn-left">
        Prev
      </button>
      <button onClick={handleOnClickNext} className="image-slider-btn-right">
        Next
      </button>
    </div>
  );
}

export default ImageSlider;
