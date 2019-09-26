import React from 'react'
import { Group as GroupProps } from '../../../types'
import { UserList } from '../../User'

import { Box } from '../../../common/styled'

export const Group: React.FC<GroupProps> = ({ admins, id, members, name }) => (
  <Box key={id}>
    <h3>{name}</h3>
    <Box>
      <h3>members</h3>
      {members ? <UserList users={members} /> : 'error: this group has no members'}
    </Box>
    <Box>
      <h3>admins</h3>
      {admins ? <UserList users={admins} /> : 'error: this group has no admins'}
    </Box>
  </Box>
)
