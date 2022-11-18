import { useInViewport } from '../../src/hooks/useInViewport';
import { useWindowSize } from '../../src/hooks/useWindowSize';
import { useCreateRange } from '../../src/hooks/useCreateRange';
import { useCounter } from '../../src/hooks/useCounter';
import { Stack } from '../../src/components/Stack';
import { useEffect, useState } from 'react';

export default function App() {
  const { observe, unobserve, inViewport } = useInViewport();
  const rangeList = useCreateRange(20);

  const { width } = useWindowSize();

  const [counter, setCounter] = useCounter();

  return (
    <Stack flexDirection="column" padding={16} isMaxHeight>
      <div>Counter: {counter}</div>
      <div>Title 1</div>
      <div>Title 2</div>
      <div>Title 3</div>
      <div>Title 4</div>

      <button onClick={setCounter.increment}>increment</button>
      <button onClick={setCounter.decrement}>decrement</button>

      <button onClick={setCounter.reset}>reset</button>
    </Stack>
  );
}
