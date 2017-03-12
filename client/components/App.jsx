/* @flow */

import React from 'react';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import HelloWorld from './HelloWorld';

export const networkInterface = createNetworkInterface({ uri: '/graphql' });
export const client = new ApolloClient({ networkInterface });


class App extends React.Component {
  props: { client?: any };

  render() {
    return (
      <ApolloProvider client={this.props.client || client}>
        <HelloWorld />
      </ApolloProvider>
    );
  }
}

export default App;
