import { memo } from 'react';
import clsx from 'clsx';

import styles from './GradeInfo.module.scss';

const gradesInfo = {
  Common: {
    pts: 1,
    multi: 1.5,
  },
  Special: {
    pts: 3,
    multi: 2,
  },
  Rare: {
    pts: 7,
    multi: 3,
  },
  Unique: {
    pts: 30,
  },
  Legendary: {
    pts: 50,
  },
};

const grades = ['Common', 'Special', 'Rare', 'Unique', 'Legendary'];

export const GradeInfo = memo(function GradeInfo({ customWrapperClasses, nfts }) {
  const activeGrades = {
    Common: nfts[0].some((nft) => nft.is_full),
    Special: nfts[1].some((nft) => nft.is_full),
    Rare: nfts[2].some((nft) => nft.is_full),
  };

  return (
    <div className={clsx(styles.GradeInfo, customWrapperClasses)}>
      <div className={styles.GradeInfo__block}>
        <h3 className={styles.GradeInfo__title}>
          <strong className={styles.GradeInfo__strong}>NFT</strong> value
        </h3>
        <ul className={styles.GradeInfo__list}>
          {grades.map((grade) => (
            <li
              className={clsx(styles.GradeInfo__item, styles[grade])}
              key={grade}
            >
              {grade} - <strong>{gradesInfo[grade].pts} pts</strong>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.GradeInfo__block}>
        <h3 className={styles.GradeInfo__title}>
          <strong className={styles.GradeInfo__strong}>Multiplex</strong>
        </h3>
        <ul className={clsx(styles.GradeInfo__list, styles.GradeInfo__list_multi)}>
          {grades.map((grade, i) => {
            if (i > 2) return null;
            return (
              <li
                className={clsx(styles.GradeInfo__item, styles[grade], {
                  [styles[grade + '_highlight']]: activeGrades[grade],
                })}
                key={grade}
              >
                {grade} - <strong>x{gradesInfo[grade].multi}</strong>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
});
