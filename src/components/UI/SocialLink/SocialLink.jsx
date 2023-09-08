import { memo } from 'react';

import styles from './SocialLink.module.scss';
import clsx from 'clsx';

export const SocialLink = memo(function SocialLink({ type, customClasses, children, ...props }) {
  return (
    <a
      className={clsx(
        styles.SocialLink,
        {
          [styles[type]]: type,
        },
        customClasses
      )}
      {...props}
      target="_blank"
      rel="noreferrer"
      aria-label={`link to ${type}`}
    >
      {children}
    </a>
  );
});
