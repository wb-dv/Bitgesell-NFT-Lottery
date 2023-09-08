import { memo } from 'react';
import clsx from 'clsx';

import styles from './WBGLCounter.module.scss';

export const WBGLCounter = memo(function WBGLCounter({ count, customClasses }) {
  return (
    <header className={clsx(styles.WBGLCounter, customClasses)}>
      <h2 className={styles.WBGLCounter__title}>
        <strong className={styles.WBGLCounter__count}>{typeof count === 'number' ? count.toFixed(0) : count}</strong>
        <div className={styles.WBGLCounter__currency}> wbgl</div>
      </h2>
    </header>
  );
});
