// Modules
import * as React from 'react';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from 'react-apollo';
// Libs
// Components
import { CharSheet } from './CharSheet';
import { TopNav } from './TopNav';
// Styles
import styles from '../styles/shared/global.css';
// Types


const token = window.localStorage.getItem('token');
const link = new HttpLink({
  uri: 'https://api.graph.cool/simple/v1/cj1b0ohhv3sn10101cwktpsf1',
  headers: token ? { Authorization: `Bearer ${token}` } : {},
});
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

export const App: React.SFC<{}> = () => {

  return (
    <ApolloProvider client={client}>
      <TopNav className={styles.nav} token={token}>
        <CharSheet id="111" />
      </TopNav>
    </ApolloProvider>
  );
}
