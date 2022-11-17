import { useInViewport } from '../../src/hooks/useInViewport';
import { useWindowSize } from '../../src/hooks/useWindowSize';
import { useCreateRange } from '../../src/hooks/useCreateRange';
import { Stack } from '../../src/components/Stack';
import { useEffect, useState } from 'react';

export default function App() {
  const { observe, unobserve, inViewport } = useInViewport();
  const rangeList = useCreateRange(20);

  const { width } = useWindowSize();

  console.log(width);

  const [count, setCount] = useState(0);

  return (
    <Stack flexDirection="column" padding={16} isMaxHeight>
      <div>Title 1</div>
      <div>Title 2</div>
      <div>Title 3</div>
      <div>Title 4</div>
    </Stack>
  );
}
