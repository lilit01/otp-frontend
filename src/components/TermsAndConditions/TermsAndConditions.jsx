import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { MinusIcon } from '../icons/MinusIcon';
import { PlusIcon } from '../icons/PlusIcon';
import './TermsAndConditions.scss';

const TermsAndConditions = () => {
  return (
    <div className='terms-conditions'>
      <div className='container-m'>
        <h3 className='title'>Terms and conditions</h3>
        <p className='desc'>The following Terms and Conditions shall be incorporated by reference into and made part of any order submitted through Oregon Permit Tax (hence referred to as the “Company”).</p>
        <p className='desc'>This contract is between the Company and customers working with commercial vehicles 
(hence referred to as the “Customer”).</p>
        <Accordion>
              <AccordionItem>
                  <AccordionItemHeading>
                      <AccordionItemButton>
                        <div />
                        Services
                        <div className='plus-icon'>
                          <PlusIcon />
                        </div>
                        <div className='minus-icon'>
                          <MinusIcon />
                        </div>
                      </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                      <p>
                        1. https://www.oregontrippermit.com provides documentation, filing, and permit application services only.
                      </p>
                      <p>
                        2. The Customer must apply for Company services online using our automated system and provide valid contact information. Upon receiving the order form, the Company will apply for the permit and provide a copy to the Costumer (in pdf files). If needed, the Company may contact the Customer for additional information.
                      </p>
                  </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                  <AccordionItemHeading>
                      <AccordionItemButton>
                      <div />
                      Payments
                        <div className='plus-icon'>
                          <PlusIcon />
                        </div>
                        <div className='minus-icon'>
                          <MinusIcon />
                        </div>
                      </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                      <p>
                      3. The Customer must pay upon submitting an online order.
                      </p>
                      <p>
                      4. The Company has the right to decline orders if a Customer does not pay or have the willingness to make a payment. In fact, the Company reserves the right to cancel any order for any reason and at any time.
                      </p>
                      <p>
                      5. The Customer authorizes the Company to charge their valid credit or debit card on file. Furthermore, the Customer understands that this authorization will remain in effect until the payment is made in full.
                      </p>
                  </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                  <AccordionItemHeading>
                      <AccordionItemButton>
                      <div />
                      Pricing Errors
                        <div className='plus-icon'>
                          <PlusIcon />
                        </div>
                        <div className='minus-icon'>
                          <MinusIcon />
                        </div>
                      </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                      <p>
                      6. The Company has the right to cancel these orders whether the order has been confirmed or not and the Customer’s valid credit card charged. If the Customer’s account has been charged for a purchase and the order is then voided, the Company will issue a credit to the card in the amount of the incorrect fee.
                      </p>
                  </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                  <AccordionItemHeading>
                      <AccordionItemButton>
                      <div />
                      Disclaimer
                        <div className='plus-icon'>
                          <PlusIcon />
                        </div>
                        <div className='minus-icon'>
                          <MinusIcon />
                        </div>
                      </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                      <p>
                      7. The process is considered properly served and completed once a Company representative sends the proof of permit to the costumer. This means that it is the Costumer’s responsibility to familiarize themselves with the information in the permit provided. The permit will be issued according to FMCSA standards based on the information provided by the Costumer.
                      </p>
                  </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                  <AccordionItemHeading>
                      <AccordionItemButton>
                      <div />
                      Financial Information
                        <div className='plus-icon'>
                          <PlusIcon />
                        </div>
                        <div className='minus-icon'>
                          <MinusIcon />
                        </div>
                      </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                      <p>
                      Financial information from customers, such as credit and debit card information will be collected through email, phone, or our online automated system. These are the ways we will obtain customers’ payments for services. Moreover, we do not store or retain payment information. All credit card processing practices are according to the credit card processing security standards.
                      </p>
                  </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                  <AccordionItemHeading>
                      <AccordionItemButton>
                      <div />
                      Website Security
                        <div className='plus-icon'>
                          <PlusIcon />
                        </div>
                        <div className='minus-icon'>
                          <MinusIcon />
                        </div>
                      </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                      <p>
                      The privacy of our customers is of our outmost concern and we do this through our website as well. To keep the security of our website current, we have a team of highly qualified professionals who manage our website.
                      </p>
                  </AccordionItemPanel>
              </AccordionItem>
          </Accordion>
      </div>
    </div>
  )
}

export default TermsAndConditions
