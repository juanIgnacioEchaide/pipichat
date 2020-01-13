const { gql } = require('apollo-server')

module.exports = gql`
    type Chat{
        id: ID
        body: String
        createdAt: String
        messages: [Message]
        name: String
    }
    type Message{
        id: ID   
        createdAt:String
        author: String
        text: String
    }
    type User{
        id: ID
        token: String
        email: String
        name: String
        password: String
        phone: Int
        createdAt: String
    }
    input createChatInput{
        members: [String]
        name:String
    }
    input createMessageInput{
       author: String
       text:String
       chatID: String
    }
    input RegisterInput{
        name: String!
        password: String!
        confirmPassword: String!
        email: String!
        phone: Int!
    }
    type Query{
        getUsers: [User]
        getUser(userId: ID!): User
        getChats: [Chat]
        getChat(chatId: ID!): Chat
    }
    type Mutation{
        register(registerInput: RegisterInput): User!
        login(name: String!, password: String!): User!
        createMessage(input:createMessageInput):Message!
        createChat(input: createChatInput!): Chat!
        deleteChat(chatId: ID!): String!
    }
`