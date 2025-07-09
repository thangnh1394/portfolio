import { useEffect, useRef, useState } from "react";

interface UseAnimatedValueProps {
  from: number;
  to: number;
  duration?: number;
  isActive?: boolean;
}

const useAnimatedValue = ({
  from,
  to,
  duration = 1000,
  isActive = true,
}: UseAnimatedValueProps): number => {
  const [value, setValue] = useState(from);
  const startTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isActive) {
      setValue(from);
      return;
    }

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const progress = Math.min(
        (timestamp - startTimeRef.current) / duration,
        1
      );
      const currentValue = from + (to - from) * easeOutQuad(progress);

      setValue(currentValue);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      startTimeRef.current = null;
    };
  }, [from, to, duration, isActive]);

  return Math.round(value);
};

// Easing function for smooth animation
const easeOutQuad = (t: number): number => {
  return t * (2 - t);
};

export default useAnimatedValue;
