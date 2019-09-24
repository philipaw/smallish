import React from 'react'

import { useRoutes } from 'hookrouter'

import './App.css'

import { Account, Login, SignUp, GETME } from './components/Account'
import { Chat } from './components/Chat'
import { Landing } from './components/Landing'
import { NotFoundPage } from './components/NotFountPage'
import { Posts } from './components/Post/PostComponents'
import { useQuery } from 'react-apollo'

const routes = {
  '/': () => <Landing />,
  '/account': () => <Account />,
  '/chat': () => <Chat />,
  '/login': () => <Login />,
  '/posts': () => <Posts />,
  '/signup': () => <SignUp />,
  // '/chat': ({ id }) => <ProductDetails id={id} />,
}

const App: React.FC = () => {
  const { loading, error } = useQuery(GETME)
  const isNotAuthorizedError = error && error.toString().includes('Not Authorised!')

  const routeResult = useRoutes(routes)

  if (loading) return <p>Loading ...</p>

  return routeResult ? isNotAuthorizedError ? <Login /> : routeResult : <NotFoundPage />
}

export default App
