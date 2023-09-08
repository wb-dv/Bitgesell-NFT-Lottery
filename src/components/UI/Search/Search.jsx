import { memo, useRef, useId, useState } from 'react';
import clsx from 'clsx';

import styles from './Search.module.scss';

export const Search = memo(function Search({ customInputClasses, customWrapperClasses, label, searchFn = () => {}, validFn = () => true, onClear = () => {}, placeholder = 'insert your address and click search' }) {
  const searchRef = useRef();
  const searchId = useId();
  const [validError, setValidError] = useState(false);

  const resetValidErrorAndSearch = () => {
    if (searchRef.current.value === '') {
      onClear();
      setValidError(false);
    }
  };

  const clearInput = () => {
    onClear();
    searchRef.current.value = '';
    setValidError(false);
  };

  const search = () => {
    if (validFn(searchRef.current.value)) {
      searchFn(searchRef.current.value);
      setValidError(false);
    } else {
      setValidError(true);
    }
  };

  const searchOnEnter = (e) => {
    if (e.key === 'Enter') search();
  };

  return (
    <div className={clsx(styles.Search__wrapper, customWrapperClasses)}>
      <button
        className={styles.Search__loupe}
        type="button"
        aria-label="search"
        onClick={search}
      />
      <label
        className={styles.Search__hiddenLabel}
        htmlFor={searchId}
      >
        {label}
      </label>
      <input
        className={clsx(
          styles.Search,
          {
            [styles.Search__error]: validError,
          },
          customInputClasses
        )}
        id={searchId}
        ref={searchRef}
        onKeyUp={searchOnEnter}
        onInput={resetValidErrorAndSearch}
        name="search-input"
        placeholder={placeholder}
      />
      <button
        className={styles.Search__clear}
        type="button"
        onClick={clearInput}
        aria-label="clear input"
      />
    </div>
  );
});
