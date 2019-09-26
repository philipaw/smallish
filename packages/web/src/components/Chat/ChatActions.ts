import gql from 'graphql-tag'
import { USER_FRAGMENT } from '../../common/fragment'

export const MY_GROUPS = gql`
  query MyGroups {
    myGroups {
      id
      name
      admins {
        ...userFields
      }
      members {
        ...userFields
      }
      chats {
        id
        content
        sender {
          ...userFields
        }
      }
    }
  }
  ${USER_FRAGMENT}
`
