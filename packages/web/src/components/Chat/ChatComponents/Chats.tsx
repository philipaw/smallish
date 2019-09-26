import React from 'react'
import { useQuery } from 'react-apollo'
import { OTHER_USERS } from '../../User'

export const Chats: React.FC = () => {
  const { error: getOtherUsersError, data } = useQuery(OTHER_USERS)
  console.log({ data, getOtherUsersError })
  return (
    <div>
      <h1>Chats</h1>
    </div>
  )
}
