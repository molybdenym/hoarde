import * as express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

const GRAPHQL_PORT = 4000;

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;
// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!'
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: GRAPHQL_PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:${GRAPHQL_PORT}${server.graphqlPath}`),
);
