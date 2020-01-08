const { gql } = require('apollo-server')

module.exports = gql`
    type User{
        id: ID
        token: String
        email: String
        name: String
        password: String
        phone: Int
        createdAt: String
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
    }
    type Mutation{
        register(registerInput: RegisterInput): User!
        login(name: String!, password: String!): User!
    }
`