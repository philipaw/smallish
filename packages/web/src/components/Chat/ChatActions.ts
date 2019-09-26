import gql from 'graphql-tag'
import { USER_FRAGMENT } from '../../common/graphql/fragment'

// export const CREATE_ONE_GROUP = gql`
//   mutation CreateOneGroup($name: String, $memberIds: String[]) {
//     createOneGroup(name: $name, memberIds: $memberIds) {
//       id
//       name
//     }
//   }
// `

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

export const ALL_GROUPS = gql`
  query AllGroups {
    groups {
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
