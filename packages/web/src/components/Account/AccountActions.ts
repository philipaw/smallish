import gql from 'graphql-tag'

import { USER_FRAGMENT } from '../../common/fragment'

export const GETME = gql`
  query GetMe {
    me {
      user {
        ...userFields
      }
      token
    }
  }
  ${USER_FRAGMENT}
`

export const LOGIN = gql`
  mutation SignUp($email: string, $password: string) {
    signup(email: $email, password: $password) {
      user {
        ...userFields
      }
      token
    }
  }
  ${USER_FRAGMENT}
`

export const SIGNUP = gql`
  mutation SignUp($email: string, $name: string, $password: string) {
    signup(email: $email, name: $name, password: $password) {
      user {
        ...userFields
      }
      token
    }
  }
  ${USER_FRAGMENT}
`
