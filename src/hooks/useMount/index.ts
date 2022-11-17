import { useEffect } from 'react';

export function useMount(onMount: () => void) {
  useEffect(() => {
    if (typeof onMount === 'function') {
      onMount();
    };
  }, []);
}
