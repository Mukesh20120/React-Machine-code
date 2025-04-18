import React, { useEffect, useRef, useState } from "react";

function CheckOutStepper({ stepperData = [] }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [completed, setCompleted] = useState(false);
  const [margins, setMargins] = useState({ marginLeft: 0, marginRight: 0 });
  const stepRef = useRef([]);

  useEffect(() => {
    // Delay measuring to ensure DOM is ready
    const timer = setTimeout(() => {
      const left = stepRef.current[0]?.offsetWidth || 0;
      const right = stepRef.current[stepperData.length - 1]?.offsetWidth || 0;

      setMargins({
        marginLeft: left / 2,
        marginRight: right / 2,
      });
    }, 0);

    return () => clearTimeout(timer);
  }, [stepperData.length]);

  const handleNext = () => {
    setCurrentStep((prev) => {
      if (prev < stepperData.length) return prev + 1;
      else {
        setCompleted(true);
        return prev;
      }
    });
  };

  const calculateProgressBarWidth = () => {
    if (stepperData.length <= 1) return 0;
    return ((currentStep - 1) / (stepperData.length - 1)) * 100;
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          position: "relative",
          marginBottom: "40px",
        }}
      >
        {/* Progress Bar (Background + Active) */}
        <div
          style={{
            position: "absolute",
            width: `calc(100% - ${margins.marginLeft + margins.marginRight}px)`,
            top: "22%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
          }}
        >
          <div
            style={{
              width: "100%",
              height: "8px",
              backgroundColor: "#e0e0e0",
              borderRadius: "4px",
              position: "relative",
            }}
          >
            <div
              style={{
                width: `${calculateProgressBarWidth()}%`,
                height: "100%",
                backgroundColor: "green",
                borderRadius: "4px",
                transition: "width 0.3s ease",
              }}
            />
          </div>
        </div>

        {/* Step Circles */}
        {stepperData.map((step, index) => (
          <div
            key={step?.name}
            ref={(el) => (stepRef.current[index] = el)}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              zIndex: 2,
              flex: 1,
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "30px",
                width: "30px",
                backgroundColor:
                  index + 1 < currentStep
                    ? "green"
                    : index + 1 === currentStep
                    ? "blue"
                    : "gray",
                color: "white",
                borderRadius: "50%",
              }}
            >
              <span style={{ fontWeight: "bold" }}>
                {currentStep > index + 1 || completed ? "✓" : index + 1}
              </span>
            </div>
            <p style={{ fontSize: "14px", marginTop: "8px" }}>{step?.name}</p>
          </div>
        ))}
      </div>

      {/* Navigation Button */}
      <div style={{ textAlign: "center" }}>
        {!completed && (
          <button
            onClick={handleNext}
            style={{
              padding: "10px 20px",
              backgroundColor: "blue",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Next
          </button>
        )}
        {completed && <p>🎉 All steps completed!</p>}
      </div>
    </>
  );
}

export default CheckOutStepper;
