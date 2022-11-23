import { useCallback, useEffect, useRef, useState } from 'react';
import { isIntersetionObserver } from '../../utils/isIntersetionObserver';

export type Observe<T> = (element?: T | null) => void;

export const intersectionObserverAPIError =
  'The browser doesn\'t support Intersection Observer, please install a polyfill https://www.npmjs.com/package/intersection-observer.';

export function useInViewport<T extends HTMLElement | null>() {
  const [inViewport, setInViewport] = useState(false);

  const innerRef = useRef<T>();
  const observerRef = useRef<IntersectionObserver>();

  const unobserve = useCallback(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
  }, []);

  const observe = useCallback<Observe<T>>((element) => {
    if (element && element !== innerRef.current) {
      unobserve();

      innerRef.current = element;
    }

    if (observerRef.current && innerRef.current) {
      observerRef.current.observe(innerRef.current as HTMLElement);
    }
  }, []);

  const initObserver = useCallback(() => {
    if (!isIntersetionObserver)
      return console.error(intersectionObserverAPIError);

    if (!innerRef.current) return;

    observerRef.current = new IntersectionObserver((entries) => entries.forEach((item) => {
      const isInsideViewport = item.isIntersecting;
      setInViewport(isInsideViewport);
    }));

    if (innerRef.current) observerRef.current.observe(innerRef.current as HTMLElement);

    observe();
  }, [observe]);

  useEffect(() => {
    initObserver();

    return () => {
      observerRef.current?.disconnect()
    }
  }, [initObserver]);

  return { observe, unobserve, inViewport };
}
