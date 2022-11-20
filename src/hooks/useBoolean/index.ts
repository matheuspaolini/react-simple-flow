import { useMemo, useState } from 'react';

type SetValue = {
  on: () => void;
  off: () => void;
  toggle: () => void;
}

type UseBooleanOutput = [boolean, SetValue];

export function useBoolean(initial: boolean = false): UseBooleanOutput {
  const [boolean, setBoolean] = useState(initial);

  const callbacks = useMemo(() => ({
    on: () => setBoolean(true),
    off: () => setBoolean(false),
    toggle: () => setBoolean((previous) => !previous),
  }), []);;

  return [boolean, callbacks];
}
