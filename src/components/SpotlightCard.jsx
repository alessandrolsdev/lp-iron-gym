import React, { useRef, useState } from 'react';

export default function SpotlightCard({ children, className = "", spotlightColor = "rgba(255, 59, 48, 0.25)" }) {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setOpacity(1);
  };

  const handleBlur = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleFocus}
      onMouseLeave={handleBlur}
      className={`relative rounded-sm overflow-hidden border border-white/10 bg-zinc-900/40 backdrop-blur-sm ${className}`}
    >
      {/* O brilho interno que segue o mouse */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-10"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
        }}
      />
      
      {/* Conteúdo Real */}
      <div className="relative h-full z-20">{children}</div>
    </div>
  );
}