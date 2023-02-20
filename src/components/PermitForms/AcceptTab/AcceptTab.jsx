import React, { useState } from 'react'
import { DeclinedIcon } from '../../icons/DeclinedIcon'
import { SuccessIcon } from '../../icons/SuccessIcon'
import './AcceptTab.scss'

const AcceptTab = ({setStep}) => {
  const [success] = useState(true)
  return (
    <div className='accept-tab'>
      {
        success ? 
        <div className='successed'>
          <div className='content'>
            <h3 className='title'>Your payment has been successfully received.</h3>
            <SuccessIcon />
            <h3 className='check-email'>Please check your email.</h3>
          </div>
          <button className='primary' onClick={()=> setStep(5)}>FINISH</button>
        </div>
        :
        <div className='declined'>
          <div className='content'>
            <h3 className='title'>Your payment has been successfully received.</h3>
            <DeclinedIcon />
          </div>
          <div className='actions'>
            <button className='secondary'>BACK</button>
            <button className='primary' disabled >NEXT</button>
        </div>
        </div>
      }
    </div>
  )
}

export default AcceptTab
