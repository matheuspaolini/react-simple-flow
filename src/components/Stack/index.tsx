import React, { CSSProperties, ForwardedRef, forwardRef, useCallback, useMemo } from 'react';

import { StackProps } from './types';

function StackComponent(props: StackProps, ref: ForwardedRef<HTMLDivElement>) {
  const {
    alignItems,
    justifyContent,
    flexDirection,
    gap = 16,

    width,
    maxWidth,
    height,
    maxHeight,

    padding,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,

    margin,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,

    isMaxHeight,
    isMaxSize,
    isMaxWidth,

    style,

    ...rest
  } = props;

  const createSizeStyle = useCallback(() => {
    const sizeStyles: CSSProperties = { width, height };

    if (isMaxSize) {
      sizeStyles.width = '100%';
      sizeStyles.height = '100%';
    }

    if (isMaxWidth)
      sizeStyles.width = '100%';

    if (isMaxHeight)
      sizeStyles.height = '100%';

    return sizeStyles;
  }, [width, height]);

  const styles = useMemo(() => ({
    display: 'flex',
    alignItems,
    justifyContent,
    flexDirection,
    width,
    height,
    maxWidth,
    maxHeight,
    gap,

    padding,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,

    margin,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,

    ...createSizeStyle(),
    ...style
  }), [
    alignItems,
    justifyContent,
    flexDirection,
    width,
    height,
    maxWidth,
    maxHeight,
    gap,

    padding,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,

    margin,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,

    createSizeStyle,
    style
  ]) as CSSProperties;

  return (
    <div ref={ref} style={styles} {...rest} />
  );
}

export const Stack = forwardRef(StackComponent);
