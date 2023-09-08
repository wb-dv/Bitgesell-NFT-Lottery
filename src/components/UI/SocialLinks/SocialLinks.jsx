import { memo } from 'react';
import clsx from 'clsx';

import { SocialLink } from '../SocialLink/SocialLink';

import styles from './SocialLinks.module.scss';

const socials = {
  twitter: {
    type: 'x',
    href: 'https://twitter.com/myluckbitcoin',
  },
  site: {
    type: 'site',
    href: 'https://bitgesell.ca/',
  },
  telegram: {
    type: 'telegram',
    href: 'https://t.me/bitgesellofficial',
  },
};

export const SocialLinks = memo(function SocialLinks({ customClasses = '' }) {
  return (
    <div className={clsx(styles.SocialLinks, customClasses)}>
      <SocialLink
        type={socials.twitter.type}
        href={socials.twitter.href}
      />
      <SocialLink
        type={socials.site.type}
        href={socials.site.href}
      />
      <SocialLink
        type={socials.telegram.type}
        href={socials.telegram.href}
      />
    </div>
  );
});
