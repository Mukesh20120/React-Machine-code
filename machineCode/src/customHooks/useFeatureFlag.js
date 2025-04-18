import { useContext } from "react";
import { FeatureFlagContext } from "../context/FeatureFlagContext";

export const useFeatureFlag = (flag)=>{
    const flags = useContext(FeatureFlagContext);
    return flags[flag] || false;
}
