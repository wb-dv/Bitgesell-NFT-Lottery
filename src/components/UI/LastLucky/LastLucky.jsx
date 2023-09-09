import { memo, Fragment } from 'react';
import { useQuery } from '@tanstack/react-query';
import clsx from 'clsx';

import { baseRefetchInterval, getLastLucky, getTicketsCount } from '@api';

import { separateHashByWinnersNumber } from '@helpers/separateHashByWinnersNumber';

import styles from './LastLucky.module.scss';

export const LastLucky = memo(function LastLucky({ customClasses = '' }) {
  const { data: ticketsAmount, isSuccess: ticketsAmountSuccess } = useQuery({
    queryFn: getTicketsCount,
    queryKey: ['ticketsCount'],
    refetchInterval: baseRefetchInterval,
  });

  const { data, isSuccess, isLoading } = useQuery({
    queryFn: getLastLucky,
    queryKey: ['lastLuckyHash'],
    refetchInterval: baseRefetchInterval,
    enabled: ticketsAmountSuccess,
  });

  const luckyHash = isLoading ? '?' : isSuccess && ticketsAmountSuccess ? separateHashByWinnersNumber(data.hash, ticketsAmount) : '-';
  const url = isSuccess ? data.href : '#';

  return (
    <div className={clsx(styles.LastLucky, customClasses)}>
      <strong className={styles.LastLucky__strong}>Last lucky hash</strong>
      <a
        className={styles.LastLucky__link}
        href={url || '#'}
        target="_blank"
        rel="noreferrer"
      >
        {Array.isArray(luckyHash.separatedHash)
          ? luckyHash.separatedHash.map((el, i) => {
              if (luckyHash.winnerNumbersIdxs.has(i)) {
                const winTicketNum = 4 - Math.ceil(luckyHash.winnerNumberCount / luckyHash.numberDigit);

                const winClass = clsx(styles.LastLucky__winNum, styles['LastLucky__winNum_' + winTicketNum]);

                luckyHash.winnerNumberCount--;

                return (
                  <span
                    key={i}
                    className={winClass}
                  >
                    {el}
                  </span>
                );
              } else {
                return <Fragment key={i}>{el}</Fragment>;
              }
            })
          : '-'}
      </a>
    </div>
  );
});
