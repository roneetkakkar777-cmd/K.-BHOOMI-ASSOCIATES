// =============================================
// useScrollAnimation Hook
// =============================================
import { useEffect, useRef } from 'react';

/**
 * Custom hook that adds scroll-triggered animation class
 * @param {string} className - CSS class to add on scroll trigger
 * @param {number} threshold - Intersection observer threshold
 */
export const useScrollAnimation = (className = 'animate', threshold = 0.1) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add(className);
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [className, threshold]);

  return ref;
};

export default useScrollAnimation;
