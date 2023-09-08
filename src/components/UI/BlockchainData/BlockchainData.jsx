import { memo } from 'react';
import { useQuery } from '@tanstack/react-query';
import clsx from 'clsx';

import { baseRefetchInterval, getBlockchainData } from '@api';

import styles from './BlockchainData.module.scss';
import { data } from 'autoprefixer';

export const BlockchainData = memo(function BlockchainData({ titleClass = '', customClasses = '' }) {
  const { data, isSuccess, isLoading } = useQuery({
    queryFn: getBlockchainData,
    queryKey: ['blockchainData'],
    refetchInterval: baseRefetchInterval,
  });

  return (
    <div className={clsx(styles.BlockchainData, customClasses)}>
      <h2 className={clsx(styles.BlockchainData__title, titleClass)}>Blockchain data</h2>
      <div className={styles.BlockchainData__wrapper}>
        <div className={styles.BlockchainData__winningBlock}>
          <strong className={styles.BlockchainData__strong}>Winning block </strong>
          {isLoading ? '?' : isSuccess ? data.winning_block : '-'}
        </div>
        <div className={styles.BlockchainData__beforeBlock}>
          <strong className={styles.BlockchainData__strong}>Blocks before the draw </strong>
          {isLoading ? '?' : isSuccess ? data.blocks_before : '-'}
        </div>
      </div>
    </div>
  );
});
