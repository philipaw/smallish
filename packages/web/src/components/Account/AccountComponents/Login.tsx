import React, { useState } from 'react'

import { useQuery } from '@apollo/react-hooks'
import { A } from 'hookrouter'
import { User } from '@smallish/prisma2/node_modules/@generated/photon'

const login: (email: string, password: string) => User = function(email, password) {
  return {
    id: '1',
    email: 'll',
    name: 'l',
    password: 'l',
  }
}

export const Login: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="login-container">
      <header>
        <p>Login or </p>
        <A href="/signup">SignUp</A>
      </header>
      <div className="email-container">
        <label>email</label>
        <input value={email} onChange={({ target: { value } }) => setEmail(value)} />
      </div>
      <div className="password-container">
        <label>password</label>
        <input value={password} onChange={({ target: { value } }) => setPassword(value)} />
      </div>
      <button onClick={() => login('john', 'johnspassword')}>Login</button>
    </div>
  )
}
