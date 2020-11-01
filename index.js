const { KEY_MONGODB } = require('./config.js');
const { ApolloServer } = require('apollo-server');

const mongoose = require('mongoose');
const Post = require('./models/Post')
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');


Post.find().then(res => {
    console.log(res);
});

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

mongoose.connect(KEY_MONGODB, { useNewUrlParser: true }).then(() => {
    console.log('MongoDB is connected');
    return server.listen({ port: 5000 })
}).then(res => { 
    console.log(`Server is running at: ${res.url}`);
});;

