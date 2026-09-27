import React, { useEffect, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable on desktop screens (>= 1024px) and non-touch devices
    const isDesktop = window.matchMedia('(min-width: 1024px) and (pointer: fine)').matches;
    if (!isDesktop) return;

    const el = cursorRef.current;
    if (!el) return;

    let isVisible = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) {
        el.style.opacity = '1';
        isVisible = true;
      }
      el.style.left = `${e.clientX}px`;
      el.style.top = `${e.clientY}px`;
    };

    const handleMouseLeave = () => {
      el.style.opacity = '0';
      isVisible = false;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="hidden lg:block fixed pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-150"
      style={{
        mixBlendMode: 'exclusion',
        willChange: 'left, top',
      }}
      aria-hidden="true"
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Circular Reticle with stroke */}
        <circle
          cx="24"
          cy="24"
          r="22.75"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          strokeDasharray="2 2"
        />

        {/* Industrial Crosshair Axes */}
        <line x1="24" y1="0" x2="24" y2="12" stroke="#FFFFFF" strokeWidth="1.5" />
        <line x1="24" y1="36" x2="24" y2="48" stroke="#FFFFFF" strokeWidth="1.5" />
        <line x1="0" y1="24" x2="12" y2="24" stroke="#FFFFFF" strokeWidth="1.5" />
        <line x1="36" y1="24" x2="48" y2="24" stroke="#FFFFFF" strokeWidth="1.5" />

        {/* Central Asterisk / Starburst Sigil */}
        <text
          x="24"
          y="28.5"
          textAnchor="middle"
          fill="#FFFFFF"
          fontFamily="'JetBrains Mono', monospace"
          fontSize="18"
          fontWeight="bold"
        >
          *
        </text>
      </svg>
    </div>
  );
};
