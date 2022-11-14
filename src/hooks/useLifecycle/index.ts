import { useEffect, useRef } from 'react';

type OnCallbackFn = () => void;

function onMount(onMountFn: OnCallbackFn) {
  useEffect(() => {
    // On mount callback function;
    onMountFn();
  }, []);
}

function onCleanup(onCleanupFn: OnCallbackFn) {
  const isMounted = useRef(false);

  // On cleanupp callback function;
  useEffect(() => () => {
    isMounted.current && onCleanupFn();
    isMounted.current = true;
  }, [isMounted]);
}

export function useLifecycle() {
  return { onMount, onCleanup };
}
