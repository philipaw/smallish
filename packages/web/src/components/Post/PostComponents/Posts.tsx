import React from 'react'
import { Post } from './Post'

export const Posts = () => (
  <ul>
    {[0, 1, 2].map((key) => (
      <Post {...{ key: key.toString(), name: `Post: ${key}` }} />
    ))}
  </ul>
)
