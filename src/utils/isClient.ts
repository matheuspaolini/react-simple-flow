export function isClient() {
  return Boolean(typeof window !== 'undefined' && window.document && window.document.createElement);
}
