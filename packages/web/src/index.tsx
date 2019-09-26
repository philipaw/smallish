import React from 'react'
import ReactDOM from 'react-dom'

import ApolloClient, { InMemoryCache, HttpLink } from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  request: (operation) => {
    operation.setContext({
      headers: {
        authorization: Date.now(),
      },
    })
  },
})

const ApolloApp = (AppComponent: any) => (
  <ApolloProvider client={client}>
    <AppComponent />
  </ApolloProvider>
)

ReactDOM.render(ApolloApp(App), document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
