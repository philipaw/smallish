import gql from 'graphql-tag'
import { USER_FRAGMENT } from '../../common/fragment'

export const OTHER_USERS = gql`
  query OtherUsers {
    otherUsers {
      ...userFields
    }
  }
  ${USER_FRAGMENT}
`
