import { idArg, queryType, stringArg } from 'nexus'
import { getUserId } from '../utils'
import { User } from '@generated/photon'

export const Query = queryType({
  definition(t) {
    t.crud.user()
    t.crud.users()
    t.crud.chat()
    t.crud.chats()
    t.crud.group()
    t.crud.groups()

    t.field('me', {
      type: 'User',
      resolve: (_parent, _args, ctx) => {
        const userId = getUserId(ctx)
        return ctx.photon.users.findOne({
          where: {
            id: userId,
          },
        })
      },
    })

    t.field('otherUsers', {
      type: 'User',
      nullable: true,
      resolve: async (_parent, _args, ctx) => {
        const userId = getUserId(ctx)
        const allUsers: User[] = await ctx.photon.users()
        const otherUsers: User[] = allUsers.filter(({ id }) => id !== userId)
        return otherUsers
      },
    })

    t.field('myGroups', {
      type: 'Group',
      resolve: async (_parent, _args, ctx) => {
        const userId = getUserId(ctx)
        const groups = await ctx.photon.users.findOne({ where: { id: userId } }).groups()
        console.log({ groups })
        console.log('done')
        return groups
      },
    })

    t.list.field('feed', {
      type: 'Post',
      resolve: (_parent, _args, ctx) => {
        return ctx.photon.posts.findMany({
          where: { published: true },
        })
      },
    })

    t.list.field('filterPosts', {
      type: 'Post',
      args: {
        searchString: stringArg({ nullable: true }),
      },
      resolve: (_parent, { searchString }, ctx) => {
        return ctx.photon.posts.findMany({
          where: {
            OR: [
              {
                title: {
                  contains: searchString,
                },
              },
              {
                content: {
                  contains: searchString,
                },
              },
            ],
          },
        })
      },
    })

    t.field('post', {
      type: 'Post',
      nullable: true,
      args: { id: idArg() },
      resolve: (_parent, { id }, ctx) => {
        return ctx.photon.posts.findOne({
          where: {
            id,
          },
        })
      },
    })
  },
})
