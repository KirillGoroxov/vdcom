import React, { useState } from 'react'
import c from './Pages.module.css'
import cn from 'classnames'
const Pages = () => {
  let [page, setPage] = useState(1)
  const clickOnPage = (e) => setPage(e.target.id.split('-')[1])
  const prevPage = () => {
    if (page == 1) setPage(4)
    else setPage(page - 1)
  }
  const nextPage = () => {
    if (page == 4) setPage(1)
    else setPage(Number(page) + 1)
  }
  return (
    <div className={c.pages}>
      <img src="./../../../../content/arrow-left.svg" alt="" onClick={prevPage} />
      <button onClick={clickOnPage} className={cn(page == 1 ? c.pages_active : c.button)} id='btn-1'>1</button>
      <button onClick={clickOnPage} className={cn(page == 2 ? c.pages_active : c.button)} id='btn-2'>2</button>
      <button onClick={clickOnPage} className={cn(page == 3 ? c.pages_active : c.button)} id='btn-3'>3</button>
      <button onClick={clickOnPage} className={cn(page == 4 ? c.pages_active : c.button)} id='btn-4'>4</button>
      <img src="./../../../../content/arrow-right.svg" alt="" onClick={nextPage} />
    </div>
  )
}
export default Pages
