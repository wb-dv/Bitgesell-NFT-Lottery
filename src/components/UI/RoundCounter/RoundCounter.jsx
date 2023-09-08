import { memo } from 'react';
import clsx from 'clsx';

import styles from './RoundCounter.module.scss';

export const RoundCounter = memo(function RoundCounter({ round, customClasses }) {
  return (
    <div className={clsx(styles.RoundCounter, customClasses)}>
      <strong className={styles.RoundCounter__strong}>Round </strong>#{round}
    </div>
  );
});
