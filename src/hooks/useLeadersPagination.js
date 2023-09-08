import { useCallback, useEffect, useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import { baseRefetchInterval, getOwners } from '@api';

export const useLeadersPagination = (pagesCount, enabled = true) => {
  const [currPage, setCurrPage] = useState(1);

  const queryClient = useQueryClient();

  const setNextPage = useCallback(() => {
    setCurrPage((currPage) => (currPage < pagesCount ? ++currPage : currPage));
  }, [pagesCount]);

  const setPrevPage = useCallback(() => {
    setCurrPage((currPage) => (currPage > 1 ? --currPage : currPage));
  }, [pagesCount]);

  const {
    data: leadersPage,
    isFetching: leadersPageLoading,
    isSuccess: leadersPageLoaded,
    isPreviousData,
  } = useQuery({
    queryFn: () => getOwners(currPage),
    queryKey: ['leaders', currPage],
    refetchInterval: baseRefetchInterval,
    keepPreviousData: true,
    enabled: enabled,
  });

  useEffect(() => {
    if (!isPreviousData && currPage < pagesCount) {
      queryClient.prefetchQuery({
        queryFn: () => getOwners(currPage + 1),
        queryKey: ['leaders', currPage + 1],
      });
    }
  }, [isPreviousData, currPage, pagesCount]);

  return {
    leadersPage,
    leadersPageLoading,
    leadersPageLoaded,
    isPreviousData,
    setNextPage,
    setPrevPage,
    currPage,
  };
};
