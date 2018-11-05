// Modules
import * as React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
// Libs
// Components
import { AbilityScores } from './AbilityScores';
import { Character, CharacterQueryArgs, Ability } from 'types/gen-types/graphcool/types';
// Styles
// Types


class CharSheetQuery extends Query<{Character: Character}, CharacterQueryArgs> {};

export const CharSheet: React.SFC<CharacterQueryArgs> = props => (
  <CharSheetQuery query={GET_PC} variables={{ id: props.id }}>
    {(response) => {
      const { loading, data, error } = response;
      if (loading) return <div>Loading . . .</div>;
      if (error) return <h1>ERROR! {error.message}</h1>;

      console.log(response);
      const myChar = data ? data.Character : null;

      return (
        <div className="sheet">
          {/* <h3>{my.username}</h3> */}
          {myChar && <AbilityScores data={myChar.abilities || [] as Array<Ability>} />}
        </div>
      );
    }}
  </CharSheetQuery>
);

const GET_PC = gql`
query Character($id: ID!) {
  Character(id: $id) {
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
}`;
