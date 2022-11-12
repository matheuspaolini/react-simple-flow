import { ReactNode } from 'react';
import { useWindowSize } from '../../hooks/useWindowSize';

type Props = {
  children?: ReactNode;

  type?: 'width' | 'height';

  isUnder?: number;
  isOver?: number;
  isEquals?: number;
}

export function ShowWhenWidth({ children, type = 'width', isOver, isEquals, isUnder }: Props) {
  const { width, height } = useWindowSize();

  if (!width || !height) return null;

  const isWidthOver = isOver && width > isOver;
  const isWidthUnder = isUnder && width < isUnder;
  const isWidthEquals = width === isEquals;

  if (isWidthEquals || isWidthUnder || isWidthOver) return children as JSX.Element;

  return null;
}
