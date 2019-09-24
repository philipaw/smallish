import React, { useState } from 'react'

import { useMutation } from '@apollo/react-hooks'
import { A } from 'hookrouter'
import { LOGIN } from '../AccountActions'

export const Login: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [login, { error }] = useMutation(LOGIN)

  return (
    <div className="login-container">
      <header>
        <p>Login or </p>
        <A href="/signup">SignUp</A>
      </header>
      {error && <p>Oh no! {error.message}</p>}
      <div className="email-container">
        <label>email</label>
        <input value={email} onChange={({ target: { value } }) => setEmail(value)} />
      </div>
      <div className="password-container">
        <label>password</label>
        <input value={password} onChange={({ target: { value } }) => setPassword(value)} type="password" />
      </div>
      <button onClick={() => email && password && login({ variables: { email, password } })}>Login</button>
    </div>
  )
}
