import { useEffect } from 'react';

export function useUnmount(onUnmount: () => void) {
  useEffect(() => {
    return () => {
      if (typeof onUnmount === 'function') {
        onUnmount();
      }
    };
  }, []);
}
