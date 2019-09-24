import gql from 'graphql-tag'

export const USER_FRAGMENT = gql`
  fragment userFields on User {
    id
    name
    email
  }
`
