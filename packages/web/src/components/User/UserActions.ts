import gql from 'graphql-tag'
import { USER_FRAGMENT } from '../../common/fragment'

export const ALL_USERS = gql`
  query AllUsers {
    users {
      ...userFields
    }
  }
  ${USER_FRAGMENT}
`

export const OTHER_USERS = gql`
  query OtherUsers {
    otherUsers {
      ...userFields
    }
  }
  ${USER_FRAGMENT}
`
