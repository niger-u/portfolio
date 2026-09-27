import React, { useEffect, useRef, useState } from 'react';

const CARTI_VIDEO_URL = './playboi-carti.mp4';

export const HeroVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Completely static ambient playback: loop, muted, autoPlay with no cursor tracking
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.play().catch(() => {});
  }, []);

  return (
    <div
      id="main-canvas"
      className="pointer-events-none absolute inset-0 w-full h-full z-0 overflow-hidden transition-opacity duration-700"
      style={{
        opacity: isLoaded ? 1 : 0,
      }}
    >
      <video
        ref={videoRef}
        src={CARTI_VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onLoadedData={() => setIsLoaded(true)}
        className="w-full h-full object-cover"
        style={{
          filter: 'grayscale(100%) contrast(140%) brightness(90%)',
        }}
      />
    </div>
  );
};
