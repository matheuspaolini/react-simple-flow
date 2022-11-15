import { Fragment, ReactNode, useId } from 'react';

type Each<T> = { item: T; index: number; };

export type ForProps<T> = {
  each: T[];
  children: (item: T, index: number) => ReactNode;
}

export function For<T>({ each, children }: ForProps<T>) {
  const id = useId();

  if (typeof children !== 'function')
    throw new Error('Children should be a callback function on For component.');

  return (
    <Fragment>
      {each.map((item, index) => children(item, index))}
    </Fragment>
  );
}
