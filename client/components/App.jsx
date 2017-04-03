/* @flow */

import React from 'react';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import AbilityScores from './AbilityScores';

export const networkInterface = createNetworkInterface({ uri: '/graphql' });
export const client = new ApolloClient({ networkInterface });


class App extends React.Component {
  props: { client?: any };

  render() {
    return (
      <ApolloProvider client={this.props.client || client}>
        <main className="page">
          <div className="grid">
            <AbilityScores />
          </div>
        </main>
      </ApolloProvider>
    );
  }
}

export default App;
