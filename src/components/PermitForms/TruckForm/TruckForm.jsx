import React, { useState } from 'react'
import './TruckForm.scss'
import Select from 'react-select';

const TruckForm = ({setStep}) => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  const [isApportioned, setIsApportioned] = useState(true)
  const apportionedWithOregon = [
    { value: true, label: 'Yes' },
    { value: false, label: 'No' },
  ]

 const handleChange = (selectedOption) => {
   setIsApportioned(selectedOption.value)
  };

  return (
    <div className='truck-form'>
      <div className='form-input driver-name'>
        <label>Name of driver:</label>
        <input />
        <span className='error-text'></span>
      </div>
        <p className='form-name'>Truck Info</p>

      <div className='truck-info-form'>
        <div className='small-inputs'>
          <div className='form-input'>
            <label>Year:</label>
            <input />
            <span className='error-text'></span>
          </div>
          <div className='form-input'>
            <label>Make:</label>
            <input />
            <span className='error-text'></span>
          </div>
        </div>
        <div className='form-input'>
          <label>Unit#:</label>
          <input />
          <span className='error-text'></span>
        </div>
        <div className='form-input'>
          <label>Full VIN#:</label>
          <input />
          <span className='error-text'></span>
        </div>
        <div className='form-input'>
          <label>License plate Number:</label>
          <input />
          <span className='error-text'></span>
        </div>
        <div className='form-select form-input'>
          <label>License plate Issue state:</label>
          <Select
            className="basic-single select"
            classNamePrefix="select"
            isSearchable={false}
            placeholder={"Select One"}
            options={options}
          />
          <span className='error-text'></span>
        </div>
        <div className='form-select form-input'>
            <label>Is your truck apportioned with Oregon?</label>
          <div className='form-group'>
            <Select
              className="basic-single select"
              classNamePrefix="select"
              isSearchable={false}
              placeholder={"Select One"}
              options={apportionedWithOregon}
              onChange={handleChange}
            />
            <span className='error-text'></span>
          {!isApportioned ? 
          <div className='money-box'>
            50$
          </div>
          : null
          }
          </div>
        </div>
        <div className='form-select form-input'>
          <label>What is your registered weight with Oregon?</label>
          <Select
            className="basic-single select"
            classNamePrefix="select"
            isSearchable={false}
            placeholder={"Select One"}
            options={options}
          />
          <span className='error-text'></span>
        </div>
        {!isApportioned ? 
           <div className='form-input'>
           <label>How many axels do you have?</label>
           <input />
           <span className='error-text'></span>
         </div>
          : null
          }
        <div className={`form-select form-input ${!isApportioned ? 'new-position' : null}`}>
          <label>Truck is purchased by the company or leased?</label>
          <Select
            className="basic-single select"
            classNamePrefix="select"
            isSearchable={false}
            placeholder={"Select One"}
            options={options}
          />
          <span className='error-text'></span>
        </div>
        <div className='form-input'>
          <label>What is your Commodity?</label>
          <input />
          <span className='error-text'></span>
        </div>
      </div>
      <div className='actions'>
        <button className='secondary'>BACK</button>
        <button className='primary' onClick={()=> setStep(3)}>NEXT</button>
      </div>
    </div>
  )
}

export default TruckForm
