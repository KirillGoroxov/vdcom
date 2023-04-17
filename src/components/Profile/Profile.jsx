import React, { useState } from 'react'
import './Profile.css'
import Navbar from './Navbar/Navbar'
import Content from './Content/Content'
import Header from './Header/Header'

const Clients = () => {
  let [search, setSearch] = useState('Search by Name...')
  return (
    <div className='clients'>
      <Navbar />
      <Header setSearch={setSearch} search={search} />
      <Content search={search} />
    </div>
  )
}
export default Clients