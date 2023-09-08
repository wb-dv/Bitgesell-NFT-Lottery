import { memo } from 'react';
import styles from './Pagination.module.scss';

export const Pagination = memo(function Pagination({
  fetchPrevFn, 
  fetchNextFn, 
  pages, 
  currPage, 
  prevBthDisabled, 
  nextBthDisabled
}) {
  const buttonPrevClasses = [styles.Pagination__button, styles.Pagination__button_prev].join(' ');
  const buttonNextClasses = [styles.Pagination__button, styles.Pagination__button_next].join(' ');

  return (
    <div className={styles.Pagination}>
      <button 
        onClick={fetchPrevFn}
        disabled={prevBthDisabled}
        className={buttonPrevClasses} 
        type="button" 
        aria-label="previous leaderboard page" 
      />
      {currPage}.....{pages}
      <button
        onClick={fetchNextFn}
        disabled={nextBthDisabled}
        className={buttonNextClasses} 
        type="button" 
        aria-label="next leaderboard page" 
      />
    </div>
  );
})
