import React from 'react'
import { A } from 'hookrouter'

import logo from '../../logo.svg'

export const Landing = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <A href="/login">Login</A>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
    </header>
  </div>
)
