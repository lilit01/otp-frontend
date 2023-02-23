import React, { useState } from 'react'
import { AcceptIcon } from '../../icons/AcceptIcon'
import { CalendarIcon } from '../../icons/CalendarIcon'
import { LockIcon } from '../../icons/LockIcon'
import { PaymentIcon } from '../../icons/PaymentIcon'
import { RemoveIcon } from '../../icons/RemoveIcon'
import './PaymentForm.scss'

const PaymentForm = ({setStep}) => {
  const [selectedTab , setSelectedTab] = useState("tabs");

  const [cardDetails,setCardDetails] = useState({
    cardNumber: '',
    date: '',
    cvc: ''
  })

  const goBack = () => {
    if(selectedTab === "tabs") {
      setStep(3)
    } else {
      setSelectedTab("tabs")
    }
  }

  return (
    <div className='payment-from'>
      <div className='price'>
        <span>$126.79</span>
      </div>
      <div className='payment'>
        <div className='payment-input-area'>
          <PaymentIcon />
          <input placeholder='Card Number' onChange={(e)=> setCardDetails({...cardDetails, cardNumber : e.target.value})} />
          {
            cardDetails.cardNumber.length === 16 ?
            <div className='accepted-icon'>
              <AcceptIcon />
            </div>
             :
             cardDetails.cardNumber.length && cardDetails.cardNumber.length !== 16 ?
               <RemoveIcon />
             : null
          }
               {/* <RemoveIcon /> */}

        </div>
        <div className='payment-input-area'>
          <CalendarIcon />
          <input placeholder='MM/YY' onChange={(e)=> setCardDetails({...cardDetails, date : e.target.value})} />
          {
            cardDetails.date !== "" ?
            <div className='accepted-icon'>
              <AcceptIcon />
            </div>
            // :
            // cardDetails.date === "gago" ?
            // <RemoveIcon />
            : null
          }
          
        </div>
        <div className='payment-input-area'>
          <LockIcon />
          <input placeholder='CVC' onChange={(e)=> setCardDetails({...cardDetails, cvc : e.target.value})} />
          {
            cardDetails.cvc !== "" ?
            <div className='accepted-icon'>
              <AcceptIcon />
            </div>
            // :
            // cardDetails.cvc === "gago" ?
            //   <RemoveIcon />
            : null
          }
        </div>
      </div>
      <div className='actions'>
        <button className='secondary' onClick={goBack}>BACK</button>
        <button className='primary' onClick={()=> setStep(5)}>NEXT</button>
      </div>
    </div>
  )
}

export default PaymentForm
