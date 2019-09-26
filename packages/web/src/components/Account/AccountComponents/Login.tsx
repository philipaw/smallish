import React, { useState } from 'react'

import { useMutation } from '@apollo/react-hooks'
import { LOGIN, SIGNUP } from '../AccountActions'

export const Login: React.FC = () => {
  const [email, setEmail] = useState('')
  const [isSignup, setIsSignup] = useState(false)
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const [login, { error: loginError }] = useMutation(LOGIN)
  const [signup, { error: signupError }] = useMutation(SIGNUP)

  const handleSubmit = async () => {
    const {
      data: {
        login: { token },
      },
    } = isSignup
      ? await signup({ variables: { name, email, password } })
      : await login({ variables: { email, password } })
    localStorage.setItem('token', token)
    console.log({ token: localStorage.getItem('token') })
  }

  const handleSignupToggle = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault()
    setIsSignup(!isSignup)
  }

  const renderHeader = () =>
    isSignup ? (
      <header>
        <p>Signup or </p>
        <a href="/#" onClick={(e) => handleSignupToggle(e)}>
          Login
        </a>
      </header>
    ) : (
      <header>
        <p>Login or </p>
        <a href="/#" onClick={(e) => handleSignupToggle(e)}>
          Signup
        </a>
      </header>
    )

  return (
    <div className="login-container">
      {renderHeader()}
      {signupError && <p>Oh no! {signupError.message}</p>}
      {loginError && <p>Oh no! {loginError.message}</p>}
      {isSignup && (
        <div className="name-container">
          <label>name</label>
          <input value={name} onChange={({ target: { value } }) => setName(value)} />
        </div>
      )}
      <div className="email-container">
        <label>email</label>
        <input value={email} onChange={({ target: { value } }) => setEmail(value)} />
      </div>
      <div className="password-container">
        <label>password</label>
        <input value={password} onChange={({ target: { value } }) => setPassword(value)} type="password" />
      </div>
      <button onClick={() => handleSubmit()}>{isSignup ? 'Signup' : 'Login'}</button>
    </div>
  )
}
