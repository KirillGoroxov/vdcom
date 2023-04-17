import React from 'react'
import './Title.css'
import cn from 'classnames'

const Title = (props) => {
  let tit = props.tit === 'tit' ? 'tit' : props.tit === 'ard' ? 'ard' : ''
  let img = props.arrow === 'arrow-1' ? 'arrow-1' : props.arrow === 'arrow-2' ? 'arrow-2' : props.arrow === 'none' ? 'none' : ''
  let none = props.img === 'none' ? 'none' : ''
  return (
    <div className='title__container'>
      <div className={cn('title__text', tit)}>{props.title}</div>
      <div className={cn('title__arrows', img)}>
        <img src="./../../../../../content/arrow-1.svg" alt="" className='title__img-1' />
        <img src="./../../../../../content/arrow-2.svg" alt="" className='title__img-2' />
      </div>
      <div className={cn('title__section', none)}></div>
    </div>
  )
}
export default Title
