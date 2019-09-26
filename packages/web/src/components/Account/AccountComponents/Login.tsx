import React, { useState } from 'react'

import idx from 'idx'
import { navigate } from 'hookrouter'

import { Box } from '../../../common/styled'

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
    const { data } = isSignup
      ? await signup({ variables: { name, email, password } })
      : await login({ variables: { email, password } })
    const token = idx(data, (_) => _[isSignup ? 'signup' : 'login'].token)
    localStorage.setItem('token', token)
    navigate('/home')
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
    <Box className="login-container">
      {renderHeader()}
      {signupError && <p>Oh no! {`${signupError.message}`}</p>}
      {loginError && <p>Oh no! {`${loginError.message}`}</p>}
      {isSignup && (
        <Box className="name-container">
          <label>name</label>
          <input value={name} onChange={({ target: { value } }) => setName(value)} />
        </Box>
      )}
      <Box className="email-container">
        <label>email</label>
        <input value={email} onChange={({ target: { value } }) => setEmail(value)} />
      </Box>
      <Box className="password-container">
        <label>password</label>
        <input value={password} onChange={({ target: { value } }) => setPassword(value)} type="password" />
      </Box>
      <button onClick={() => handleSubmit()}>{isSignup ? 'Signup' : 'Login'}</button>
    </Box>
  )
}
