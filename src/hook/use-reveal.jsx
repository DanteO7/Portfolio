import { useEffect, useRef, useState } from "react";

export function useReveal() {
  const [visible, setVisible] = useState(false);
  const [done, setDone] = useState(false);
  const ref = useRef(null);
  const hasRevealed = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRevealed.current) {
          hasRevealed.current = true;
          setVisible(true);
          setTimeout(() => setDone(true), 700); // mismo valor que duration
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, visible, done };
}
