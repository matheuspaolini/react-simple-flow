import { useState } from 'react';

type SetValues = {
  toTrue: () => void;
  toFalse: () => void;
  toToggle: () => void;
}

type UseBooleanOutput = [boolean, SetValues];

export function useBoolean(initial?: boolean): UseBooleanOutput {
  const [value, setValue] = useState(!!initial);

  const toTrue = () => setValue(true);
  const toFalse = () => setValue(false);
  const toToggle = () => setValue((previous) => !previous);

  const setValues = { toTrue, toFalse, toToggle };

  return [value, setValues];
}
