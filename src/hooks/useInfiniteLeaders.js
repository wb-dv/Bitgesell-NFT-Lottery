import { useInfiniteQuery } from '@tanstack/react-query';

import { baseRefetchInterval, getOwners } from '@api';

export const useInfiniteLeaders = (pagesCount, enabled = true) => {
  const {
    data: allLeaders,
    isFetching: allLeadersLoading,
    isSuccess: allLeadersLoaded,
    fetchNextPage,
  } = useInfiniteQuery({
    queryFn: ({ pageParam = 1 }) => getOwners(pageParam),
    queryKey: ['leaders'],
    refetchInterval: baseRefetchInterval,
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      if (!pagesCount || allPages.length === pagesCount) return;
      return allPages.length + 1;
    },
    select: (data) => data.pages.flat(),
    enabled: enabled,
  });

  return {
    allLeaders: allLeaders,
    allLeadersLoaded,
    allLeadersLoading,
    fetchMoreLeaders: fetchNextPage,
  };
};
