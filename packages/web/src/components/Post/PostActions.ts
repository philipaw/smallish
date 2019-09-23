import gql from 'graphql-tag'

export const getFeed = gql`
  query {
    feed {
      id
      body
    }
  }
`

export const add = (x: number, y: number): number => x + y
