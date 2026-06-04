import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseenter", onMouseEnter);
      document.addEventListener("mouseleave", onMouseLeave);
      document.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mouseup", onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    addEventListeners();

    // Check link hover
    const handleLinkHover = () => {
      const links = document.querySelectorAll("a, button, [role='button'], input, select, textarea");
      links.forEach((link) => {
        link.addEventListener("mouseenter", () => setLinkHovered(true));
        link.addEventListener("mouseleave", () => setLinkHovered(false));
      });
    };

    const observer = new MutationObserver(handleLinkHover);
    observer.observe(document.body, { childList: true, subtree: true });
    handleLinkHover();

    return () => {
      removeEventListeners();
      observer.disconnect();
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed top-0 left-0 w-8 h-8 rounded-full border border-secondary pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-all duration-100 ease-out mix-blend-difference hidden md:block ${
        clicked ? "scale-75 bg-secondary" : ""
      } ${linkHovered ? "scale-150 bg-secondary/20 border-secondary" : ""}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
}
