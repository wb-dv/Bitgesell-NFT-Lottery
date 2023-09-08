import { useMutation } from '@tanstack/react-query';

import { searchOwner } from '@api';

export const useSearchOwner = () => {
  const {
    mutate: startOwnerSearch,
    data: foundOwner,
    isLoading: isSearchingOwner,
    isSuccess: isOwnerFound,
    reset: resetSearsch,
  } = useMutation({
    mutationFn: searchOwner,
    mutationKey: ['searched-owner'],
  });

  return { startOwnerSearch, foundOwner, isSearchingOwner, isOwnerFound, resetSearsch };
};
