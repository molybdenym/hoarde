/* @flow */

import { Meteor } from 'meteor/meteor';
import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import { makeExecutableSchema, addResolveFunctionsToSchema } from 'graphql-tools';
import proxyMiddleware from 'http-proxy-middleware';
import {typeDefs} from '/imports/api/schema';
import {resolvers} from '/imports/api/resolvers';

const graphQLServer = express();
const GRAPHQL_PORT = 4000;

const schema = makeExecutableSchema({
  typeDefs: typeDefs, resolvers: resolvers
});

graphQLServer.use('/graphql', bodyParser.json(), graphqlExpress({ schema: schema }));
graphQLServer.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
graphQLServer.listen(GRAPHQL_PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}`
));

WebApp.rawConnectHandlers.use(proxyMiddleware(`http://localhost:${GRAPHQL_PORT}/graphql`));
