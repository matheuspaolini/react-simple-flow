import { useEffect, useRef } from 'react';

import { OnCallbackFn } from '.';

export function onCleanup(onCleanupFn: OnCallbackFn) {
  const isMounted = useRef(false);

  // On cleanupp callback function;
  useEffect(() => () => {
    if (isMounted.current) onCleanupFn();

    isMounted.current = true;
  }, [isMounted]);
}
