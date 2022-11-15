import { onMount } from './onMount';
import { onCleanup } from './onCleanup';

export type OnCallbackFn = () => void;

export function useLifecycle() {
  return { onMount, onCleanup };
}
