import React, { CSSProperties, ForwardedRef, forwardRef, useMemo } from 'react';
import { SpaceProps } from './types';
import { getHeight, getWidth } from './utils';

function SpaceComponent(props: SpaceProps, ref: ForwardedRef<HTMLSpanElement>) {
  const { axis = 'x', size, style, ...rest } = props;

  const width = getWidth({ axis, size });
  const height = getHeight({ axis, size });

  const styles = useMemo(() => ({
    display: 'block',
    width,
    minWidth: width,
    height,
    minHeight: height,

    ...style,
  }), [width, height, style]) as CSSProperties;

  return (
    <span ref={ref} style={styles} {...rest} />
  );
}

export const Space = forwardRef(SpaceComponent);
