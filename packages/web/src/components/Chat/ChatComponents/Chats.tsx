import React from 'react'
import { useQuery } from 'react-apollo'

import { MY_GROUPS } from '../ChatActions'
import { ALL_USERS, UserList } from '../../User'

export const Chats: React.FC = () => {
  const { error: getUsersError, data: userData, loading: userLoading } = useQuery(ALL_USERS)
  const { error: getGroupsError, data: groupData, loading: groupLoading } = useQuery(MY_GROUPS)

  const loading = userLoading || groupLoading
  const error = getGroupsError || getUsersError
  const errorMessage = `${getUsersError && getUsersError.toString()}\n${getGroupsError && getGroupsError.toString()}`

  if (loading) return <p>Loading ...</p>
  if (error) return <p>{errorMessage}</p>

  const users = userData && userData.users

  return (
    <div>
      <h1>Messenger</h1>
      <UserList users={users} />
      <h2>Chats</h2>
    </div>
  )
}
