import React from 'react'
import { Group as GroupProps } from '../../../types'
import { Group } from './Group'

export interface GroupListProps {
  groups: GroupProps[]
}

export const GroupList: React.FC<GroupListProps> = ({ groups }) => (
  <div>
    {groups.map((group) => (
      <Group {...group} key={group.id} />
    ))}
  </div>
)
