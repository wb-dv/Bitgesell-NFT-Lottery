import { useRef, useEffect } from 'react';

import { useMatchMedia } from '@hooks/useMatchMedia';

import styles from './LeadersList.module.scss';
import clsx from 'clsx';

export function LeadersList({ leaders, fetchMoreFn, isOwnerFound }) {
  const observedElemRef = useRef();
  const observerRootRef = useRef();

  const { isPortrait } = useMatchMedia();

  useEffect(() => {
    if (!isPortrait) {
      const loadingObserver = observedElemRef.current;

      const callback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            fetchMoreFn();
          }
        });
      };

      const options = {
        root: observerRootRef.current,
        rootMargin: '0px 0px 10%',
        threshold: 0,
      };

      const observer = new IntersectionObserver(callback, options);

      observer.observe(loadingObserver);

      return () => observer.unobserve(loadingObserver);
    }
  }, [isPortrait, fetchMoreFn]);

  const leaderClasses = clsx(styles.LeadersList__lineItem, styles.LeadersList__leader, {
    [styles.LeadersList__highlight]: isOwnerFound,
  });

  const leaderAdressClasses = clsx(leaderClasses, styles.LeadersList__adress);

  const leaderPointsClasses = clsx(leaderClasses, styles.LeadersList__points);

  const leaderRewardClasses = clsx(leaderClasses, styles.LeadersList__reward);

  const scrollContainerClasses = clsx(styles.LeadersList, styles.LeadersList__scrollContainer, {
    [styles.LeadersList__scrollContainer_noScroll]: isOwnerFound,
  });

  const headerClasses = clsx(styles.LeadersList__line, styles.header);

  return (
    <div className={styles.LeadersList__wrapper}>
      <header className={headerClasses}>
        <div className={clsx(styles.LeadersList__headerItem, styles.LeadersList__adress)}>Address</div>
        <div className={clsx(styles.LeadersList__headerItem, styles.LeadersList__points)}>Points</div>
        <div className={clsx(styles.LeadersList__headerItem, styles.LeadersList__reward)}>Tickets</div>
      </header>
      <ul
        className={scrollContainerClasses}
        ref={observerRootRef}
      >
        {leaders.map(({ address, score, reward }) => {
          const color = '#' + address.slice(-6);

          return (
            <li
              className={styles.LeadersList__line}
              key={address}
            >
              <div className={leaderAdressClasses}>{address}</div>
              <div className={leaderPointsClasses}>{score.toFixed(2)}</div>
              <div className={leaderRewardClasses}>
                <span
                  className={styles.LeadersList__ticketColor}
                  style={{ backgroundColor: color }}
                ></span>
                {reward} TKT
              </div>
            </li>
          );
        })}
        {!isPortrait && <div ref={observedElemRef}></div>}
      </ul>
    </div>
  );
}
