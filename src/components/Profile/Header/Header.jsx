import React from 'react'
import './Header.css'

const Header = (props) => {
  const changeSearch = (e) => props.setSearch(e.target.value)

  const focus = () => props.setSearch('')
  const blur = () => {
    if (props.search === '') props.setSearch('Search by Name...')
  }
  return (
    <div className='header'>
      <div className='logo'>LOGO</div>
      <img src="./../../../../header/loupe.svg" className='loupe' alt="" />
      <input type="text" className='search-input' onChange={changeSearch} onFocus={focus} onBlur={blur} value={props.search} />
      <div className='header__icon-container'>
        <img src="./../../../../header/icon.svg" className='icon' alt="" />
        <span className='header__name'>Mr. Director</span>
        <span className='header__post'>Managing Director</span>
      </div>
    </div>
  )
}

export default Header
