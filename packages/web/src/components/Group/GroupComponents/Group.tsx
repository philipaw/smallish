import React from 'react'
import { Group as GroupProps } from '../../../types'
import { UserList } from '../../User'

export const Group: React.FC<GroupProps> = ({ admins, id, members, name }) => (
  <div key={id}>
    <h3>{name}</h3>
    <div>
      <h3>members</h3>
      {members ? <UserList users={members} /> : 'error: this group has no members'}
    </div>
    <div>
      <h3>admins</h3>
      {admins ? <UserList users={admins} /> : 'error: this group has no admins'}
    </div>
  </div>
)
