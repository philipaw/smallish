import React from 'react'
import { Group as GroupProps } from '../../../types'
import { Group } from './Group'
import { Box } from '../../../common/styled'

export interface GroupListProps {
  groups: GroupProps[]
}

export const GroupList: React.FC<GroupListProps> = ({ groups }) => (
  <Box>
    {groups.map((group) => (
      <Group {...group} key={group.id} />
    ))}
  </Box>
)
