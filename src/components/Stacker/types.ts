import { CSSProperties } from 'react';

import { StackProps } from '../Stack/types';

type SizeProps = {
  onWidthUnder: number;
  onHeightUnder?: never;
} | {
  onWidthUnder?: never;
  onHeightUnder: number;
}

type Common = {
  initial?: CSSProperties['flexDirection'];
  changeTo: CSSProperties['flexDirection'];
}

export type DynamicStackProps = Common & SizeProps & StackProps;
