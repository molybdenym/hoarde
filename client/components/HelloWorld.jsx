/* @flow */

import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import styles from '../main.css';

const GET_SAY = gql`{ say }`;


type Props = { data: { loading: boolean, say: string, error: boolean } };

// @graphql(GET_SAY)
class HelloWorld extends React.Component {
  props: Props;

  handleClick = () => {
    console.log('whatever');
  }

  render() {
    if (this.props.loading) return <div>Loading . . .</div>;
    if (this.props.error) return <h1>ERROR!</h1>;

    return (
      <h2 onClick={this.handleClick}>
        {<span className={styles.test2}>{this.props.data.say } (React Root)</span>}
      </h2>
    );
  }
}

const HelloWorldWithData = graphql(GET_SAY)(HelloWorld);


export default HelloWorldWithData;
