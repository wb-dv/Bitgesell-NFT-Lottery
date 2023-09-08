import clsx from 'clsx';
import { memo } from 'react';

import { Token } from '../Token/Token';

import styles from './TokensList.module.scss';

const multiLevels = {
  Common: true,
  Special: true,
  Rare: true,
};

export const TokensList = memo(function TokensList({ level, tokens, countPts }) {
  const levelClass = styles[level];

  const tokenCustomClasses = clsx(styles.tokenHighlight, styles[`tokenHighlight__${level}`]);

  return (
    <div className={clsx(styles.TokensList__wrapper, levelClass)}>
      <h3 className={styles.TokensList__title}>
        {level}
        <strong className={clsx(styles.TokensList__countPts, levelClass)}> {countPts} pts</strong>
      </h3>
      <ul className={styles.TokensList}>
        {Array.isArray(tokens) &&
          tokens.map((token, i) => (
            <Token
              idx={i}
              count={token.count}
              level={level}
              key={token.id === 'NO_VALUE' ? token.index : token.id}
              customClasses={token.is_full && multiLevels[level] ? tokenCustomClasses : ''}
            />
          ))}
      </ul>
    </div>
  );
});
