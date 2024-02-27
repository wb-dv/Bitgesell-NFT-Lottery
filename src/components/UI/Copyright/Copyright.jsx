import styles from './Copyright.module.scss';
import clsx from 'clsx';

export function Copyright({ customClasses }) {
    const currYear = new Date().getFullYear();

    return (
        <section className={clsx(styles.Copyright, customClasses)}>
            © 2023-{currYear}
        </section>
    );
}
