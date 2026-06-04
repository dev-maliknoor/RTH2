import React, { useState, useEffect, useRef } from "react";

interface CustomParallaxProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
}

export default function CustomParallax({ src, alt, className = "", speed = 0.15 }: CustomParallaxProps) {
  const [offset, setOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how far through the viewport the element is
      const scrollFraction = (top + height / 2) / windowHeight;
      // Map scrollFraction to a pixel offset
      setOffset((scrollFraction - 0.5) * windowHeight * speed);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial run

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className="absolute w-full h-[130%] object-cover top-[-15%]"
        style={{
          transform: `translateY(${offset}px)`,
        }}
      />
    </div>
  );
}
