import { Space } from './types';

export const getHeight = ({ axis, size }: Space) => axis === 'x' ? 1 : size;
export const getWidth = ({ axis, size }: Space) => axis === 'y' ? 1 : size;
