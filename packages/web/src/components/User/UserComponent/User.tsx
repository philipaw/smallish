import React from 'react'
import { User as UserProps } from '../../../types'

export const User: React.FC<UserProps> = ({ id, name, email }) => (
  <div key={id}>
    <strong>{name}</strong>
    <p>{email}</p>
  </div>
)
