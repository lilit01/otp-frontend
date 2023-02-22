import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PhoneIcon } from '../icons/PhoneIcon'
import { WebsiteLogo } from '../icons/WebsiteLogo'
import './Header.scss'

const Header = () => {
  const navigate = useNavigate()
  return (
    <div className='header'>
      <div className='container'>
        <div className='main-header'>
          <div className='website-logo'>
            <WebsiteLogo />
          </div>
          <div className='details'>
            <div className='phone-number'>
              <div className='number'>
                <PhoneIcon />
                <p>503 00000000</p>
              </div>
              <p className='num'>24/7 Hotline</p>
            </div>
            <button className='live-btn' onClick={() => navigate("/livechat")}>LIVE CHAT</button>
          </div>
        </div>
        <div className='navbar'>
          <ul className='nav-list'>
            <li className='nav-item'>HOME</li>
            <li className='nav-item'>OVERSIZE AND OVERWEIGHT PERMITS</li>
            <li className='nav-item'>good to know</li>
            <li className='nav-item'>CONTACT US</li>
            <li className='nav-item'>Terms and conditions</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
