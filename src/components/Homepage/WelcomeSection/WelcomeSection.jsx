import React from 'react'
import './WelcomeSection.scss';
import mapImg from '../../../assets/images/map.svg';

const WelcomeSection = () => {
  return (
    <div className='welcome-section'>
      <div className='container'>
        <div className='welcome-header'>
          <h3 className='title'>Welcome to Oregon Pass and Fuel Permit</h3>
          <p className='desc'>You may issue your own permit by submitting your company and truck information online and get your permit(s) issued and sent to your email within the next 30 minutes.</p>
        </div>
        <div className='welcome-body'>
          <div className='map-img'>
            <img src={mapImg} alt='map' />
          </div>
          <div className='required-info'>
            <h3 className='subtitle'>You may find the list of information required for your permits below:</h3>
            <ul className='list'>
              <li>Driver(s)’s name(s)</li>
              <li>Your USDOT/MC/CCD number</li>
              <li>Company name, phone number and email address</li>
              <li>Truck year, make, Vin number, License plate number, issue state, Unit number, Registered weight and the commodity.</li>
              <li>Exact dates of your trip in Oregon (because the pass and fuel permits are valid for 10 days only and they can be issued not more than 4 days prior the due date)</li>
            </ul>
          </div>
          <div className='welcom-descs'>
            <p>The most important part is to know exactly how you are going to enter the state and how you will be exiting. Also if you have any stops for delivery or pickup, please provide the names of the cities or zip codes. Zip codes are mandatory for the cities of Portland and Eugene. If you’re not sure how you will exit the state because you don’t have another load yet, you may apply for a one way permit from the port of entry to a certain city. After that once you have more information on your route, please do not forget to apply for another one way permit out.</p>
            <p>You may call us at <b>503 8626399</b> or turn to the live chat support which is available 24/7. Our analysts are always there for you to help you out if you have any difficulties.</p>  
            <p>You may also apply online during non-working hours and we will surely get in touch with you as soon as we can.</p>
            <p>In case you need permanent permits, please contact us via phone or live chat. Thank you and have a safe trip.</p>
            <p>Our working hours start from 5:00 am to midnight every day except National Holidays.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WelcomeSection
