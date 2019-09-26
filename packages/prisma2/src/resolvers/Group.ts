import { objectType } from 'nexus'

export const Group = objectType({
  name: 'Group',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.admins()
    t.model.members()
    t.model.chats()
  },
})
