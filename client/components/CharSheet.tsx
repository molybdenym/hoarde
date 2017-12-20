import * as React from 'react';
import gql from 'graphql-tag';
import { graphql, QueryProps } from 'react-apollo';

import AbilityScores from './AbilityScores';

import { User } from 'types/gen-types/scaphold/user.type';

type Props = { data: { getUser: User } & QueryProps };

class CharSheet extends React.Component<Props, {}> {

  render() {
    if (this.props.data.loading) return <div>Loading . . .</div>;
    if (this.props.data.error) return <h1>ERROR!</h1>;

    const my = this.props.data.getUser;
    const myChars = my.playerCharacters;

    return (
      <div className="sheet">
        {/* <h3>{my.username}</h3> */}
        <AbilityScores data={(myChars && myChars.edges) ? myChars.edges[0].node.abilities : null} />
      </div>
    );
  }
}

const GET_PC = gql`
query GetUser {
  getUser(id: "VXNlcjoy") {
    id
    username,
    playerCharacters(first: 1) {
      edges {
        node {
          id
          abilities {
            raceMod
            roll2
            baseScore
            levelMod
            roll3
            roll1
            proficient
            magicMod
            abbr
          }
        }
      }
    }
  }
}`;

export default graphql<User>(GET_PC)(CharSheet);
