import { useCallback } from 'react';

export const useValidAddress = () => {
  return useCallback((address) => {
    return address.trim().length === 42;
  }, []);
};
