export function isIntersetionObserver() {
  const isIntersetionObserver = 'IntersectionObserver' in window;
  const isIntersectionObserverEntry = 'IntersectionObserverEntry' in window;

  return !isIntersetionObserver || !isIntersectionObserverEntry;
}
