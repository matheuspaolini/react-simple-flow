import { useMemo } from 'react';

export function useCreateRange(range: number) {
  const rangeList = useMemo(
    () => new Array(range).fill(null).map((_, i) => i), []
  );

  return rangeList;
}
