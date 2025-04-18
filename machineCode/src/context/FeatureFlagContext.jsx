import React, { createContext } from "react";

export const FeatureFlagContext = createContext({});

export const FeatureFlagProvider = ({flags,children})=>{
    return <FeatureFlagContext.Provider value={flags}>
        {children}
    </FeatureFlagContext.Provider>
}


