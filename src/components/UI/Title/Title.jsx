import { memo } from 'react';
import clsx from 'clsx';

import styles from './Title.module.scss';

export const Title = memo(function Title({ children, customClasses }) {
  return <h2 className={clsx(styles.Title, customClasses)}>{children}</h2>;
});
