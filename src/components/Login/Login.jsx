import React, { useState } from 'react'
import './Login.css'

const Login = () => {
  let [login, setLogin] = useState('Введите ваш логин')
  let [password, setPassword] = useState('')
  const changeLogin = (e) => {
    setLogin(e.target.value)
  }
  const focusLogin = () => {
    if (login === 'Введите ваш логин') setLogin('')
  }
  const blurLogin = () => {
    if (login === '') setLogin('Введите ваш логин')
  }
  const changePassword = (e) => {
    setPassword(e.target.value)
  }
  const signIn = () => {
    if (login === 'Petrov@gmail.com' && password === '00000000') {
      window.location.replace("http://localhost:3000/clients")
    }
  }
  return (
    <div className='container'>
      <div className='logotype'>
        LOGO
      </div>
      <div className='text'>
        Welcome To CRM System <br /> Sign In To Your Account
      </div>
      <div className='log'>Login</div>
      <input className='login input' type="login" value={login} onChange={changeLogin} onFocus={focusLogin} onBlur={blurLogin} />
      <div className='pass'>Password</div>
      <input className='input-pass input' type="password" value={password} onChange={changePassword} />
      <img src='./../../eye.svg' alt="" className='eye-1' />
      <img src='./../../eye1.svg' alt="" className='eye' />
      <button className='button' onClick={signIn}>SIGN IN</button>
    </div>
  )
}

export default Login