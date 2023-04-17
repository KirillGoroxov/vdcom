import React from 'react'
import c from './Client.module.css'
import { useDispatch } from 'react-redux'
import { deleteClient } from '../../../../../store/clients'

const Client = (props) => {
  const dispatch = useDispatch()
  const removeClient = () => {
    dispatch(deleteClient(props.id))
  }
  return (
    <div className={c.clientContainer} >
      <input type="checkbox" />
      <span>{props.clientID}</span>
      <span>{props.clientName}</span>
      <span>{props.trn}</span>
      <span>{props.date}</span>
      <span>{props.ard}</span>
      <span>{props.companyNumber}</span>
      <span>{props.email}</span>
      <span>{props.phoneNumber}</span>
      <span>{props.companyAddress}</span>
      <img id={props.id} src='./../../../../../content/pensil.svg' alt="pensil" className={c.pensil} />
      <img id={props.id} src='./../../../../../content/delete.svg' alt="delete" onClick={removeClient} className={c.delete} />
    </div>
  )
}
export default Client
