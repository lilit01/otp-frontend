import React from 'react'
import { InfoIcon } from '../../icons/InfoIcon'
import { TruckIcon } from '../../icons/TruckIcon'
import { RouteIcon } from '../../icons/RouteIcon'
import { PaymentIcon } from '../../icons/PaymentIcon'
import { AcceptIcon } from '../../icons/AcceptIcon'
import './FormSteps.scss'

const FormSteps = ({step}) => {
  
  const stepItems = [
    {
      name: 'Contact Info.',
      stepNum: 1
    },
    {
      name: 'Truck/Driver',
      stepNum: 2
    },
    {
      name: 'Route',
      stepNum: 3
    },
    {
      name: 'Payment',
      stepNum: 4
    },
    {
      name: 'Accept & submit',
      stepNum: 5
    },
  ]
  return (
    <div className='steps'>
      {
        stepItems.map(item => {
          return (
            <div className={ ` step ${step === item.stepNum ? 'current' : step > item.stepNum ?  'completed' : 'disabled' }`} key={item.stepNum}>
              {item.stepNum === 1 ? <InfoIcon /> : item.stepNum === 2 ? <TruckIcon /> : item.stepNum === 3 ? <RouteIcon /> : item.stepNum === 4 ? <PaymentIcon /> : <AcceptIcon /> }
              <p className='step-name'>{item.name}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default FormSteps
