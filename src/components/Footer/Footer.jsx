import React from 'react'
import { Link } from 'react-router-dom'
import { PhoneIcon } from '../icons/PhoneIcon'
import { WebsiteLogo } from '../icons/WebsiteLogo'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='website-logo'>
          <WebsiteLogo />
          <div className='website-number'>
            <p className='number'> <PhoneIcon /> 503 8626399</p>
            <p className='info'>24/7 Hotline</p>
          </div>
        </div>
        <div className='navigation'>
          <div className='link'>
            <Link to={'/'} >Home</Link>
          </div>
          <div className='link'>
            <h3 > OVERSIZE AND extended PERMITS</h3>
            <Link to={'/oversize-and-overweight-permit'} >fOR oversize AND OVERWEIGHT PERMIT</Link>
            <Link to={'/extended-permit'} >fOR EXTENDED PERMIT</Link>
          </div>
          <div className='link'>
            <Link to={'/'} >good to know</Link>
          </div>
          <div className='link'>
            <Link to={'/'} >Contact US</Link>
          </div>
          <div className='link'>
            <Link to={'/terms-and-conditions'} >Terms and conditions</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
