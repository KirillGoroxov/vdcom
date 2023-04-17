import React, { useState } from 'react'
import c from './Content.module.css'
import Titles from './Titles/Titles'
import Pages from './Pages/Pages'
import Clients from './Clients/Clients'
import HeaderContent from './HeaderContent/HeaderContent'
import AddClient from './AddClient/AddClient'

const Content = (props) => {
  let [modal, setModal] = useState(false)
  document.body.addEventListener('keydown', e => {
    if (e.key == 'Escape') {
      setModal(false)
    }
  })
  const addClientModal = () => {
    setModal(!modal)
  }
  return (
    <div className={c.content}>
      <AddClient modal={modal} setModal={setModal} />
      <HeaderContent addClient={addClientModal} />
      <Titles />
      <Clients search={props.search} />
      <Pages />
    </div>
  )
}
export default Content
