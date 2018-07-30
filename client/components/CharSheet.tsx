import * as React from 'react';
import gql from 'graphql-tag';
import { QueryResult, Query } from 'react-apollo';
import AbilityScores from './AbilityScores';
import { PC } from 'types/gen-types/scaphold/pc.type';
import { Query as GetPC, GetPcQueryArgs } from 'types/gen-types/scaphold/query.type';

class CharSheetQuery extends Query<GetPC> {};

const CharSheet: React.SFC<GetPcQueryArgs> = props => (
  <CharSheetQuery query={GET_PC} variables={{ id: props.id }}>
    {({ loading, data, error }: QueryResult<GetPC>) => {
      if (loading) return <div>Loading . . .</div>;
      if (error) return <h1>ERROR! {error.message}</h1>;

      //console.log(data.getPc);
      const myChar = data ? data.getPc : null;

      return (
        <div className="sheet">
          {/* <h3>{my.username}</h3> */}
          {myChar && <AbilityScores data={(myChar) ? myChar.abilities : null} />}
        </div>
      );
    }}
  </CharSheetQuery>
);

const GET_PC = gql`
query GetPC($id: ID!) {
  getPc(id: $id) {
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

export default CharSheet;
