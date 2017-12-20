import * as React from 'react';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from 'react-apollo';

import CharSheet from './CharSheet';
import TopNav from './TopNav';

const token = window.localStorage.getItem('token');
const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://us-west-2.api.scaphold.io/graphql/tame-holiday',
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  }),
  cache: new InMemoryCache(),
});


type AppProps = { client?: any };
export const App: React.SFC<AppProps> = props => {
  return (
    <ApolloProvider client={client}>
      <TopNav token={token}>
        <CharSheet />
      </TopNav>
    </ApolloProvider>
  );
}

export default App;
