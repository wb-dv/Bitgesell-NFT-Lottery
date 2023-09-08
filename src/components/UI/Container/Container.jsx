import { memo } from 'react';

import styles from './Container.module.scss';
import clsx from 'clsx';

export const Container = memo(function Container({ children, customClasses }) {
  return <main className={clsx(styles.Container, customClasses)}>{children}</main>;
});
