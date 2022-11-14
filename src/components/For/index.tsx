import { Fragment, ReactNode, useId } from 'react';

type Props<T> = T;
type Key = string;

type Each<T> = {
  props: Props<T>;
  key: Key;
};

export type ForProps<T> = {
  each: Props<T>[];
  children: (each: Each<T>) => ReactNode;
}

export function For<T>({ each, children }: ForProps<T>) {
  const id = useId();

  if (typeof children !== 'function')
    throw new Error('Children should be a callback function on For component.');

  return (
    <Fragment>
      {each.map((props, index) => children({ props, key: id + index }))}
    </Fragment>
  );
}
