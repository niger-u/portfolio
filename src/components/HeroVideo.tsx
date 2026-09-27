import React, { useEffect, useRef, useState } from 'react';

const LEFT_VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_39ca84eAE1ODL9hbR5VhoEj8tBf/hf_20260625_154433_532a85d3-dabf-4265-b8bd-19ac6af31842.mp4';
const RIGHT_VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_39ca84eAE1ODL9hbR5VhoEj8tBf/hf_20260625_154401_a664f076-b971-4557-8728-40ef9ea4c49b.mp4';

export const HeroVideo: React.FC = () => {
  const leftVideoRef = useRef<HTMLVideoElement>(null);
  const rightVideoRef = useRef<HTMLVideoElement>(null);
  const [leftLoaded, setLeftLoaded] = useState(false);
  const [rightLoaded, setRightLoaded] = useState(false);

  const activeSideRef = useRef<'left' | 'right'>('right');

  // Ready state check
  const isLoaded = leftLoaded || rightLoaded; // allow progressive reveal

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const left = leftVideoRef.current;
    const right = rightVideoRef.current;
    if (!left || !right) return;

    if (isTouch || prefersReducedMotion) {
      // Touch/Mobile mode: Alternate auto-play
      left.style.display = 'block';
      right.style.display = 'none';

      const handleLeftEnded = () => {
        left.style.display = 'none';
        right.style.display = 'block';
        right.currentTime = 0;
        right.play().catch(() => {});
      };

      const handleRightEnded = () => {
        right.style.display = 'none';
        left.style.display = 'block';
        left.currentTime = 0;
        left.play().catch(() => {});
      };

      left.addEventListener('ended', handleLeftEnded);
      right.addEventListener('ended', handleRightEnded);

      // Start initial playback
      left.play().catch(() => {});

      return () => {
        left.removeEventListener('ended', handleLeftEnded);
        right.removeEventListener('ended', handleRightEnded);
      };
    } else {
      // Desktop scrub mode
      // Initial display state
      left.style.display = 'none';
      right.style.display = 'block';

      let mouseX = window.innerWidth / 2;
      let animationFrameId: number;

      const handleMouseMove = (e: MouseEvent) => {
        mouseX = e.clientX;
      };

      const updateScrub = () => {
        const width = window.innerWidth;
        const center = width / 2;
        const deadZone = Math.max(30, width * 0.05);

        const leftEdge = center - deadZone;
        const rightEdge = center + deadZone;

        if (mouseX >= leftEdge && mouseX <= rightEdge) {
          // Inside dead zone: keep active video at currentTime = 0
          const activeVid = activeSideRef.current === 'left' ? left : right;
          if (activeVid && !activeVid.seeking && activeVid.currentTime !== 0) {
            activeVid.currentTime = 0;
          }
        } else if (mouseX < leftEdge) {
          // Cursor to the left: show RIGHT video
          if (activeSideRef.current !== 'right') {
            activeSideRef.current = 'right';
            left.style.display = 'none';
            right.style.display = 'block';
          }
          const availableRange = leftEdge;
          const dist = leftEdge - mouseX;
          const progress = Math.min(1, Math.max(0, dist / availableRange));
          const duration = right.duration || 3;
          const targetTime = progress * duration;

          if (!right.seeking) {
            right.currentTime = targetTime;
          }
        } else if (mouseX > rightEdge) {
          // Cursor to the right: show LEFT video
          if (activeSideRef.current !== 'left') {
            activeSideRef.current = 'left';
            right.style.display = 'none';
            left.style.display = 'block';
          }
          const availableRange = width - rightEdge;
          const dist = mouseX - rightEdge;
          const progress = Math.min(1, Math.max(0, dist / availableRange));
          const duration = left.duration || 3;
          const targetTime = progress * duration;

          if (!left.seeking) {
            left.currentTime = targetTime;
          }
        }

        animationFrameId = requestAnimationFrame(updateScrub);
      };

      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      animationFrameId = requestAnimationFrame(updateScrub);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, [leftLoaded, rightLoaded]);

  return (
    <div
      id="main-canvas"
      className="pointer-events-none fixed inset-0 w-full h-full z-0 overflow-hidden transition-opacity duration-500 max-lg:top-[220px] max-lg:h-[calc(100vh-220px)]"
      style={{
        opacity: isLoaded ? 1 : 0,
      }}
    >
      <video
        ref={leftVideoRef}
        src={LEFT_VIDEO_URL}
        muted
        playsInline
        preload="auto"
        onLoadedData={() => setLeftLoaded(true)}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          filter: 'grayscale(100%) contrast(135%) brightness(85%)',
        }}
      />
      <video
        ref={rightVideoRef}
        src={RIGHT_VIDEO_URL}
        muted
        playsInline
        preload="auto"
        onLoadedData={() => setRightLoaded(true)}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          filter: 'grayscale(100%) contrast(135%) brightness(85%)',
        }}
      />
    </div>
  );
};
