import { useInViewport } from '../../src/hooks/useInViewport';
import { useWindowSize } from '../../src/hooks/useWindowSize';
import { useCreateRange } from '../../src/hooks/useCreateRange';
import { useCounter } from '../../src/hooks/useCounter';
import { Stack } from '../../src/components/Stack';
import { Stacker } from '../../src/components/Stacker';
import { Space } from '../../src/components/Space';
import { useEffect, useState } from 'react';

const Button = () => <button style={{ width: '100%' }}>Title 1</button>

export default function App() {
  const { observe, unobserve, inViewport } = useInViewport();
  const rangeList = useCreateRange(20);

  const { width } = useWindowSize();

  const [counter, setCounter] = useCounter();

  return (
    <Stack flexDirection="column" padding={16} isMaxHeight>
      <Stacker changeTo="column" onWidthUnder={600}>
        <Button />
        <Button />
        <Space size={200} />
        <Button />
        <Button />
      </Stacker>

      <Space axis="y" size={200} />
      <Button />

      {/* <button onClick={setCounter.increment}>increment</button>
      <button onClick={setCounter.decrement}>decrement</button>

      <button onClick={setCounter.reset}>reset</button> */}
    </Stack>
  );
}
