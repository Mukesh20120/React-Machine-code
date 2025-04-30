import React, {  useState } from "react";
import useEventHander from "../UseEventHandler/useEventHander";

function useWindowSize() {
  const [windowDimension, setWindowDimension] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  useEventHander("resize", () => {
    setWindowDimension({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  });
  return windowDimension;
}

export default useWindowSize;
