import React, { useState } from 'react'
import FormSteps from './FormSteps/FormSteps'
import './PermitForms.scss'
import RoutsTab from './RoutsTab/RoutsTab'
import TruckForm from './TruckForm/TruckForm'

const PermitForms = () => {
  const [step, setStep] = useState(2)

  return (
    <div className='permit-forms-container'>
      <div className='container-m'>
        <div className='permit-forms'>
          <div className='form-header'>
            <h3 className='form-title'>Calculate your Oregon permit form</h3>
            <p className='form-desc'>(Temporary permits valid for 10 days)</p>
          </div>
          <div className='form-content'>
            <FormSteps step={step} />
            {
              step === 2 ? <TruckForm setStep={setStep} />
              : step === 3 ? <RoutsTab setStep={setStep} />
              :
              ''
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default PermitForms
