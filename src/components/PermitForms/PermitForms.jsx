import React, { useState } from 'react'
import AcceptTab from './AcceptTab/AcceptTab'
import FormSteps from './FormSteps/FormSteps'
import PaymentForm from './PaymentForm/PaymentForm'
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
              : step === 4 ? <PaymentForm setStep={setStep} />
              : step === 5 ? <AcceptTab setStep={setStep} />
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
