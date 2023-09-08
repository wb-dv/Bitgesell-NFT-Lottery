import { useQuery } from '@tanstack/react-query';

import { baseRefetchInterval, getLastPayment } from '@api';

import styles from './LastPayment.module.scss';

export function LastPayment() {
  const { data, isLoading, isSuccess } = useQuery({
    queryFn: getLastPayment,
    queryKey: ['last-payment'],
    refetchInterval: baseRefetchInterval,
  });

  const transaction = isLoading ? '?' : isSuccess ? data.hash : '-';
  const url = isSuccess ? data.href : '#';

  return (
    <section className={styles.LastPayment}>
      <strong className={styles.LastPayment__strong}>Last payment </strong>
      <a
        className={styles.LastPayment__link}
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        {transaction}
      </a>
    </section>
  );
}
