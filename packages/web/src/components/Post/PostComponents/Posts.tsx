import React from 'react'
import { Post } from './Post'
import { add } from '../../Post'

export const Posts = () => (
  <ul>
    {[0, 1, 2].map((i) => {
      const key = add(i, 100).toString()
      return <Post {...{ key, name: `Post: ${key}` }} />
    })}
  </ul>
)
