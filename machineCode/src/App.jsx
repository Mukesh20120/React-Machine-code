import React from "react";
import InfiniteScroll from "./pages/InfiniteScroll";
import CustomSwitchCase from "./pages/CustomSwitchCase";
import FeatureFlag from "./pages/FeatureFlag";
import Stepper from "./pages/Stepper";
import Board from "./pages/Board";

function App() {
  return (
    <div className="h-screen">
      {/* <InfiniteScroll />
      <CustomSwitchCase />
       <FeatureFlag />
       <Stepper /> */}
     
        <Board />
      </div>
  );
}

export default App;
