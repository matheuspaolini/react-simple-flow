import { useState } from 'react';

type SetValue = {
  on: () => void;
  off: () => void;
  toggle: () => void;
}

type UseBooleanOutput = [boolean, SetValue];

export function useBoolean(initial?: boolean): UseBooleanOutput {
  const [value, setValue] = useState(initial || false);

  const on = () => setValue(true);
  const off = () => setValue(false);
  const toggle = () => setValue((previous) => !previous);

  const setValues = { on, off, toggle };

  return [value, setValues];
}
