import React from 'react'
import { A } from 'hookrouter'

export const Landing: React.FC = () => {
  return (
    <div className="Landing">
      <header>Hi</header>
      <div>
        <header>
          <A href="/chat">Chat</A>
        </header>
      </div>
    </div>
  )
}
