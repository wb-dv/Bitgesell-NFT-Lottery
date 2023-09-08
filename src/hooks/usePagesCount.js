import { useQuery } from '@tanstack/react-query';

import { baseRefetchInterval, getPagesCount } from '@api';

export const usePagesCount = () => {
  const {
    data: pagesCount,
    isLoading: pagesCountLoading,
    isSuccess: pagesCountGetted,
  } = useQuery({
    queryFn: getPagesCount,
    queryKey: ['pages-count'],
    refetchInterval: baseRefetchInterval,
  });

  return { pagesCount, pagesCountLoading, pagesCountGetted };
};
