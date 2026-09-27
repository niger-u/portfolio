import React from 'react';

export const FilmGrain: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-[99] overflow-hidden"
      style={{
        opacity: 0.06,
        mixBlendMode: 'overlay',
      }}
      aria-hidden="true"
    >
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <filter id="film-grain-filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#film-grain-filter)" />
      </svg>
    </div>
  );
};
