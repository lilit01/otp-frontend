import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import LiveChat from '../LiveChat/LiveChat'
import './Homepage.scss'

const Homepage = () => {
  const [openChat, setOpenChat] = useState(false)
  const navigate = useNavigate();

  return (
    <div className='homepage-container'>
      <div className='container'>
        <div className='temporary-permit-form'>
          <div className='form-header'>
            <h3 className='form-title'>ISSUE A TEMPORARY PERMIT</h3>
            <p className='form-desc'>(Temporary permits valid for 10 days)</p>
          </div>
          <div className='form-content'>
            <div className='inputs'>
            <div className='input-group'>
              <label htmlFor='usdot'>Your USDOT#:</label>
              <input id='usdot' />
            </div>
            <div className='input-group'>
              <label htmlFor='start-date'>Permit starting date:</label>
              <input id='start-date' />
            </div>
            <div className='input-group'>
              <label htmlFor='lb-name'>local business name:</label>
              <input id='lb-name' />
            </div>
            <div className='input-group'>
              <label htmlFor='email'>Email adress:</label>
              <input id='email' />
            </div>
            <div className='input-group'>
              <label htmlFor='phone-num'>phone number:</label>
              <input id='phone-num' />
            </div>
            </div>
            <button className='primary' onClick={()=> navigate('/permit')}>SEND</button>
          </div>
        </div>
      </div>
      <LiveChat openChat={openChat} setOpenChat={setOpenChat}/>
    </div>
  )
}

export default Homepage
