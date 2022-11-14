import { Portal } from 'components/Portal';
import { useBoolean } from 'hooks/useBoolean';
import { useLifecycle } from 'hooks/useLifecycle';
import { CSSProperties, useEffect, useState } from 'react';
import { For } from './components/For';

import { Hide } from './components/Hide';
import { Show } from './components/Show';

const styles: CSSProperties = {
  width: 'fit-content',
  margin: '0 auto',
  height: '100%',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
};

const personList = [
  { name: 'Matheus', age: 21 },
  { name: 'Chrystopher', age: 22 },
  { name: 'Pedro', age: 20 },
];

const numberList = new Array(8).fill(null).map((_, i) => i);

const ToUnmount = () => {
  const { onCleanup } = useLifecycle();

  onCleanup(() => console.log('Unmountted!'));

  return (
    <div>ToUnmount component.</div>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useBoolean();
  const [isRender, setIsRender] = useBoolean(true);

  useEffect(() => {
    if (!isLoading) return;

    setTimeout(() => setIsLoading.toFalse(), 3000);
  }, [isLoading]);

  return (
    <div style={styles}>
      <button onClick={() => setIsLoading.toToggle()}>
        isLoading: {isLoading.toString()}
      </button>

      <button onClick={() => setIsRender.toFalse()}>
        ToUnmount
      </button>

      {isRender && <ToUnmount />}

      <Portal>
        <small>
          <b>This node was appended on body.</b>
        </small>
      </Portal>

      {
        isLoading && (
          <Portal>
            <small>
              <b>This node will keep appended on body while isLoading is equals to true.</b>
            </small>
          </Portal>
        )
      }

      <Show type="width" isOver={600}>
        <h3>Show when width is over: 600px.</h3>
      </Show>

      <Hide type="width" isUnder={800}>
        <h3>Hide when width is under: 800px.</h3>
      </Hide>

      <hr />

      <Show type="height" isOver={600}>
        <h3>Show when height is over: 600px.</h3>
      </Show>

      <Hide type="height" isUnder={800}>
        <h3>Hide when height is under: 800px.</h3>
      </Hide>

      <hr />

      <Show inCase={!isLoading}>
        <button onClick={() => setIsLoading.toTrue()}>
          Set isLoading to true for 3 seconds
        </button>
      </Show>

      <Show inCase={isLoading}>
        <div>Only shows when isLoading is equals to true.</div>
      </Show>

      <For each={personList}>
        {(person) => (
          <div key={person.key}>
            <p>
              <b>Name:</b> {person.props.name}
            </p>
            <p>
              <b>Age:</b> {person.props.age}
            </p>
          </div>
        )}
      </For>

      <hr />

      <For each={numberList}>
        {(number) => <small key={number.key}>{number.props}</small>}
      </For>
    </div >
  );
}
