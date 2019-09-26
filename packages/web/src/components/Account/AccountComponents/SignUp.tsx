import React, { useState } from 'react'

import { useMutation } from '@apollo/react-hooks'
import { A } from 'hookrouter'
import { SIGNUP } from '../AccountActions'

export const Signup: React.FC = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const [signup, { error }] = useMutation(SIGNUP)

  return (
    <div className="signup-container">
      <header>
        <p>Signup or </p>
        <A href="/login">Login</A>
      </header>
      {error && <p>Oh no! {error.message}</p>}
      <div className="name-container">
        <label>name</label>
        <input value={name} onChange={({ target: { value } }) => setName(value)} />
      </div>
      <div className="email-container">
        <label>email</label>
        <input value={email} onChange={({ target: { value } }) => setEmail(value)} />
      </div>
      <div className="password-container">
        <label>password</label>
        <input value={password} onChange={({ target: { value } }) => setPassword(value)} type="password" />
      </div>
      <button onClick={() => name && email && password && signup({ variables: { name, email, password } })}>
        Signup
      </button>
    </div>
  )
}
