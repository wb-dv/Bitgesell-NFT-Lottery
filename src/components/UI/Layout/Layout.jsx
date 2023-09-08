import { clsx } from 'clsx';
import { memo } from 'react';

import styles from './Layout.module.scss';

export const Layout = memo(function Layout({ children, customClasses }) {
  return <div className={clsx(styles.Layout, customClasses)}>{children}</div>;
});
