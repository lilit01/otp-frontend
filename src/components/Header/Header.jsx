import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
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
            <button className='live-btn'>LIVE CHAT</button>
          </div>
        </div>
        <div className='navbar'>
          <ul className='nav-list'>
            <li className='nav-item'> <Link to={'/'}>HOME</Link> </li>
            <li className='nav-item permit-dropdown-btn'>
              <div>
                OVERSIZE AND OVERWEIGHT PERMITS
                <div className='dropdown'>
                  <div>
                    <Link to={'/oversize-and-overweight-permit'} >FOR OVERSIZE AND OVERWEIGHT PERMIT</Link>
                  </div>
                  <div>
                    <Link to={'/extended-permit'} >FOR EXTENDED PERMIT</Link>
                  </div>
                </div>
              </div>
            </li>
            <li className='nav-item'>good to know</li>
            <li className='nav-item'>CONTACT US</li>
            <li className='nav-item'> <Link to={'/terms-and-conditions'} >Terms and conditions</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
