export function createRange(range: number) {
  return new Array(range).fill(null).map((_, i) => i);
}
