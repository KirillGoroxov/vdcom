import React from 'react'
import c from './Clients.module.css'
import Client from './Client/Client'
import { useSelector } from 'react-redux'
import { nanoid } from 'nanoid'

const Clients = (props) => {
  const clients = useSelector(state => state.clients.clients)
  const reverseClients = [...clients].reverse()
  return (
    <div className={c.clients__container}>
      {props.search === 'Search by Name...' || props.search === '' ?
        reverseClients.map(c =>
          <Client
            id={c.id}
            key={nanoid()}
            clientID={c.clientID}
            clientName={c.clientName}
            trn={c.trn}
            date={c.date}
            ard={c.ard}
            companyNumber={c.companyNumber}
            email={c.email}
            phoneNumber={c.phoneNumber}
            companyAddress={c.companyAddress}
          />)
        : reverseClients.filter(c => c.clientName.includes(props.search)).map(c =>
          <Client
            id={c.id}
            key={nanoid()}
            clientID={c.clientID}
            clientName={c.clientName}
            trn={c.trn}
            date={c.date}
            ard={c.ard}
            companyNumber={c.companyNumber}
            email={c.email}
            phoneNumber={c.phoneNumber}
            companyAddress={c.companyAddress}
          />)}
    </div>
  )
}
export default Clients