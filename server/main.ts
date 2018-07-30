// import { WebApp } from 'meteor/webapp';
import * as express from 'express';
// import * as bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
// import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import { ApolloServer, gql } from 'apollo-server-express';
// import * as proxyMiddleware from 'http-proxy-middleware';

// import schema from '../imports/api/index';
// import Mocks from '../imports/api/mocks';
// import typeDefs from '../imports/api/schema';
// import resolvers from '../imports/api/resolvers';


// const graphQLServer = express();
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