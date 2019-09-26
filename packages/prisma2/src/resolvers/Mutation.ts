import { compare, hash } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { idArg, mutationType, stringArg } from 'nexus'
import { APP_SECRET, getUserId } from '../utils'

export const Mutation = mutationType({
  definition(t) {
    t.crud.createOneGroup()
    t.crud.updateOneGroup()
    t.crud.createOnePost()
    t.crud.updateOnePost()
    t.crud.createOneChat()
    t.crud.updateOneChat()

    t.field('signup', {
      type: 'AuthPayload',
      args: {
        name: stringArg({ nullable: true }),
        email: stringArg(),
        password: stringArg(),
      },
      resolve: async (_parent, { name, email, password }, ctx) => {
        const hashedPassword = await hash(password, 10)
        const user = await ctx.photon.users.create({
          data: {
            name,
            email,
            password: hashedPassword,
          },
        })
        return {
          token: sign({ userId: user.id }, APP_SECRET),
          user,
        }
      },
    })

    t.field('login', {
      type: 'AuthPayload',
      args: {
        email: stringArg(),
        password: stringArg(),
      },
      resolve: async (_parent, { email, password }, context) => {
        const user = await context.photon.users.findOne({
          where: {
            email,
          },
        })
        if (!user) {
          throw new Error(`No user found for email: ${email}`)
        }
        const passwordValid = await compare(password, user.password)
        if (!passwordValid) {
          throw new Error('Invalid password')
        }
        return {
          token: sign({ userId: user.id }, APP_SECRET),
          user,
        }
      },
    })

    t.field('createDraft', {
      type: 'Post',
      args: {
        title: stringArg(),
        content: stringArg({ nullable: true }),
      },
      resolve: (_parent, { title, content }, ctx) => {
        const userId = getUserId(ctx)
        return ctx.photon.posts.create({
          data: {
            title,
            content,
            published: false,
            author: { connect: { id: userId } },
          },
        })
      },
    })

    t.field('deletePost', {
      type: 'Post',
      nullable: true,
      args: { id: idArg() },
      resolve: (_parent, { id }, ctx) => {
        return ctx.photon.posts.delete({
          where: {
            id,
          },
        })
      },
    })

    t.field('publish', {
      type: 'Post',
      nullable: true,
      args: { id: idArg() },
      resolve: (_parent, { id }, ctx) => {
        return ctx.photon.posts.update({
          where: { id },
          data: { published: true },
        })
      },
    })

    t.field('setGroupAdmins', {
      type: 'Group',
      args: {
        id: idArg(),
        adminIds: idArg({ list: true }),
      },
      resolve: async (_parent, { id, adminIds }, ctx) => {
        const { admins, members } = await ctx.photon.groups.findOne({
          where: { id },
          include: { admins: true, members: true },
        })
        const memberIds = members.map((member) => member.id)
        const existingAdminIds = admins.map(({ id }) => {
          if (memberIds.includes(id)) {
            return id
          } else {
            throw new Error('User must be part of group to be an admin')
          }
        })
        const currentUserId = getUserId(ctx)
        if (existingAdminIds.includes(currentUserId)) {
          return ctx.photon.groups.update({
            where: { id },
            data: { members: { connect: [...adminIds.map((aid: string) => ({ id: aid }))] } },
          })
        } else {
          throw new Error('User must be an admin of group to add other users as admin')
        }
      },
    })

    t.field('setGroupMembers', {
      type: 'Group',
      args: {
        id: idArg(),
        memberIds: idArg({ list: true }),
      },
      resolve: (_parent, { id, memberIds }, ctx) =>
        ctx.photon.groups.update({
          where: { id },
          data: { members: { connect: [...memberIds.map((mid: string) => ({ id: mid }))] } },
        }),
    })
  },
})
