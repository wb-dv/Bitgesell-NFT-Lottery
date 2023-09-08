import { useQuery } from '@tanstack/react-query';

import { baseRefetchInterval, getTickets } from '@api';

export const useGetTickets = () => {
  const { data, isSuccess, isLoading } = useQuery({
    queryFn: getTickets,
    queryKey: ['tickets'],
    refetchInterval: baseRefetchInterval,
  });

  return {
    ticketsLoading: isLoading,
    ticketsSuccess: isSuccess,
    tickets: data?.tickets,
    addressMap: data?.map,
    ticketsAmount: data?.tickets?.length,
  };
};
