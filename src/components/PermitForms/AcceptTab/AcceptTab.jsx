import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DeclinedIcon } from '../../icons/DeclinedIcon'
import { SuccessIcon } from '../../icons/SuccessIcon'
import Loader from '../../Loader/Loader'
import './AcceptTab.scss'

const AcceptTab = ({setStep}) => {
  const navigate = useNavigate()
  const [success] = useState(true)
  const [load, setLoad] = useState(true);

  useEffect(()=> {
    setTimeout(()=> {
      setLoad(false)
    },3000)
  },[])
  return (
    <>
    {load ?
    <div className='loader-section'>
      <Loader />
    </div>
    :
    <div className='accept-tab'>
      {
        success ? 
        <div className='successed'>
          <div className='content'>
            <h3 className='title'>Your payment has been successfully received.</h3>
            <SuccessIcon />
            <h3 className='check-email'>Please check your email.</h3>
          </div>
          <button className='primary' onClick={()=> navigate('/') }>FINISH</button>
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
  }
    </>
  )
}

export default AcceptTab
