import styles from './Spinner.module.scss';

export function Spinner() {
  return (
    <div className={styles.Spinner__wrapper}>
      <span className={styles.Spinner}></span>
    </div>
  );
}
