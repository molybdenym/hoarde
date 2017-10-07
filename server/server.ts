import { WebApp } from 'meteor/webapp';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import * as proxyMiddleware from 'http-proxy-middleware';

// import schema from '../imports/api/index.js';
import Mocks from '../imports/api/mocks';
import typeDefs from '../imports/api/schema.js';
import resolvers from '../imports/api/resolvers.js';


const graphQLServer = express();
const GRAPHQL_PORT = 4000;

const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

addMockFunctionsToSchema({
  schema: executableSchema,
  mocks: Mocks,
  preserveResolvers: true,
});

graphQLServer.use(bodyParser.urlencoded({ extended: true }));
graphQLServer.use(bodyParser.json());
graphQLServer.use('/graphql', graphqlExpress({ schema: executableSchema }));
graphQLServer.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
graphQLServer.listen(GRAPHQL_PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}`,
));

WebApp.rawConnectHandlers.use(proxyMiddleware(`http://localhost:${GRAPHQL_PORT}/graphql`));
