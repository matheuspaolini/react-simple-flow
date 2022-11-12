import { ReactNode } from 'react';
import { useWindowSize } from '../../hooks/useWindowSize';

type Props = {
  children?: ReactNode;

  isUnder?: number;
  isOver?: number;
  isEquals?: number;
}

export function ShowWhenWidth({ children, isOver, isEquals, isUnder }: Props) {
  const { width } = useWindowSize();

  if (!width) return null;

  const isWidthOver = isOver && width > isOver;
  const isWidthUnder = isUnder && width < isUnder;
  const isWidthEquals = width === isEquals;

  if (isWidthEquals || isWidthUnder || isWidthOver) return children as JSX.Element;

  return null;
}
