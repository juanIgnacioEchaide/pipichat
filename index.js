const { ApolloServer } = require('apollo-server')
const gql = require('graphql-tag')
const mongoose = require('mongoose')

/*const Chat = require('./models/chatSchema')*/
const User = require('./models/userSchema')
const { MONGODB } = require('./config.js')

const typeDefs = gql`
    type User{
        name: String!,
        email: String!,
        phone: Int!
    }
    type Query{
        getUsers: [User]
    }
`

const resolvers = {
    Query: {
        async getUsers(){
            try{
                const users = await User.find();
                return users;
            }
            catch(err)
            {
                throw new Error(err)
            }
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

mongoose.connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB Connected')
        return server.listen({ port: 3000 })
    })
    .then(res => {
        console.log(`Server running at ${res.url}`)
    })
