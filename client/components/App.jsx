/* @flow */

import React from 'react';
import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import CharSheet from './CharSheet';
import TopNav from './TopNav';

const token = window.localStorage.getItem('token');
const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'https://us-west-2.api.scaphold.io/graphql/tame-holiday',
    opts: {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    },
  }),
});


class App extends React.Component {
  props: { client?: any };

  render() {
    return (
      <ApolloProvider client={this.props.client || client}>
        <TopNav token={token}>
          <CharSheet />
        </TopNav>
      </ApolloProvider>
    );
  }
}

export default App;
