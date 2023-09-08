import { useLayoutEffect, useState } from 'react';

const queries = ['(max-width: 992px), (max-aspect-ratio: 1 / 0.9)'];

const nameQueries = ['isPortrait'];

export const useMatchMedia = () => {
  const matchMediaLists = queries.map((query) => matchMedia(query));

  const getQueriesState = () => matchMediaLists.map((list) => list.matches);

  const [queriesState, setQueriesState] = useState(getQueriesState);

  useLayoutEffect(() => {
    const changeQueryHandler = () => setQueriesState(getQueriesState);

    matchMediaLists.forEach((list) => list.addEventListener('change', changeQueryHandler));

    return () => {
      matchMediaLists.forEach((list) => {
        list.removeEventListener('change', changeQueryHandler);
      });
    };
  }, []);

  return nameQueries.reduce((result, name, i) => {
    result[name] = queriesState[i];
    return result;
  }, {});
};
