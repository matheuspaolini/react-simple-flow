import { ReactNode } from 'react';
import { useWindowSize } from 'hooks/useWindowSize';

// TODO: Improve types;
// TODO: Remove hard-code;

export type HideProps = {
  children?: ReactNode;

  type?: 'width' | 'height';

  inCase?: boolean;

  isUnder?: number;
  isOver?: number;
  isEquals?: number;
}

export function Hide({ type = 'width', inCase, isOver, isEquals, isUnder, ...props }: HideProps) {
  const { width, height } = useWindowSize();

  if (inCase) return null;

  if (!width || !height) return null;

  const isWidth = type === 'width';
  const isWidthOver = isOver && width > isOver;
  const isWidthUnder = isUnder && width < isUnder;
  const isWidthEquals = width === isEquals;
  const isWidthMatch = isWidthEquals || isWidthUnder || isWidthOver;

  const isHeight = type === 'height';
  const isHeightOver = isOver && height > isOver;
  const isHeightUnder = isUnder && height < isUnder;
  const isHeightEquals = height === isEquals;
  const isHeightMatch = isHeightEquals || isHeightUnder || isHeightOver;

  if (isWidth)
    if (isWidthMatch) return null;

  if (isHeight)
    if (isHeightMatch) return null;

  return props.children as JSX.Element;
}
