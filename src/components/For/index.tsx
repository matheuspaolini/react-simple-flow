import React, { Fragment, ReactNode } from 'react';

export type ForProps<T> = {
  each: T[];
  children: (item: T, index: number) => ReactNode;
}

export function For<T>({ each, children }: ForProps<T>) {
  if (typeof children !== 'function')
    throw new Error('Children should be a callback function on For component.');

  return (
    <Fragment>
      {each.map((item, index) => children(item, index))}
    </Fragment>
  );
}
