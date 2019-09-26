import React from 'react'

import { Box } from '../../../common/styled'

export interface PostProps {
  key: string
  name: string
}

export const Post = ({ key, name }: PostProps) => (
  <Box>
    <h3>{key}</h3>
    <h2>{name}</h2>
  </Box>
)
