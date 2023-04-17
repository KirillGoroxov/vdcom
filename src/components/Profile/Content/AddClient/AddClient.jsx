import React, { useState } from 'react'
import c from './AddClient.module.css'
import { insertClient } from '../../../../store/clients'
import { useDispatch } from 'react-redux'

const AddClient = (props) => {
  const dispatch = useDispatch()
  let [clientName, setClientName] = useState('')
  let [trn, setTrn] = useState('')
  let [yearEnd, setYearEnd] = useState('')
  let [ard, setArd] = useState('')
  let [companyNumber, setCompanyNumber] = useState('')
  let [email, setEmail] = useState('')
  let [phoneNumber, setPhoneNumber] = useState('')
  let [companyAddress, setCompanyAddress] = useState('')
  const addClient = () => {
    if (clientName !== '' &&
      trn !== '' &&
      yearEnd !== '' &&
      ard !== '' &&
      companyNumber !== '' &&
      email !== '' &&
      phoneNumber !== '' &&
      companyAddress !== ''
    ) {
      dispatch(insertClient({
        clientName, trn, yearEnd,
        ard, companyNumber, email, phoneNumber, companyAddress
      }))
      props.setModal(false)
    }
    setClientName('')
    setArd('')
    setYearEnd('')
    setTrn('')
    setCompanyNumber('')
    setEmail('')
    setPhoneNumber('')
    setCompanyAddress('')
  }
  return (
    <div className={props.modal ? c.modal : c.none}>
      <div className={c.inputs}>
        <div>
          <div>Client name</div>
          <input type="text" value={clientName} onChange={e => setClientName(e.target.value)} required />
        </div>
        <div>
          <div>TRN/PPSN</div>
          <input type="text" value={trn} onChange={e => setTrn(e.target.value)} required />
        </div>
        <div>
          <div>Year end</div>
          <input type="text" value={yearEnd} onChange={e => setYearEnd(e.target.value)} required />
        </div>
        <div>
          <div>ARD</div>
          <input type="text" value={ard} onChange={e => setArd(e.target.value)} required />
        </div>
        <div>
          <div>Company number</div>
          <input type="text" value={companyNumber} onChange={e => setCompanyNumber(e.target.value)} required />
        </div>
        <div>
          <div>Email</div>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div>
          <div>Phone number</div>
          <input type="text" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} required />
        </div>
        <div>
          <div>Company address</div>
          <input type="text" value={companyAddress} onChange={e => setCompanyAddress(e.target.value)} required />
        </div>
        <button onClick={addClient}>Add</button>
      </div>
    </div>
  )
}

export default AddClient