import { memo } from 'react';
import { useQuery } from '@tanstack/react-query';
import clsx from 'clsx';

import { baseRefetchInterval, getLastWinners } from '@api';

import styles from './Winners.module.scss';

export const Winners = memo(function Winners({ customClasses = '', titleClass = '' }) {
  const {
    data: winners,
    isSuccess,
    isLoading,
  } = useQuery({
    queryFn: getLastWinners,
    queryKey: ['lastWinners'],
    refetchInterval: baseRefetchInterval,
  });

  return (
    <div className={clsx(styles.Winners, customClasses)}>
      <h2 className={clsx(styles.Winners__title, titleClass)}>Round winners</h2>
      <ul className={styles.Winners__list}>
        {isLoading ? (
          '?'
        ) : isSuccess ? (
          winners.map((winner, i) => (
            <li
              key={i}
              className={styles.Winners__item}
            >
              {winner}
            </li>
          ))
        ) : (
          <li className={styles.Winners__item}>no winners</li>
        )}
      </ul>
    </div>
  );
});
