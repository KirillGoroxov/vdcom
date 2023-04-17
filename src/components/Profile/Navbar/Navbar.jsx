import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import c from './Navbar.module.css'
import cn from 'classnames'

const Navbar = () => {
  let [tab, setTab] = useState('t')

  return (
    <div className={c.navbar}>
      <div className={c.container}>
        <div className={cn(c.item, c.total, tab === 't' ? c.active : '')} onClick={() => setTab('t')}>
          <img src="./../../../totalContact.svg" alt="" />
          <span>Total Contacts</span>
        </div>
        <div className={cn(c.item, c.calendar, tab === 'c' ? c.active : '')} onClick={() => setTab('c')}>
          <img src="./../../../calendar.svg" alt="" />
          <span>Calendar</span>
        </div>
        <div className={cn(c.item, c.report, tab === 'p' ? c.active : '')} onClick={() => setTab('p')}>
          <img src="./../../../projectReport.svg" alt="" />
          <span>Project Report</span>
        </div>
      </div>
      <Link to='/login' className={c.logOut}>
        <img src="./../../../logOut.svg" alt="" />
        <span>Log out</span>
      </Link>
    </div>
  )
}
export default Navbar
