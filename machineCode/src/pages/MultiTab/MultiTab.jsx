import React, { useState } from "react";
import Profile from "./Profile";
import Interest from "./Interest";
import Setting from "./Setting";

function MultiTab() {
  const [activeTab, setActiveTab] = useState(0);
  const [state, setState] = useState({
    profile: { name: "", age: "", email: "" },
    interest: [],
    setting: [],
  });

  const tabConfig = [
    { name: "Profile", component: Profile },
    { name: "Interest", component: Interest },
    { name: "Setting", component: Setting },
  ];
  const validateProfile = () => {
    const { name, age, email } = state.profile;
    if (!name || !age || !email) {
      alert("Please fill all the field");
      return false;
    }
    return true;
  };
  const validateInterest = () => {
    const interest = state.interest;
    if (interest.length <= 0) {
      alert("Please select at least on interest.");
      return false;
    }
    return true;
  };
  const validateSetting = () => {
    const setting = state.setting;
    if (setting.length <= 0) {
      alert("Please select at least on setting.");
      return false;
    }
    return true;
  };
  const allFunctions = [validateProfile, validateInterest, validateSetting];
  const CurrentActiveTab = tabConfig[activeTab].component;
  return (
    <div>
      <div className="bg-gray-200 h-15 flex justify-center items-center gap-4">
        {tabConfig.map((tab, index) => (
          <div
            className=" border border-black hover:bg-white cursor-pointer rounded-2xl px-4 py-2"
            key={tab.name}
            onClick={() => {
              setActiveTab(index);
            }}
          >
            {tab.name}
          </div>
        ))}
      </div>
      <div className="h-100 w-full border">
        <CurrentActiveTab state={state} setState={setState} />
      </div>
      <div className=" text-center">
        <div className=" my-2">
          <button
            className=" px-4 py-2 mx-2 bg-green-400 rounded-2xl font-bold hover:bg-green-900"
            onClick={() => {
              setActiveTab((prev) => (prev === 0 ? 0 : prev - 1));
            }}
          >
            Prev
          </button>
          <button
            className=" px-4 py-2 mx-2 bg-green-400 rounded-2xl font-bold hover:bg-green-900"
            onClick={() => {
              if (allFunctions[activeTab]()) {
                setActiveTab((prev) =>
                  prev === tabConfig.length - 1 ? prev : prev + 1
                );
              }
            }}
          >
            Next
          </button>
        </div>
        <div>
          <button className=" px-4 py-2 mx-2 bg-green-400 rounded-2xl font-bold hover:bg-green-900" onClick={()=>{
            for(let fun of allFunctions){
                if(!fun()){
                    alert('Something went wrong')
                }
            }
            console.log('submit successfully',state);
          }}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default MultiTab;
