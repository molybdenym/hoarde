/* @flow */

import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import styles from '../styles/AbilityScores.css';

const GET_SAY = gql`{ say }`;


type Props = { data: { loading: boolean, say: string, error: boolean } };

// @graphql(GET_SAY)
class AbilityScores extends React.Component {
  props: Props;

  handleClick = () => {
    console.log('whatever');
  }

  render() {
    if (this.props.loading) return <div>Loading . . .</div>;
    if (this.props.error) return <h1>ERROR!</h1>;

    return (
      <section className={styles.abilityScores} onClick={this.handleClick}>
        <div>
          <h3>Str</h3>
        </div>
        <div>
          <h3>Dex</h3>
        </div>
        <div>
          <h3>Con</h3>
        </div>
        <div>
          <h3>Int</h3>
        </div>
        <div>
          <h3>Wis</h3>
        </div>
        <div>
          <h3>Cha</h3>
        </div>
      </section>
    );
  }
}

const AbilityScoresWithData = graphql(GET_SAY)(AbilityScores);
export default AbilityScoresWithData;
