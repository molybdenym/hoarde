import * as React from 'react';

import { numWithSign } from 'imports/lib/helpers';

import { Ability } from 'types/gen-types/scaphold/ability.type';

import * as styles from '../styles/AbilityScores.css';

class AbilityScores extends React.Component {
  props: { data?: Array<Ability> | null };

  render() {
    const { data } = this.props;

    return (
      <section className={styles.section}>
        {data && data.map((x, i) => <AbilityTile key={i} data={x} />)}
      </section>
    );
  }
}


const AbilityTile = (props: { data: Ability }) => {
  const { abbr, baseScore, raceMod, levelMod, magicMod, proficient } = props.data;
  const profBonus = 3;
  const totalScore = baseScore || 0 + raceMod + levelMod + magicMod;
  const abilityMod = Math.floor((totalScore - 10) / 2);
  const savThrow = proficient ? abilityMod + profBonus : abilityMod;

  return (
    <div className={styles.tile}>
      <h4>{abbr}</h4>
      <h1>{numWithSign(abilityMod)}</h1>
      <div className={styles.score}>
        <div><p>{totalScore}</p><p className="tiny">tot</p></div>
        {proficient ? <div className={styles.prof}><i className="fa fa-trophy" aria-hidden="true" /></div> : null}
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

export default AbilityScores;
