import { useWindowSize } from '../../hooks/useWindowSize';
import { ShowProps } from './types';

export function Show({ type = 'width', inCase, isOver, isEquals, isUnder, ...props }: ShowProps) {
  const { width, height } = useWindowSize();

  if (inCase) return props.children as JSX.Element;

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
    if (isWidthMatch) return props.children as JSX.Element;

  if (isHeight)
    if (isHeightMatch) return props.children as JSX.Element;

  return null;
}
