import { useQuery } from '@tanstack/react-query';
import { baseRefetchInterval, getRoundNumber, getWBGL } from '@api';

import { ByLink } from '@UI/ByLink/ByLink';
import { WBGLCounter } from '@UI/WBGLCounter/WBGLCounter';
import { RoundCounter } from '@UI/RoundCounter/RoundCounter';

import styles from './InfoBlock.module.scss';

export function InfoBlock() {
  const {
    data: WBGLCount,
    isLoading,
    isSuccess,
  } = useQuery({
    queryFn: getWBGL,
    queryKey: ['WBGL'],
    refetchInterval: baseRefetchInterval,
  });

  const {
    data: roundNumber,
    isLoading: isRoundNumberLoading,
    isSuccess: isRoundNumberSuccess,
  } = useQuery({
    queryFn: getRoundNumber,
    queryKey: ['roundNumber'],
    refetchInterval: baseRefetchInterval,
  });

  return (
    <section className={styles.InfoBlock}>
      <RoundCounter round={isRoundNumberLoading ? '?' : isRoundNumberSuccess ? roundNumber : 0} />
      <WBGLCounter count={isLoading ? '?' : isSuccess ? WBGLCount : 0} />
      <ByLink />
    </section>
  );
}
