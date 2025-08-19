import { useEffect, useState } from "react";

export default function ScrollProgressLine() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(Math.min(scrollPercent, 100));
    };

    window.addEventListener("scroll", updateScrollProgress);
    updateScrollProgress(); // Set initial value

    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div 
      className="scroll-progress-line" 
      style={{ "--scroll-progress": `${scrollProgress}%` } as React.CSSProperties}
      data-testid="scroll-progress-line"
    />
  );
}