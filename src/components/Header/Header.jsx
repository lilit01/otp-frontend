import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Sidebar from "react-sidebar";
import { HamburgerCloseIcon } from '../icons/HamburgerCloseIcon';
import { HamburgerIcon } from '../icons/HamburgerIcon';
import { PhoneIcon } from '../icons/PhoneIcon'
import { WebsiteLogo } from '../icons/WebsiteLogo'
import LiveChat from '../LiveChat/LiveChat';
import './Header.scss'

const Header = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const [openChat, setOpenChat] = useState(false);


  const onSetSidebarOpen = (open) => {
    setSidebarOpen(open);
    if (sidebarOpen) {
      document
        .querySelector(".sidebar-root")
        .classList.remove("sidbar-container");
      document.querySelector("body").classList.remove("fixed");
    } else {
      document.querySelector(".sidebar-root").classList.add("sidbar-container");
      document.querySelector("body").classList.add("fixed");
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

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
                <p>503 8626399</p>
              </div>
              <p className='num'>24/7 Hotline</p>
            </div>
            <button className='live-btn' onClick={() => navigate("/livechat")}>LIVE CHAT</button>
          </div>
          <div className="mobile-menu">
            {
              location.pathname === '/' ?
              <LiveChat openChat={openChat} setOpenChat={setOpenChat}/>
              : null
            }
          <div
            className={`mobile-icon`}
            onClick={() => onSetSidebarOpen(true)}
          >
            <HamburgerIcon />
          </div>
          <Sidebar
            sidebar={
              <div className="sidbar-content">
                <div className='hamburger-header'>
                  <div className='empty' />
                  <div className='website-logo'>
                    <WebsiteLogo />
                  </div>
                  <div className='hamburger-close' onClick={() => onSetSidebarOpen(false)}>
                    <HamburgerCloseIcon />
                  </div>
                </div>
                <div className='nav-mobile'>
                  <div className='nav-item'>
                    <Link to={'/'}>HOME</Link>
                  </div>
                  <div className='nav-item multiple'>
                    <h3>oVERSIZE AND extended PERMITS</h3>
                    <Link to={'/oversize-and-overweight-permit'}>fOR oversize AND OVERWEIGHT PERMIT</Link>
                    <Link to={'/extended-permit'}>fOR EXTENDED PERMIT</Link>
                  </div>
                  <div className='nav-item'>
                    <Link to={'/'}>good to know</Link>
                  </div>
                  <div className='nav-item'>
                    <Link to={'/'}>Contact US</Link>
                  </div>
                  <div className='nav-item'>
                    <Link to={'/terms-and-conditions'}>Terms and conditions</Link>
                  </div>
                </div>
                <div className='phone-number'>
              <div className='number'>
                <PhoneIcon />
                <p>503 8626399</p>
              </div>
              <p className='num'>24/7 Hotline</p>
            </div>
              </div>
            }
            open={sidebarOpen}
            onSetOpen={onSetSidebarOpen}
            styles={{ sidebar: { background: "white" } }}
            rootClassName={"sidebar-root"}
            sidebarClassName={"sidebar"}
            contentClassName={"sidebar-content"}
            overlayClassName={"sidbar-overlay"}
            pullRight={true}
          >
            <button
              className="sidebar-action"
              onClick={() => onSetSidebarOpen(true)}
            ></button>
          </Sidebar>
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
