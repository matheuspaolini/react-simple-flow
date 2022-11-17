import { useState, useEffect, useRef } from 'react';

type Size = {
  width?: number;
  height?: number;
}

const initial = {
  width: undefined,
  height: undefined
} as Size;

export function useWindowSize(): Size {
  const onResizeRef = useRef<() => void>();

  const [windowSize, setWindowSize] = useState(initial);

  useEffect(() => {
    onResizeRef.current = () => setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });

    window.addEventListener('resize', onResizeRef.current);

    onResizeRef.current();

    return () => {
      if (onResizeRef.current) {
        window.removeEventListener('resize', onResizeRef.current);
      }
    }
  }, []);

  return windowSize;
}
