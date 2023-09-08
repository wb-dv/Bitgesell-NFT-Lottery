import { memo } from 'react';

import styles from './MainTitle.module.scss';
import clsx from 'clsx';

export const MainTitle = memo(function MainTitle({ customClasses }) {
  return (
    <header className={clsx(styles.MainTitle, customClasses)}>
      <h1 className={styles.MainTitle__h1}>
        Bitgesell <strong className={styles.MainTitle__strong}>NFT Lottery</strong>
      </h1>
    </header>
  );
});
