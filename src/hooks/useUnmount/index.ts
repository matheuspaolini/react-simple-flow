import { useEffect } from 'react';

export function useUnmount(onUnmount: () => void) {
  useEffect(() => {
    return () => onUnmount();
  }, []);
}
