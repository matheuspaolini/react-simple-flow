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
  const onCleanup = () => {
    isMounted.current && onCleanupFn();
    isMounted.current = true;
  }

  useEffect(() => onCleanup, [isMounted]);
}

export function useLifecycle() {
  return { onMount, onCleanup };
}
