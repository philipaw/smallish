import React from 'react'

import { useRoutes } from 'hookrouter'

import './App.css'

import { Account } from './components/Account'
import { Chat } from './components/Chat'
import { Landing } from './components/Landing'
import { NotFoundPage } from './components/NotFountPage'
import { Posts } from './components/Post/PostComponents'

const routes = {
  '/': () => <Landing />,
  '/account': () => <Account />,
  '/posts': () => <Posts />,
  // '/chat': ({ id }) => <ProductDetails id={id} />,
  '/chat': () => <Chat />,
}

const App: React.FC = () => {
  const routeResult = useRoutes(routes)

  return routeResult || <NotFoundPage />
}

export default App
