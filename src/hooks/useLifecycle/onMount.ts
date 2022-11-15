import { useEffect } from 'react';
import { OnCallbackFn } from '.';

export function onMount(onMountFn: OnCallbackFn) {
  useEffect(() => {
    // On mount callback function;
    onMountFn();
  }, []);
}
