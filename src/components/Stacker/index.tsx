import React, { ForwardedRef, forwardRef, useCallback } from 'react';
import { useWindowSize } from '../../hooks/useWindowSize';

import { Stack } from '../Stack'
import { DynamicStackProps } from './types';

function StackerComponent(props: DynamicStackProps, ref: ForwardedRef<HTMLDivElement>) {
  const { width, height } = useWindowSize();

  const {
    initial = 'row',
    changeTo = 'column',

    onWidthUnder,
    onHeightUnder,

    ...rest
  } = props;

  const getDirection = useCallback(() => {
    if (!width || !height) return null;

    if (onWidthUnder) {
      const isWidthUnder = width < onWidthUnder;

      if (isWidthUnder) return changeTo;
    }

    if (onHeightUnder) {
      const isWidthUnder = height < onHeightUnder;

      if (isWidthUnder) return changeTo;
    }

    return null;
  }, [width, height, onWidthUnder, onHeightUnder]);

  const flexDirection = getDirection() || initial;

  if (initial === changeTo)
    console.warn('Both initial and changeTo properties have the same value.');

  return (
    <Stack ref={ref} {...rest} flexDirection={flexDirection} />
  );
}

export const Stacker = forwardRef(StackerComponent);
