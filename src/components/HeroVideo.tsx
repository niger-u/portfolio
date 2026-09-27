import React, { useEffect, useRef, useState } from 'react';

const CARTI_VIDEO_URL = './playboi-carti.mp4';

export const HeroVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const isScrubbingRef = useRef(false);
  const scrubTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Mobile/Touch or Reduced Motion: standard auto-play loop
    if (isTouch || prefersReducedMotion) {
      video.loop = true;
      video.play().catch(() => {});
      return;
    }

    // Desktop: Smooth playback + Cursor X Scrubbing
    video.loop = true;
    video.play().catch(() => {});

    let mouseX = window.innerWidth / 2;
    let animId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      isScrubbingRef.current = true;

      // If mouse stops moving for 1.2s, resume smooth ambient playback
      if (scrubTimeoutRef.current) clearTimeout(scrubTimeoutRef.current);
      scrubTimeoutRef.current = window.setTimeout(() => {
        isScrubbingRef.current = false;
        if (video.paused) {
          video.play().catch(() => {});
        }
      }, 1200);
    };

    const updateScrub = () => {
      if (isScrubbingRef.current && video.duration) {
        const width = window.innerWidth;
        const progress = Math.min(1, Math.max(0, mouseX / width));
        const targetTime = progress * video.duration;

        if (!video.seeking && Math.abs(video.currentTime - targetTime) > 0.05) {
          video.currentTime = targetTime;
        }
      }

      animId = requestAnimationFrame(updateScrub);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    animId = requestAnimationFrame(updateScrub);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
      if (scrubTimeoutRef.current) clearTimeout(scrubTimeoutRef.current);
    };
  }, []);

  return (
    <div
      id="main-canvas"
      className="pointer-events-none fixed inset-0 w-full h-full z-0 overflow-hidden transition-opacity duration-700 max-lg:top-[200px] max-lg:h-[calc(100vh-200px)]"
      style={{
        opacity: isLoaded ? 1 : 0,
      }}
    >
      <video
        ref={videoRef}
        src={CARTI_VIDEO_URL}
        muted
        playsInline
        preload="auto"
        onLoadedData={() => setIsLoaded(true)}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          filter: 'grayscale(100%) contrast(140%) brightness(90%)',
        }}
      />
    </div>
  );
};
