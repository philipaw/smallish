import React from 'react'

import { useRoutes } from 'hookrouter'

import './App.css'

import { Account, Login, GETME, Signup } from './components/Account'
import { Chats } from './components/Chat'
import { Landing } from './components/Landing'
import { NotFoundPage } from './components/NotFountPage'
import { Posts } from './components/Post/PostComponents'
import { useQuery } from 'react-apollo'

const routes = {
  '/': () => <Landing />,
  '/account': () => <Account />,
  '/chat': () => <Chats />,
  '/posts': () => <Posts />,
  '/signup': () => <Signup />,
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
