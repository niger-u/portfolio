import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';
import { PROFILE_INFO } from '../data/archiveData';

const SYMBOLS = ['00', '**', '†', '¥', '//', 'X'];

export const HeroUI: React.FC = () => {
  const [symbolIndex, setSymbolIndex] = useState(0);
  const lastScrollTime = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const now = Date.now();
      if (now - lastScrollTime.current > 80) {
        lastScrollTime.current = now;
        setSymbolIndex((prev) => (prev + 1) % SYMBOLS.length);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* 1B. Logo / Wordmark (Top Left) — HARSH VERMA */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0 }}
        className="absolute top-4 left-4 lg:top-8 lg:left-8 z-10 pointer-events-none select-none"
        style={{ mixBlendMode: 'exclusion' }}
      >
        <div className="w-[180px] sm:w-[320px] lg:w-[480px]">
          <svg viewBox="0 0 480 110" fill="none" className="w-full h-auto">
            {/* HARSH VERMA STRETCHED BRUTALIST LOCKUP */}
            <text
              x="0"
              y="58"
              fill="#FFFFFF"
              fontFamily="'Inter Tight', sans-serif"
              fontWeight="900"
              fontSize="54"
              letterSpacing="-0.05em"
              style={{ transform: 'scaleY(1.25)' }}
            >
              HARSH VERMA
            </text>
            <text
              x="430"
              y="28"
              fill="#FFFFFF"
              fontFamily="'JetBrains Mono', monospace"
              fontWeight="500"
              fontSize="16"
              letterSpacing="0.05em"
            >
              ®
            </text>
            <text
              x="2"
              y="98"
              fill="#FFFFFF"
              fontFamily="'Inter Tight', sans-serif"
              fontWeight="800"
              fontSize="18"
              letterSpacing="-0.02em"
              style={{ transform: 'scaleY(1.15)' }}
            >
              OPERATIONS &amp; PRODUCT MANAGEMENT
            </text>
          </svg>
        </div>
      </motion.div>

      {/* 1C. Archival Manifesto Caption (Below Logo, Left Side) */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
        className="absolute left-4 lg:left-8 z-10 pointer-events-none select-none top-[118px] sm:top-[180px] lg:top-[244px] w-[calc(100vw-32px)] sm:w-[calc(50vw-48px)] lg:w-[540px]"
        style={{ mixBlendMode: 'exclusion' }}
      >
        <p className="font-mono text-[11px] leading-[145%] tracking-[0.02em] uppercase text-white m-0">
          [SYS.00 // HARSH VERMA] — CHEMICAL ENGINEERING @ JADAVPUR UNIVERSITY ('28) // CURRENTLY BUILDING IN STEALTH.
          FOCUSING ON CONSUMER TECH EXPERIMENTS, GROWTH ENGINES &amp; AUTOMATION WORKFLOWS.
          CONTACT: {PROFILE_INFO.email} | {PROFILE_INFO.location}. ENGINE_STATE: ACTIVE. SCROLL TO ENTER.
        </p>
      </motion.div>

      {/* 1E. Archive / Portfolio Metadata Block (Bottom Right) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="absolute z-10 pointer-events-none select-none flex flex-col items-center max-lg:left-0 max-lg:right-0 max-lg:bottom-12 lg:right-8 lg:bottom-16"
        style={{ mixBlendMode: 'exclusion' }}
      >
        <div className="flex flex-col items-center lg:items-start">
          {/* Rotating Cryptic Circle Sigil */}
          <div className="relative w-6 h-6 lg:w-[34px] lg:h-[34px] mb-2 lg:mb-3">
            <svg viewBox="0 0 40 40" className="w-full h-full">
              <circle
                cx="20"
                cy="20"
                r="18.75"
                fill="none"
                stroke="#FFFFFF"
                className="stroke-[1.5] lg:stroke-2"
              />
            </svg>
            <span
              id="circle-symbol"
              className="absolute inset-0 flex items-center justify-center font-mono font-[500] text-[10px] lg:text-[12px] tracking-[-0.04em] uppercase text-white"
            >
              {SYMBOLS[symbolIndex]}
            </span>
          </div>

          <div
            className="font-display font-[800] text-[18px] lg:text-[24px] leading-[98%] text-center lg:text-left tracking-[-0.04em] uppercase text-white"
            style={{ transform: 'scaleY(1.15)' }}
          >
            BUILDING IN STEALTH // '26
            <br />
            KOLKATA // WORLDWIDE
          </div>
        </div>
      </motion.div>
    </>
  );
};

