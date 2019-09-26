import React, { useState } from 'react'

import { useMutation } from '@apollo/react-hooks'
import { A } from 'hookrouter'

import { Box } from '../../../common/styled'
import { SIGNUP } from '../AccountActions'

export const Signup: React.FC = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const [signup, { error }] = useMutation(SIGNUP)

  return (
    <Box className="signup-container">
      <header>
        <p>Signup or </p>
        <A href="/login">Login</A>
      </header>
      {error && <p>Oh no! {error.message}</p>}
      <Box className="name-container">
        <label>name</label>
        <input value={name} onChange={({ target: { value } }) => setName(value)} />
      </Box>
      <Box className="email-container">
        <label>email</label>
        <input value={email} onChange={({ target: { value } }) => setEmail(value)} />
      </Box>
      <Box className="password-container">
        <label>password</label>
        <input value={password} onChange={({ target: { value } }) => setPassword(value)} type="password" />
      </Box>
      <button onClick={() => name && email && password && signup({ variables: { name, email, password } })}>
        Signup
      </button>
    </Box>
  )
}
