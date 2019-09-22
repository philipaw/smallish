import React from 'react'

export interface PostProps {
  key: string
  name: string
}

export const Post = ({ key, name }: PostProps) => (
  <div>
    <h3>{key}</h3>
    <h2>{name}</h2>
  </div>
)
