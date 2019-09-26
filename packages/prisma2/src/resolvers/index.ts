import { AuthPayload } from './AuthPayload'
import { Chat } from './Chat'
import { Group } from './Group'
import { Mutation } from './Mutation'
import { Post } from './Post'
import { Query } from './Query'
import { User } from './User'

export const resolvers = {
  Query,
  Chat,
  Group,
  User,
  Post,
  Mutation,
  AuthPayload,
}
