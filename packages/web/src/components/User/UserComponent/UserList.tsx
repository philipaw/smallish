import React from 'react'
import { User as UserProps } from '../../../types'
import { User } from './User'

interface UserListProps {
  users: UserProps[]
}

export const UserList: React.FC<UserListProps> = ({ users }) => (
  <div>
    <header>Users</header>
    {users.map((user) => (
      <User {...user} key={user.id} />
    ))}
  </div>
)