interface BrutalistUIProps {
  onOpenIndex?: () => void;
  onEnterClick?: () => void;
}

export const BrutalistUI: React.FC<BrutalistUIProps> = ({ onOpenIndex, onEnterClick }) => {
  return (
    <>
      {/* 1D. Header Navigation (Top Right) */}
      <motion.nav
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
        className="fixed top-4 right-4 lg:top-8 lg:right-8 z-40 pointer-events-auto select-none w-auto lg:w-[380px] h-[30px] flex justify-between items-center"
        style={{ mixBlendMode: 'exclusion' }}
      >
        <span className="hidden lg:inline-block font-display font-[800] text-[13px] tracking-[-0.03em] uppercase text-white">
          00 // SCHYEAH
        </span>

        <div className="flex items-center gap-5 lg:gap-8">
          <button
            onClick={onOpenIndex}
            className="flex items-center gap-2 bg-transparent border-0 cursor-pointer p-0 group"
            aria-label="Toggle Index"
          >
            {/* Brutalist Hamburger SVG */}
            <svg
              viewBox="0 0 40 40"
              className="w-6 h-6 lg:w-[30px] lg:h-[30px] stroke-white transition-transform group-hover:scale-110"
              style={{ strokeWidth: 2.5 }}
            >
              <line x1="0" y1="14" x2="40" y2="14" />
              <line x1="0" y1="26" x2="40" y2="26" />
            </svg>
          </button>

          <span className="font-mono font-[500] text-[12px] lg:text-[13px] text-white tracking-wider">
            [ SCHYEAH // 09 ]
          </span>
        </div>
      </motion.nav>

      {/* 1F. ENTER Button (Bottom Right, Initially Scale 0) */}
      <div
        id="outro-buy"
        onClick={onEnterClick}
        className="fixed z-35 pointer-events-auto cursor-pointer select-none bg-white flex items-center justify-center max-lg:left-4 max-lg:right-4 max-lg:bottom-[60px] max-lg:h-[100px] lg:right-8 lg:bottom-8 lg:w-[350px] lg:h-[174px] shadow-2xl transition-transform"
        style={{
          mixBlendMode: 'exclusion',
          transformOrigin: 'right bottom',
          transform: 'scale(0)',
          borderRadius: '0px',
        }}
      >
        <span
          className="font-display font-[900] text-[64px] lg:text-[96px] tracking-[-0.06em] uppercase text-white"
          style={{
            transform: 'scaleY(1.25)',
            mixBlendMode: 'exclusion',
          }}
        >
          ENTER
        </span>
      </div>

      {/* 1I. Studio Flash White Overlay (Outro Strobe) */}
      <div
        id="outro-overlay"
        className="fixed inset-0 pointer-events-none z-30 bg-white"
        style={{ opacity: 0 }}
        aria-hidden="true"
      />

      {/* 1J. Footer */}
      <footer
        id="outro-footer"
        className="fixed pointer-events-none select-none left-4 lg:left-8 bottom-6 lg:bottom-8 flex flex-col sm:flex-row justify-between lg:gap-20 z-35 w-[calc(100vw-32px)] lg:w-auto"
        style={{
          mixBlendMode: 'exclusion',
          opacity: 0,
        }}
      >
        <span className="font-mono font-[500] text-[10px] lg:text-[11px] tracking-[0.03em] uppercase text-white">
          HARSH VERMA — {PROFILE_INFO.email} | {PROFILE_INFO.phone}
        </span>
        <span className="font-mono font-[500] text-[10px] lg:text-[11px] tracking-[0.03em] uppercase text-white">
          [ CHEMICAL ENG @ JADAVPUR UNIV '28 // 00 ARCHIVE ]
        </span>
      </footer>
    </>
  );
};
