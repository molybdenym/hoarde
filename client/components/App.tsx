import * as React from 'react';
import { ApolloClient } from 'apollo-client';
import { HttpLink, createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import gql from 'graphql-tag';
import { ApolloProvider, graphql } from 'react-apollo';

import CharSheet from './CharSheet';
import TopNav from './TopNav';

const token = window.localStorage.getItem('token');

export const link = createHttpLink({
  uri: 'https://us-west-2.api.scaphold.io/graphql/tame-holiday',
  headers: token ? { Authorization: `Bearer ${token}` } : {},
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

type AppProps = { client?: any };
export const App: React.SFC<AppProps> = props => {
  return (
    <ApolloProvider client={client}>
      <TopNav token={token}>
        <CharSheet id="UEM6MQ==" />
      </TopNav>
    </ApolloProvider>
  );
}

export default App;
