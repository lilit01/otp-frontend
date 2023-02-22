import React, { useState } from 'react'
import { EnterenceIcon } from '../../icons/EnterenceIcon'
import { WayIcon } from '../../icons/WayIcon'
import EnteringTab from './EnteringTab/EnteringTab';
import ExitStartTab from './ExitStartTab/ExitStartTab';
import './RoutsTab.scss';

const RoutsTab = ({setStep}) => {
  const [selectedTab , setSelectedTab] = useState("tabs");
  const goBack = () => {
    if(selectedTab === "tabs") {
      setStep(2)
    } else {
      setSelectedTab("tabs")
    }
  }
  return (
    <div className='routes-container'>
      {selectedTab === "tabs" && <h3 className='routes-title'>Please select from below</h3> }
      {
        selectedTab === "tabs" ? 
          <div className='content'>
            <div className='entering-oregon' aria-hidden onClick={()=>setSelectedTab('entering')}>
              <EnterenceIcon />
              <h3 className='title'>ENTERING OREGON</h3>
            </div>
            <div className='exit-from' aria-hidden onClick={()=>setSelectedTab('start')}>
              <WayIcon />
              <h3 className='title'>EXITING OREGON</h3>
            </div>
          </div>
        : selectedTab === "entering" ? 
          <EnteringTab />
        :
       <ExitStartTab />
      }
      <div className='actions'>
        <button className='secondary' onClick={goBack}>BACK</button>
        <button className='primary' onClick={()=> setStep(4)}>NEXT</button>
      </div>
    </div>
  )
}

export default RoutsTab
