const usersResolver = require('./users')
const chatsResolver = require('./chats')

module.exports = {
    Query: {
        ...usersResolver.Query
    },
    Mutation: {
        ...usersResolver.Mutation
    }
}