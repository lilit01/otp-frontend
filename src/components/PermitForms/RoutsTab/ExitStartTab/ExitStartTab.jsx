import React, { useState } from 'react'
import Select from 'react-select';
import { PlusIcon } from '../../../icons/PlusIcon';
import { RemoveIcon } from '../../../icons/RemoveIcon';
import { DistanceIcon } from '../../../icons/DistanceIcon';
import { MinusIcon } from '../../../icons/MinusIcon';
import { CalculatorIcon } from '../../../icons/CalculatorIcon';

const ExitStartTab = () => {
 
  const [showFWY, setShowFWY] =useState(false)
  const [showDistance, setShowDistance] =useState(false)
  const [calcualePrice, setCalcualePrice] = useState(false)

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  return (
    <div className='entering-tab'>
      <h3 className='title'>Exiting from Oregon</h3>
      <div className='trip-radios'>
        <label>
          <input type={'radio'} />
         <span> Round trip</span>
        </label>
        <label>
          <input type={'radio'} />
          <span>
          One way trip
          </span>
        </label>
      </div>
      <div className='form-input'>
          <label>Start point:</label>
          <input placeholder='CIty or zip code'/>
          <span className='error-text'></span>
        </div>
      <div className='steps-area'>
        <h3 className='title'>Stops</h3>
        <div className='form-input'>
          <label>1 location in Oregon:</label>
          <div className='trip-radios'>
          <label>
            <input type={'radio'} />
          <span>Delivery</span>
          </label>
          <label>
            <input type={'radio'} />
            <span>Pick up</span>
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
      <div className={`fwy-and-distance  ${showFWY && showDistance ? 'show' : !showFWY && showDistance ? 'show-d' : showFWY && !showDistance ? 'show-f' : ''}`}>
        {
          showDistance ? 
          <div className='colculate'>
            <button className='calculate-btn primary'onClick={()=> setCalcualePrice(!calcualePrice)} >  CALCULATE <CalculatorIcon /></button>
            {
              calcualePrice ? 
              <div className='miles-price'>
                <div className='miles'>
                  <span className='title'>Total miles: </span>
                  <span className='total'>722 mi</span>
                </div>
                <p className='price'>$149.51</p>
              </div>
              : null
            }
          </div>
          : 
          null
        }
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
      <div className='fwy-action'>
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
    </div>
  )
}

export default ExitStartTab
