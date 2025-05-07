import React from "react";
import InfiniteScroll from "./pages/InfiniteScroll";
import CustomSwitchCase from "./pages/CustomSwitchCase";
import FeatureFlag from "./pages/FeatureFlag";
import Stepper from "./pages/Stepper";
import Board from "./pages/Board";
import SearchAndAutoComplete from "./pages/SearchAndAutoComplete";
import ProgressBar from "./pages/ProgressBar";
import OTP from "./pages/OTP";
import ImageSlider from "./pages/ImageSlider";
// import { imageSliderData } from "./utils/DummyData";
import OverlapCircleDetection from "./pages/OverlapCircleDetection";
import GrowingCircleOverlapDetection from "./pages/GrowingCircleOverlapDetection";
import DragCircleOverlapDetection from "./pages/DragCircleOverlapDetection";
import TextHighLight from "./pages/TextHighLight/TextHighLight";
import MultiTab from "./pages/MultiTab/MultiTab";
import ToggleComponent from "./hooks/UseToggle/ToggleComponent";
import UpdateEffectComponent from "./hooks/UseUpdateEffect/UpdateEffectComponent";
import ArrayComponent from "./hooks/UseArray/ArrayComponent";
import PreviousComponent from "./hooks/UsePrevious/PreviousComponent";
import StorageComponent from "./hooks/UseStorage/StorageComponent";
import AsyncComponent from "./hooks/UseAsync/AsyncComponent";
import FetchComponent from "./hooks/UseFetch/FetchComponent";
import EventHandlerComponent from "./hooks/UseEventHandler/EventHandlerComponent";
import WindowSizeComponent from "./hooks/UseWindowSize/WindowSizeComponent";
import ModalComponent from "./hooks/UseModal/ModalComponent";
import StateWithValidationComponent from "./hooks/UseStateWithValidation/StateWithValidationComponent";
import SizeComponent from "./hooks/UseSize/SizeComponent";
import MediaQueryComponent from "./hooks/UseMediaQuery/MediaQueryComponent";
import GeolocationComponent from "./hooks/UseGeolocation/GeolocationComponent";
import UseClickOutsideComponent from "./hooks/UseClickOutside/UseClickOutsideComponent";
import ClickOutsideComponent from "./hooks/UseClickOutside/UseClickOutsideComponent";
import Magnifier from "./pages/Magnifier";

function App() {
  return (
    <div className="h-screen">
      {/* <InfiniteScroll />
      <CustomSwitchCase />
       <FeatureFlag />
       <Stepper /> */}
      {/* <Board /> */}
      {/* <SearchAndAutoComplete/> */}
      {/* <ProgressBar/> */}
      {/* <OTP/> */}
      {/* <ImageSlider imageArray={imageSliderData}/> */}
      {/* <OverlapCircleDetection /> */}
      {/* <GrowingCircleOverlapDetection/> */}
      {/* <DragCircleOverlapDetection/> */}
      {/* <TextHighLight/> */}
      {/* <MultiTab/> */}
      {/* <ToggleComponent/> */}
      {/* <UpdateEffectComponent/> */}
      {/* <ArrayComponent/> */}
      {/* <PreviousComponent/> */}
      {/* <StorageComponent/> */}
      {/* <AsyncComponent/> */}
      {/* <FetchComponent/> */}
      {/* <EventHandlerComponent/> */}
      {/* <WindowSizeComponent/> */}
      {/* <ModalComponent/> */}
      {/* <StateWithValidationComponent/> */}
      {/* <SizeComponent/> */}
      {/* <MediaQueryComponent/> */}
      {/* <GeolocationComponent/> */}
      {/* <ClickOutsideComponent/> */}
      <div className=" flex justify-center items-center h-screen">
        <Magnifier zoomMultiplier={10} lensDiameter={300} />
      </div>
    </div>
  );
}

export default App;
