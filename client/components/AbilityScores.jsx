/* @flow */

import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import { numWithSign } from '../../imports/lib/helpers';

import styles from '../styles/AbilityScores.css';

const GET_SAY = gql`{ say }`;
type ASTType = {
  ability: 'str' | 'dex' | 'con' | 'int' | 'wis' | 'cha';
  roll1: number;
  roll2: number;
  roll3: number;
  abilityBase: number;
  raceMod: number;
  levelMod: number;
  magicMod: number;
  proficiency?: boolean;
};
const data: ASTType[] = [
  {
    ability: 'str',
    roll1: 6,
    roll2: 5,
    roll3: 5,
    abilityBase: 16,
    raceMod: 0,
    levelMod: 0,
    magicMod: 0,
  },
  {
    ability: 'dex',
    roll1: 6,
    roll2: 6,
    roll3: 5,
    abilityBase: 17,
    raceMod: 1,
    levelMod: 0,
    magicMod: 0,
    proficiency: true,
  },
  {
    ability: 'con',
    roll1: 5,
    roll2: 5,
    roll3: 4,
    abilityBase: 14,
    raceMod: 0,
    levelMod: 0,
    magicMod: 0,
  },
  {
    ability: 'int',
    roll1: 5,
    roll2: 5,
    roll3: 2,
    abilityBase: 12,
    raceMod: 2,
    levelMod: 0,
    magicMod: 0,
    proficiency: true,
  },
  {
    ability: 'wis',
    roll1: 4,
    roll2: 3,
    roll3: 3,
    abilityBase: 10,
    raceMod: 0,
    levelMod: 0,
    magicMod: 0,
  },
  {
    ability: 'cha',
    roll1: 3,
    roll2: 3,
    roll3: 3,
    abilityBase: 9,
    raceMod: 0,
    levelMod: 0,
    magicMod: 0,
  },
];


// @graphql(GET_SAY)
type Props = { data: { tiles: ASTType[], loading: boolean, error: boolean } };
class AbilityScores extends React.Component {
  props: Props;

  handleClick = () => {
    console.log('whatever');
  }

  render() {
    // const { tiles, loading, error } = this.props.data;
    const tiles = data;
    // if (loading) return <div>Loading . . .</div>;
    // if (error) return <h1>ERROR!</h1>;

    return (
      <section className={styles.section} onClick={this.handleClick}>
        {tiles.map((x, i) => <AbilityTile key={i} data={x} />)}
      </section>
    );
  }
}


type ASTProps = { data: ASTType }
const AbilityTile = (props: ASTProps) => {
  const { ability, abilityBase, raceMod, levelMod, magicMod, proficiency } = props.data;
  const profBonus = 3;
  const totalScore = abilityBase + raceMod + levelMod + magicMod;
  const abilityMod = Math.floor((totalScore - 10) / 2);
  const savThrow = proficiency ? abilityMod + profBonus : abilityMod;

  return (
    <div className={[styles.tile, (proficiency ? styles.prof : '')].join(' ')}>
      <p>{ability}</p>
      <h1>{numWithSign(abilityMod)}</h1>
      <div className={styles.score}>
        <div><p>{totalScore}</p><p className="tiny">tot</p></div>
        <div><p>{numWithSign(savThrow)}</p><p className="tiny">sav</p></div>
      </div>

      <div className={styles.rolls}>
        <p>{props.data.roll1}</p>
        <p>{props.data.roll2}</p>
        <p>{props.data.roll3}</p>
      </div>
      <div className={styles.mods}>
        <div><p>{abilityBase}</p><p className="tiny">base</p></div>
        <div><p>{numWithSign(raceMod)}</p><p className="tiny">race</p></div>
        <div><p>{numWithSign(levelMod)}</p><p className="tiny">lvl</p></div>
        <div><p>{numWithSign(magicMod)}</p><p className="tiny">mag</p></div>
      </div>

    </div>
  );
};


const AbilityScoresWithData = graphql(GET_SAY)(AbilityScores);
export default AbilityScoresWithData;
