import { ShowWhenWidth } from './components/ShowWhenWidth';
import { useWindowSize } from './hooks/useWindowSize';

export default function App() {
  const { width } = useWindowSize();

  return (
    <>
      <ShowWhenWidth isOver={1280} isEquals={1100} isUnder={1024}>
        <h1>points: isOver: 1280 | isEquals: 666 | isUnder: 1024</h1>
        <p>{width}</p>
      </ShowWhenWidth>
    </>
  );
}
