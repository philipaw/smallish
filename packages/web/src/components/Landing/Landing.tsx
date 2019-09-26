import React from 'react'
import { A } from 'hookrouter'

import { Box } from '../../common/styled'

export const Landing: React.FC = () => {
  return (
    <Box className="Landing">
      <header>Welcome</header>
      <Box>
        <header>
          <A href="/chat">Chat</A>
        </header>
      </Box>
    </Box>
  )
}
