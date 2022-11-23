import { CSSProperties } from 'react';

export type Space = {
  axis?: 'x' | 'y';
  size: number;
}

export type SpaceProps = {
  axis?: 'x' | 'y';
  size: number;

  style?: CSSProperties;
}
