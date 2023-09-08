import clsx from 'clsx';
import styles from './Token.module.scss';

export function Token({ level, idx, count, customClasses }) {
  return (
    <li
      className={clsx(
        styles.Token,
        styles[`Token__${level}`],
        {
          [styles[`Token__${level}_${idx + 1}`]]: count > 0,
        },
        customClasses
      )}
      data-count={count}
    ></li>
  );
}
