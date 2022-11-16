export function useCreateRange(range: number) {
  return new Array(range).fill(null).map((_, i) => i);
}
