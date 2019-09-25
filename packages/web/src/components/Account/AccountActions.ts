import gql from 'graphql-tag'

import { USER_FRAGMENT } from '../../common/fragment'

export const GETME = gql`
  query GetMe {
    me {
      ...userFields
    }
  }
  ${USER_FRAGMENT}
`

export const LOGIN = gql`
  mutation Login($email: String, $password: String) {
    login(email: $email, password: $password) {
      user {
        ...userFields
      }
      token
    }
  }
  ${USER_FRAGMENT}
`

export const SIGNUP = gql`
  mutation SignUp($email: String, $name: String, $password: String) {
    signup(email: $email, name: $name, password: $password) {
      user {
        ...userFields
      }
      token
    }
  }
  ${USER_FRAGMENT}
`
