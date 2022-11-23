import { CSSProperties, HTMLAttributes } from 'react';

export type CustomProps = {
  isMaxWidth?: boolean;
  isMaxHeight?: never;
  isMaxSize?: never;
} | {
  isMaxWidth?: never;
  isMaxHeight?: boolean;
  isMaxSize?: never;
} | {
  isMaxWidth?: never;
  isMaxHeight?: never;
  isMaxSize?: boolean;
}

export type PaddingStyles = {
  padding?: CSSProperties['padding'];
  paddingLeft?: CSSProperties['paddingLeft'];
  paddingRight?: CSSProperties['paddingRight'];
  paddingTop?: CSSProperties['paddingTop'];
  paddingBottom?: CSSProperties['paddingBottom'];
}

export type MarginStyles = {
  margin?: CSSProperties['margin'];
  marginLeft?: CSSProperties['marginLeft'];
  marginRight?: CSSProperties['marginRight'];
  marginTop?: CSSProperties['marginTop'];
  marginBottom?: CSSProperties['marginBottom'];
}

export type FlexStyles = {
  flexDirection?: CSSProperties['flexDirection'];
  alignItems?: CSSProperties['alignItems'];
  justifyContent?: CSSProperties['justifyContent'];
  gap?: CSSProperties['gap'];
}

export type SizeStyles = {
  width?: CSSProperties['width'];
  maxWidth?: CSSProperties['maxWidth'];
  height?: CSSProperties['height'];
  maxHeight?: CSSProperties['maxHeight'];
}

export type StackProps =
  SizeStyles &
  FlexStyles &
  PaddingStyles &
  MarginStyles &
  CustomProps &
  HTMLAttributes<HTMLDivElement>;
