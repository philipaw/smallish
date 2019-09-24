import { nexusPrismaPlugin } from '@generated/nexus-prisma'
import { Photon } from '@generated/photon'
import { makeSchema } from 'nexus'
import { GraphQLServer } from 'graphql-yoga'
import { join } from 'path'
import { permissions } from './permissions'
import * as allTypes from './resolvers'
import { Context } from './types'
require('dotenv').config

const photon = new Photon()

const nexusPrisma = nexusPrismaPlugin({
  photon: (ctx: Context) => ctx.photon,
})

const schema = makeSchema({
  types: [allTypes, nexusPrisma],
  outputs: {
    typegen: join(__dirname, '../generated/nexus-typegen.ts'),
    schema: join(__dirname, '/schema.graphql'),
  },
  typegenAutoConfig: {
    sources: [
      {
        source: '@generated/photon',
        alias: 'photon',
      },
      {
        source: join(__dirname, 'types.ts'),
        alias: 'ctx',
      },
    ],
    contextType: 'ctx.Context',
  },
})

const server = new GraphQLServer({
  schema,
  middlewares: [permissions],
  context: (request) => {
    return {
      ...request,
      photon,
    }
  },
})

server.express.set('trust proxy', true)

server.start({ port: 8080 }, () =>
  console.log(
    `🚀 Server ready at: http://localhost:8080\n⭐️ See sample queries: http://pris.ly/e/ts/graphql-auth#6-using-the-graphql-api`,
  ),
)
