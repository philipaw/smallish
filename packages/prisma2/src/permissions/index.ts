import { and, rule, shield } from 'graphql-shield'
import { getUserId } from '../utils'
import { User } from '@generated/photon'

const rules = {
  isAuthenticatedUser: rule()((_parent, _args, context) => {
    const userId = getUserId(context)
    return Boolean(userId)
  }),
  isAdminOfGroup: rule()(async (_parent, { id }, context) => {
    const userId = getUserId(context)
    const admins: User[] = await context.photon.groups
      .findOne({
        where: { id },
      })
      .admins()
    return admins.map(({ id }) => id).includes(userId)
  }),
  isMemberOfGroup: rule()(async (_parent, { id }, context) => {
    const userId = getUserId(context)
    const members: User[] = await context.photon.groups
      .findOne({
        where: { id },
      })
      .members()
    return members.map(({ id }) => id).includes(userId)
  }),
  isPostOwner: rule()(async (_parent, { id }, context) => {
    const userId = getUserId(context)
    const author = await context.photon.posts
      .findOne({
        where: {
          id,
        },
      })
      .author()
    return userId === author.id
  }),
}

export const permissions = shield({
  Query: {
    me: rules.isAuthenticatedUser,
    filterPosts: rules.isAuthenticatedUser,
    post: rules.isAuthenticatedUser,
  },
  Mutation: {
    setGroupAdmins: and(rules.isAuthenticatedUser, and(rules.isAdminOfGroup, rules.isMemberOfGroup)),
    setGroupMembers: and(rules.isAuthenticatedUser, and(rules.isAdminOfGroup, rules.isMemberOfGroup)),
    createDraft: rules.isAuthenticatedUser,
    deletePost: rules.isPostOwner,
    publish: rules.isPostOwner,
  },
})
