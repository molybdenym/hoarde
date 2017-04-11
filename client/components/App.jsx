/* @flow */

import React from 'react';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import CharSheet from './CharSheet';
import TopBar from './TopBar';

const token = localStorage.getItem('token');
export const networkInterface = createNetworkInterface({
  uri: 'https://us-west-2.api.scaphold.io/graphql/tame-holiday',
  opts: {
    headers: {
      Authorization: token ? `Bearer ${token}` : null,
    },
  },
});
export const client = new ApolloClient({ networkInterface });


class App extends React.Component {
  props: { client?: any };

  render() {
    return (
      <ApolloProvider client={this.props.client || client}>
        {token
          ? <main className="page">
              <CharSheet />
            </main>
          : <TopBar />}
      </ApolloProvider>
    );
  }
}

export default App;
