import { memo } from 'react';
import clsx from 'clsx';

import { LastLucky } from '../LastLucky/LastLucky';
import { LastPayment } from '../LastPayment/LastPayment';

import styles from './Lucky.module.scss';

export const Lucky = memo(function Lucky({ titleClass = '', customClasses = '' }) {
  return (
    <div className={clsx(styles.Lucky, customClasses)}>
      <h2 className={clsx(styles.Lucky__title, titleClass)}>Lucky</h2>
      <LastLucky customClasses={styles.Lucky__last} />
      <LastPayment />
    </div>
  );
});
