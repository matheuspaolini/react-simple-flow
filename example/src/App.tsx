import { useInViewport } from '../../src/hooks/useInViewport';
import { useWindowSize } from '../../src/hooks/useWindowSize';
import { useCreateRange } from '../../src/hooks/useCreateRange';
import { For } from '../../src/components/For';
import { useEffect, useState } from 'react';

export default function App() {
  const { observe, unobserve, inViewport } = useInViewport();
  const rangeList = useCreateRange(20);

  const { width } = useWindowSize();

  console.log(width);

  const [count, setCount] = useState(0);

  return (
    <div>

    </div>
  );
}
