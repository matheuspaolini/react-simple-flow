import { ReactNode } from 'react';

export type Common = {
  children?: ReactNode;
  type: 'width' | 'height';
}

export type Breakpoint = {
  inCase?: never;

  isUnder?: number;
  isOver?: number;
  isEquals?: number;
} | {
  inCase?: boolean;

  isUnder?: never;
  isOver?: never;
  isEquals?: never;
}

export type HideProps = Common & Breakpoint;
export type ShowProps = Common & Breakpoint;
