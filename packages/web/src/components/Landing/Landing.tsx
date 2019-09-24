import React from 'react'

import { useQuery } from '@apollo/react-hooks'
import { A } from 'hookrouter'

import { GETME, Login } from '../Account'

export const Landing: React.FC = () => {
  const resp = useQuery(GETME)
  const { loading, error, data } = resp
  console.log({ resp })
  if (loading) return <p>Loading ...</p>
  if (error) return <Login />
  return (
    <div className="Landing">
      <header className="App-header">Welcome</header>
    </div>
  )
}
