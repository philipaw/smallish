import { objectType } from 'nexus'

export const Chat = objectType({
  name: 'Chat',
  definition(t) {
    t.model.id()
    t.model.content()
    t.model.sender()
    t.model.group()
  },
})
