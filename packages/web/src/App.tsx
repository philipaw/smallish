import React from 'react'

import { useRoutes } from 'hookrouter'

import './App.css'

import { Account } from './components/Account'
import { Chat } from './components/Chat'
import { Landing } from './components/Landing'
import { NotFoundPage } from './components/NotFountPage'
import { Post } from './components/Post'

const routes = {
  '/': () => <Landing />,
  '/account': () => <Account />,
  '/post': () => <Post />,
  // '/chat': ({ id }) => <ProductDetails id={id} />,
  '/chat': () => <Chat />,
}

const App: React.FC = () => {
  const routeResult = useRoutes(routes)

  return routeResult || <NotFoundPage />
}

export default App
