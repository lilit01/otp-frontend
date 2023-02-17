import React, { useState } from 'react'
import './EnteringTab.scss';
import Select from 'react-select';
import { PlusIcon } from '../../../icons/PlusIcon';
import { RemoveIcon } from '../../../icons/RemoveIcon';
import { DistanceIcon } from '../../../icons/DistanceIcon';
import { MinusIcon } from '../../../icons/MinusIcon';

const EnteringTab = () => {

  const [showFWY, setShowFWY] =useState(false)
  const [showDistance, setShowDistance] =useState(false)

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  return (
    <div className='entering-tab'>
      <h3 className='title'>Entering Oregon</h3>
      <div className='trip-radios'>
        <label>
          <input type={'radio'} />
         <span> Round Trip</span>
        </label>
        <label>
          <input type={'radio'} />
          <span>
          One Way Trip
          </span>
        </label>
      </div>
      <div className='form-select form-input'>
          <label>Entrance point:</label>
          <Select
            className="basic-single select"
            classNamePrefix="select"
            isSearchable={false}
            placeholder={"Select One"}
            options={options}
          />
          <span className='error-text'></span>
      </div>
      <div className='steps-area'>
        <h3 className='title'>Stops</h3>
        <div className='form-input'>
          <label>1 Location in Oregon:</label>
          <div className='trip-radios'>
          <label>
            <input type={'radio'} />
          <span>Delivery</span>
          </label>
          <label>
            <input type={'radio'} />
            <span>Pick Up</span>
          </label>
          </div>
          <div className='form-group'>
            <input placeholder='CIty or zip code' />
            <button className='add-btn'><PlusIcon /></button>
            <button className='add-btn'><RemoveIcon /></button>
          </div>
          <span className='error-text'></span>
        </div>
      </div>
      <div className={`fwy-and-distance  ${showFWY && showDistance ? 'show' : !showFWY && showDistance ? 'show-d' : ''}`}>
        <div className='distance-area'>
          <button className='distance-btn' onClick={()=>setShowDistance(true)}>yOUR distance <DistanceIcon /> </button>
          {
            showDistance ? 
          <div className='distance'>
            <p className='title'> Total miles</p>
            <p className='miles'>361 MI</p>
          </div>
          : 
          null
          }
        </div>
        <div className='fwy-point'>
        <div className={`form-select form-input `}>
          <Select
            className="basic-single select"
            classNamePrefix="select"
            isSearchable={false}
            placeholder={"Select One"}
            options={options}
          />
          <span className='error-text'></span>
      </div>
          <span className='name'>  {
              !showFWY ? 
              'Add'
              :
              'Remove'
            } Exit/FWY Point</span>
          <button className='add-btn' onClick={()=> setShowFWY(!showFWY)}>
            {
              !showFWY ? 
              <PlusIcon />
              :
              <MinusIcon />
            }
            </button>
        </div>
      </div>
    </div>
  )
}

export default EnteringTab
