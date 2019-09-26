import React from 'react'

import { Box } from '../../../common/styled'
import { User as UserProps } from '../../../types'

export const User: React.FC<UserProps> = ({ id, name, email }) => (
  <Box key={id}>
    <strong>{name}</strong>
    <p>{email}</p>
  </Box>
)
