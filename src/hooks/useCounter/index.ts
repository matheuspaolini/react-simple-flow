import { useCallback, useMemo, useState } from 'react';

// TODO:
// - Cleanup code.
// - Add Docs.

const isInitialLowerThanMinimumMessage = 'Initial value can\'t be lower than minimum.';
const isInitialHigherThanMaximumMessage = 'Initial value can\'t be higher than maximum.';
const isMaximumLowerThanMinimumMessage = 'Maximum can\'t be lower than minimum.';
const isMinimumHigherThanMaximumMessage = 'Minimum can\'t be higher than maximum.';

type IsLimit = {
  amount: number;
  isIncrement?: boolean;
}

type CounterProps = {
  initial?: number;
  isCap?: boolean;
  minimum?: number;
  maximum?: number;
}

type CounterControls = {
  incrementBy: (amount: number) => void;
  decrementBy: (amount: number) => void;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

type Props = CounterProps;

type UseCounterOutput = readonly [number, CounterControls];

export function useCounter({ initial = 0, minimum, maximum, isCap }: Props = {}): UseCounterOutput {
  const [counter, setCounter] = useState(initial);

  const isMinimum = typeof minimum === 'number';
  const isMaximum = typeof maximum === 'number';

  const isMinimumCap = counter === minimum;
  const isMaximumCap = counter === maximum;

  const isInitialLowerThanMinimum = isMinimum && initial < minimum;
  const isInitialHigherThanMaximum = isMaximum && initial > maximum;
  const isMaximumLowerThanMinimum = isMaximum && isMinimum && maximum < minimum;
  const isMinimumHigherThanMaximum = isMaximum && isMinimum && minimum > maximum;

  if (isInitialLowerThanMinimum)
    throw Error(isInitialLowerThanMinimumMessage);

  if (isInitialHigherThanMaximum)
    throw Error(isInitialHigherThanMaximumMessage);

  if (isMaximumLowerThanMinimum)
    throw Error(isMaximumLowerThanMinimumMessage);

  if (isMinimumHigherThanMaximum)
    throw Error(isMinimumHigherThanMaximumMessage);

  const setMinimumCap = useCallback(() => {
    if (!minimum) return;
    setCounter(minimum);
  }, [minimum]);

  const setMaximumCap = useCallback(() => {
    if (!maximum) return;
    setCounter(maximum);
  }, [maximum]);

  const isLimit = useCallback(({ amount, isIncrement }: IsLimit) => {
    const isAmountLowerThanMinimum = isMinimum && (counter - amount < minimum);
    const isAmountGreaterThanMaximum = isMaximum && (counter + amount > maximum);

    if (isIncrement) {
      if (isCap && isAmountGreaterThanMaximum) {
        setMaximumCap();
        return true;
      }

      if (isAmountGreaterThanMaximum) return true;
    }

    if (!isIncrement) {
      if (isCap && isAmountLowerThanMinimum) {
        setMinimumCap();
        return true;
      }

      if (isAmountLowerThanMinimum) return true;
    }

    if ((!isIncrement && isMinimumCap) || (isIncrement && isMaximumCap)) return true;

    return false;
  }, [counter, minimum, maximum, isCap]);

  const incrementBy = useCallback((amount: number) => {
    if (isLimit({ amount, isIncrement: true })) return;

    setCounter((previous) => previous + amount);
  }, [isLimit]);

  const decrementBy = useCallback((amount: number) => {
    if (isLimit({ amount, isIncrement: false })) return;

    setCounter((previous) => previous - amount);
  }, [isLimit]);

  const increment = useCallback(() => {
    incrementBy(1)
  }, [incrementBy]);

  const decrement = useCallback(() => {
    decrementBy(1);
  }, [decrementBy]);

  const reset = useCallback(() => {
    setCounter(initial);
  }, []);

  const counterControls = useMemo(() => ({
    incrementBy,
    decrementBy,
    increment,
    decrement,
    reset
  }), [incrementBy, decrementBy, increment, decrement, reset]);

  return [counter, counterControls];
}
