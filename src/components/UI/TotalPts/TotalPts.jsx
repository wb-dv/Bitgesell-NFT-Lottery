import clsx from 'clsx';

import styles from './TotalPts.module.scss';

export function TotalPts({ pts, customClasses }) {
  return (
    <div className={clsx(styles.TotalPts, customClasses)}>
      total <strong className={styles.TotalPts__count}>{pts}</strong> pts
    </div>
  );
}
