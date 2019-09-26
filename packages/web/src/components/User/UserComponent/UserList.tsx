import React from 'react'
import { User as UserProps } from '../../../types'
import { User } from './User'
import { Box } from '../../../common/styled'

interface UserListProps {
  users: UserProps[]
}

export const UserList: React.FC<UserListProps> = ({ users }) => (
  <Box>
    <header>Users</header>
    {users.map((user) => (
      <User {...user} key={user.id} />
    ))}
  </Box>
)
