import React, { useState } from 'react'
import { useQuery } from 'react-apollo'

import { ALL_GROUPS } from '../ChatActions'
import { ALL_USERS, UserList } from '../../User'
import { GroupList } from '../../Group/GroupComponents/GroupList'

export const Chats: React.FC = () => {
  const [showAddGroup, setShowAddGroup] = useState(false)
  const [emailsToSendTo, setEmailsToSendTo] = useState('')
  const [message, setMessage] = useState('')

  const { error: getUsersError, data: userData, loading: userLoading } = useQuery(ALL_USERS)
  const { error: getGroupsError, data: groupData, loading: groupLoading } = useQuery(ALL_GROUPS)

  const loading = userLoading || groupLoading
  const error = getGroupsError || getUsersError
  const errorMessage = `${getUsersError && getUsersError.toString()}\n${getGroupsError && getGroupsError.toString()}`

  if (loading) return <p>Loading ...</p>
  if (error) return <p>{errorMessage}</p>

  const users = userData && userData.users
  const groups = groupData && groupData.groups

  return (
    <div>
      <h1>Messenger</h1>
      <UserList users={users} />
      <h2>Chats</h2>
      {groups && groups.length > 0 ? <GroupList groups={groups} /> : <p>Looks like you dont have any open chats</p>}

      <div>
        {showAddGroup && (
          <div>
            <div>
              <label>Send to:</label>
              <input
                type="text"
                value={emailsToSendTo}
                onChange={({ target: { value } }) => setEmailsToSendTo(value)}
              />
            </div>
            <div>
              <label>Message</label>
              <input type="text" value={message} onChange={({ target: { value } }) => setMessage(value)} />
            </div>
            <button
              onClick={() => {
                console.log({ emailsToSendTo, message })
              }}
            >
              Send
            </button>
          </div>
        )}
      </div>
      <a
        href="#/"
        onClick={() => {
          setShowAddGroup(!showAddGroup)
          if (showAddGroup) {
            setEmailsToSendTo('')
            setMessage('')
          }
        }}
      >
        {!showAddGroup ? 'Send a message' : 'Cancel'}
      </a>
    </div>
  )
}
