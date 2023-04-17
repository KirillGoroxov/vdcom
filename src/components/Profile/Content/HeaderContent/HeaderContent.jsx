import React from 'react'
import c from './HeaderContent.module.css'

const HeaderContent = (props) => {
  return (
    <div className={c.content__header}>
      <span>Total Contacts</span>
      <div className={c.content__button} onClick={props.addClient}>
        <button>Add +</button>
      </div>
    </div>
  )
}
export default HeaderContent