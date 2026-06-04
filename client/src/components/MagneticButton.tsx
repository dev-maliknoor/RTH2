import React, { useRef, useEffect } from "react";

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  strength?: number;
}

export default function MagneticButton({ children, strength = 0.3, className = "", ...props }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { width, height, left, top } = element.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);

      element.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    };

    const handleMouseLeave = () => {
      element.style.transform = `translate(0px, 0px)`;
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength]);

  return (
    <button
      ref={ref}
      className={`transition-transform duration-200 ease-out ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
