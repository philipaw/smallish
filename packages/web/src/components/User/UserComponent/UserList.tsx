import React from 'react'
import { User as UserProps } from '../../../types'
import { User } from './User'

interface UserListProps {
  users: UserProps[]
}

export const UserList: React.FC<UserListProps> = ({ users }) => (
  <div>
    {users.map((user) => (
      <User {...user} />
    ))}
  </div>
)
