import { memo } from 'react';
import clsx from 'clsx';

import styles from './ByLink.module.scss';

export const ByLink = memo(function ByLink({ customClasses }) {
  return (
    <div className={styles.ByLink__wrapper}>
      <a
        className={clsx(styles.ByLink, customClasses)}
        href="https://opensea.io/collection/bitgesell-road"
        target="_blank"
        rel="noreferrer"
      >
        get WBGL
      </a>
    </div>
  );
});
