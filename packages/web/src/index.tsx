import React from 'react'
import ReactDOM from 'react-dom'

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import { ThemeProvider } from 'styled-components'
import { Box, Root, Style, theme } from './common/styled'

import App from './App'
import * as serviceWorker from './serviceWorker'

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  request: (operation) => {
    const token = localStorage.getItem('token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    })
  },
})

const WrapApp = (AppComponent: any) => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <Root>
        <Style />
        <Box>
          <AppComponent />
        </Box>
      </Root>
    </ThemeProvider>
  </ApolloProvider>
)

ReactDOM.render(WrapApp(App), document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
