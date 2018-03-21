const { GraphQLServer } = require("graphql-yoga");

const resolvers = require("./resolvers/root");

const server = new GraphQLServer({ typeDefs: "./server/typedefs/types.graphql", resolvers});

const options = {
    port: 4000,
    endpoint: '/',
    subscriptions: '/subscriptions',
    playground: '/'
  }
  
server.start(options, ({ port }) => console.log(`Server started, listening on port ${port} for incoming requests.`))


