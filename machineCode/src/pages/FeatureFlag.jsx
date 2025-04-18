import React from 'react'
import { FeatureFlagProvider } from '../context/FeatureFlagContext'
import { useFeatureFlag } from '../customHooks/useFeatureFlag';

function NewDashboard(){
    return <>New DashBoard</>
}
function Dashboard(){
    return <>DashBoard</>
}

function Home(){
    const isNewDashboardEnable = useFeatureFlag('newDashboard');
    return <>
    <Dashboard/>
    {isNewDashboardEnable && <NewDashboard/>}
    </>
}

const flags = {
    newDashboard: false,
    Dashboard: true
}

function FeatureFlag() {
  return (
    <FeatureFlagProvider flags={flags}>
      <Home/>
    </FeatureFlagProvider>
  )
}

export default FeatureFlag
