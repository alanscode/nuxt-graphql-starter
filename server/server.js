const { GraphQLServer, PubSub } = require("graphql-yoga");

const resolvers = require("./resolvers/root");

const pubsub = new PubSub();
const server = new GraphQLServer({
  typeDefs: "./server/typedefs/types.graphql",
  resolvers,
  context: { pubsub }
});

const options = {
  port: 4000
};

server.start(options, ({ port }) =>
  console.log(
    `Server started, listening on port ${port} for incoming requests.`
  )
);
