import React, { CSSProperties, HTMLAttributes, useCallback, useMemo } from 'react';

type CustomProps = {
  isMaxWidth?: boolean;
  isMaxHeight?: boolean;
  isMaxSize?: boolean;
}

type PaddingStyles = {
  padding?: CSSProperties['padding'];
  paddingLeft?: CSSProperties['paddingLeft'];
  paddingRight?: CSSProperties['paddingRight'];
  paddingTop?: CSSProperties['paddingTop'];
  paddingBottom?: CSSProperties['paddingBottom'];
}

type MarginStyles = {
  margin?: CSSProperties['margin'];
  marginLeft?: CSSProperties['marginLeft'];
  marginRight?: CSSProperties['marginRight'];
  marginTop?: CSSProperties['marginTop'];
  marginBottom?: CSSProperties['marginBottom'];
}

type FlexStyles = {
  flexDirection?: CSSProperties['flexDirection'];
  alignItems?: CSSProperties['alignItems'];
  justifyContent?: CSSProperties['justifyContent'];
  gap?: CSSProperties['gap'];
}

type SizeStyles = {
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
}

type Props =
  SizeStyles &
  FlexStyles &
  PaddingStyles &
  MarginStyles &
  CustomProps &
  HTMLAttributes<HTMLDivElement>;

export function Stack({ ...props }: Props) {
  const {
    alignItems,
    justifyContent,
    flexDirection,
    width,
    height,
    gap = 16,

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
  }), []) as CSSProperties;

  return (
    <div style={styles} {...rest} />
  );
}
