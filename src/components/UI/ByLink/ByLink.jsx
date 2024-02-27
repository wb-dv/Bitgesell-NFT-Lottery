import { memo } from 'react';
import clsx from 'clsx';

import styles from './ByLink.module.scss';

const link =
    window.byLink || 'https://opensea.io/collection/new-bitgesell-road';

export const ByLink = memo(function ByLink({ customClasses }) {
    return (
        <div className={styles.ByLink__wrapper}>
            <a
                className={clsx(styles.ByLink, customClasses)}
                href={link}
                target='_blank'
                rel='noreferrer'
            >
                get WBGL
            </a>
        </div>
    );
});
