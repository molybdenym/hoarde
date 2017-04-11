/* @flow */

import React from 'react';
// import gql from 'graphql-tag';
// import { graphql } from 'react-apollo';

import { numWithSign } from '../../imports/lib/helpers';

import styles from '../styles/AbilityScores.css';


type ASTType = {
  abbr: 'str' | 'dex' | 'con' | 'int' | 'wis' | 'cha';
  roll1: number;
  roll2: number;
  roll3: number;
  baseScore: number;
  raceMod: number;
  levelMod: number;
  magicMod: number;
  proficient?: boolean;
};
// const data: ASTType[] = [
//   {
//     abbr: 'str',
//     roll1: 6,
//     roll2: 5,
//     roll3: 5,
//     baseScore: 16,
//     raceMod: 0,
//     levelMod: 0,
//     magicMod: 0,
//   },
//   {
//     abbr: 'dex',
//     roll1: 6,
//     roll2: 6,
//     roll3: 5,
//     baseScore: 17,
//     raceMod: 1,
//     levelMod: 0,
//     magicMod: 0,
//     proficient: true,
//   },
//   {
//     abbr: 'con',
//     roll1: 5,
//     roll2: 5,
//     roll3: 4,
//     baseScore: 14,
//     raceMod: 0,
//     levelMod: 0,
//     magicMod: 0,
//   },
//   {
//     abbr: 'int',
//     roll1: 5,
//     roll2: 5,
//     roll3: 2,
//     baseScore: 12,
//     raceMod: 2,
//     levelMod: 0,
//     magicMod: 0,
//     proficient: true,
//   },
//   {
//     abbr: 'wis',
//     roll1: 4,
//     roll2: 3,
//     roll3: 3,
//     baseScore: 10,
//     raceMod: 0,
//     levelMod: 0,
//     magicMod: 0,
//   },
//   {
//     abbr: 'cha',
//     roll1: 3,
//     roll2: 3,
//     roll3: 3,
//     baseScore: 9,
//     raceMod: 0,
//     levelMod: 0,
//     magicMod: 0,
//   },
// ];


type Props = { data: ASTType[] };

class AbilityScores extends React.Component {
  props: Props;

  render() {
    const { data } = this.props;

    return (
      <section className={styles.section}>
        {data.map((x, i) => <AbilityTile key={i} data={x} />)}
      </section>
    );
  }
}


type ASTProps = { data: ASTType }

const AbilityTile = (props: ASTProps) => {
  const { abbr, baseScore, raceMod, levelMod, magicMod, proficient } = props.data;
  const profBonus = 3;
  const totalScore = baseScore + raceMod + levelMod + magicMod;
  const abilityMod = Math.floor((totalScore - 10) / 2);
  const savThrow = proficient ? abilityMod + profBonus : abilityMod;

  return (
    <div className={styles.tile}>
      <h4>{abbr}</h4>
      <h1>{numWithSign(abilityMod)}</h1>
      <div className={styles.score}>
        <div><p>{totalScore}</p><p className="tiny">tot</p></div>
        {proficient ? <div className={styles.prof}><i className="fa fa-trophy" aria-hidden="true"></i></div> : null}
        <div className={styles.sav}><p>{numWithSign(savThrow)}</p><p className="tiny">sav</p></div>
      </div>

      <div className={styles.rolls}>
        <p>{props.data.roll1}</p>
        <p>{props.data.roll2}</p>
        <p>{props.data.roll3}</p>
      </div>
      <div className={styles.mods}>
        <div><p>{baseScore}</p><p className="tiny">base</p></div>
        <div><p>{numWithSign(raceMod)}</p><p className="tiny">race</p></div>
        <div><p>{numWithSign(levelMod)}</p><p className="tiny">lvl</p></div>
        <div><p>{numWithSign(magicMod)}</p><p className="tiny">mag</p></div>
      </div>

    </div>
  );
};


// const AbilityScoresWithData = graphql(GET_PC)(AbilityScores);
export default AbilityScores;
