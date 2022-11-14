export function isDOM() {
  return Boolean(typeof window !== 'undefined' && window.document);
}
