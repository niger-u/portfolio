import React, { useEffect, useRef, useState, useMemo } from 'react';
import {
  ARCHIVE_ARTIFACTS,
  CATEGORY_DEFINITIONS,
  ArchiveArtifact,
  ArchiveCategory,
} from '../data/archiveData';

interface VaultGalleryProps {
  onSelectArtifact?: (artifact: ArchiveArtifact) => void;
}

export const VaultGallery: React.FC<VaultGalleryProps> = ({ onSelectArtifact }) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [activeCategory, setActiveCategory] = useState<ArchiveCategory | 'all'>('all');

  const filteredArtifacts = useMemo(() => {
    if (activeCategory === 'all') return ARCHIVE_ARTIFACTS;
    return ARCHIVE_ARTIFACTS.filter((a) => a.category === activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    const panel = panelRef.current;
    const wrapper = wrapperRef.current;
    const spacer = document.getElementById('scroll-spacer');
    const outroOverlay = document.getElementById('outro-overlay');
    const outroInfo = document.getElementById('outro-info');
    const outroBuy = document.getElementById('outro-buy');
    const outroFooter = document.getElementById('outro-footer');

    if (!panel || !wrapper || !spacer) return;

    let animId: number;

    const tick = () => {
      const vh = window.innerHeight;
      const scrollY = window.scrollY;

      const wrapHeight = wrapper.offsetHeight;
      const maxScroll = Math.max(0, wrapHeight - vh);

      // Dynamically calculate and set total spacer height
      const totalSpacerHeight = vh + maxScroll + 2 * vh;
      spacer.style.height = `${totalSpacerHeight}px`;

      // Phase 1: scrollY 0 to vh (Black panel slides up)
      if (scrollY <= vh) {
        const panelTranslateY = vh - scrollY;
        panel.style.transform = `translateY(${panelTranslateY}px)`;
        wrapper.style.transform = `translateY(0px)`;
      } else {
        // Phase 2: scrollY > vh (Panel is fixed at top, inner wrapper translates up)
        panel.style.transform = `translateY(0px)`;
        const wrapperTranslateY = -(scrollY - vh);
        wrapper.style.transform = `translateY(${wrapperTranslateY}px)`;
      }

      // Card scale physics calculation per frame
      cardRefs.current.forEach((card) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const top = rect.top;
        const bottom = rect.bottom;

        if (bottom <= 0 || top >= vh) {
          card.style.transform = 'scale(0.96)';
          card.style.opacity = '0.3';
        } else {
          // Enter: scales from 0 to 1 as it enters viewport
          const enter = Math.min(1, Math.max(0, (vh - top) / (vh * 0.4)));
          // Exit: scales from 1 to 0 as it exits top
          const exit = Math.min(1, Math.max(0, bottom / (vh * 0.3)));
          const finalScale = Math.min(enter, exit);
          const clampedScale = Math.max(0.92, Math.min(1, 0.92 + 0.08 * finalScale));
          const opacity = Math.max(0.3, Math.min(1, finalScale));

          card.style.transform = `scale(${clampedScale.toFixed(4)})`;
          card.style.opacity = `${opacity.toFixed(4)}`;
        }
      });

      // Outro Phase: scrollY > vh + maxScroll
      const outroStart = vh + maxScroll;
      const outroRange = vh - 100;

      if (scrollY > outroStart) {
        const progress = Math.min(1, Math.max(0, (scrollY - outroStart) / outroRange));

        // Studio-flash white overlay fades in
        if (outroOverlay) {
          outroOverlay.style.opacity = `${progress}`;
        }

        // Outro info slides up
        if (outroInfo) {
          const outroOffset = parseFloat(outroInfo.getAttribute('data-outro-offset') || '166');
          const currentY = -progress * outroOffset;
          outroInfo.style.transform = `translateY(${currentY}px)`;
        }

        // ENTER button scales from 0 to 1
        if (outroBuy) {
          outroBuy.style.transform = `scale(${progress.toFixed(4)})`;
        }

        // Footer fades in
        if (outroFooter) {
          outroFooter.style.opacity = `${progress}`;
        }
      } else {
        if (outroOverlay) outroOverlay.style.opacity = '0';
        if (outroInfo) outroInfo.style.transform = 'translateY(0px)';
        if (outroBuy) outroBuy.style.transform = 'scale(0)';
        if (outroFooter) outroFooter.style.opacity = '0';
      }

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(animId);
  }, [filteredArtifacts]);

  return (
    <div
      ref={panelRef}
      className="fixed inset-0 bg-black z-10 overflow-hidden"
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.2)',
        transform: 'translateY(100vh)',
        willChange: 'transform',
      }}
    >
      {/* Inner Scroll Wrapper */}
      <div
        ref={wrapperRef}
        className="w-full pt-[min(280px,28vh)] pb-[40vh] px-4 sm:px-8 lg:px-14"
        style={{ willChange: 'transform' }}
      >
        <div className="max-w-[1600px] mx-auto">
          {/* Header & Quick Category Filter */}
          <div className="mb-12 lg:mb-16 border-b border-white/20 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span className="font-mono text-xs tracking-widest uppercase text-white/60">
                  HARSH VERMA // VAULT DOSSIER
                </span>
              </div>
              <h2
                className="font-display font-[900] text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-none"
                style={{ transform: 'scaleY(1.2)', transformOrigin: 'left bottom' }}
              >
                PRODUCT, STRATEGY &amp; SYSTEMS
              </h2>
              <p className="font-mono text-xs text-white/50 tracking-wider uppercase mt-3">
                PRODUCT MANAGEMENT // DATA WORKFLOWS // STRATEGY &amp; GTM // CHEMICAL ENG @ JU '28
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setActiveCategory('all')}
                className={`font-mono text-xs px-3 py-1.5 uppercase tracking-wider border transition-all cursor-pointer ${
                  activeCategory === 'all'
                    ? 'bg-white text-black border-white'
                    : 'bg-transparent text-white/70 border-white/20 hover:border-white'
                }`}
              >
                [ ALL // {ARCHIVE_ARTIFACTS.length} ]
              </button>
              {CATEGORY_DEFINITIONS.map((cat) => {
                const count = ARCHIVE_ARTIFACTS.filter((a) => a.category === cat.id).length;
                const isSelected = activeCategory === cat.id;
                const shortLabel =
                  cat.id === 'experience'
                    ? 'EXPERIENCE'
                    : cat.id === 'project'
                    ? 'PROJECTS'
                    : cat.id === 'leadership'
                    ? 'LEADERSHIP'
                    : 'SKILLS & HONORS';
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`font-mono text-xs px-3 py-1.5 uppercase tracking-wider border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-white text-black border-white'
                        : 'bg-transparent text-white/70 border-white/20 hover:border-white'
                    }`}
                  >
                    [ {shortLabel} // {count} ]
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grouped Sections */}
          <div className="space-y-24 sm:space-y-32">
            {CATEGORY_DEFINITIONS.filter(
              (cat) => activeCategory === 'all' || activeCategory === cat.id
            ).map((cat) => {
              const items = ARCHIVE_ARTIFACTS.filter((a) => a.category === cat.id);
              if (items.length === 0) return null;

              return (
                <section key={cat.id} className="relative">
                  {/* Category Divider Header */}
                  <div className="border-t border-white/20 pt-6 mb-10 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <h3
                      className="font-display font-[900] text-xl sm:text-3xl text-white tracking-tight uppercase"
                      style={{ transform: 'scaleY(1.18)', transformOrigin: 'left' }}
                    >
                      {cat.title}
                    </h3>
                    <span className="font-mono text-[11px] sm:text-xs text-white/50 tracking-widest uppercase">
                      {cat.subtitle}
                    </span>
                  </div>

                  {/* Artifacts in this Category: Visual + Clickable Dossier Box Pairing */}
                  <div className="space-y-12 sm:space-y-16">
                    {items.map((artifact, itemIdx) => {
                      const globalIdx = ARCHIVE_ARTIFACTS.findIndex((a) => a.id === artifact.id);
                      const isReverse = itemIdx % 2 === 1;

                      return (
                        <div
                          key={artifact.id}
                          ref={(el) => {
                            cardRefs.current[globalIdx] = el;
                          }}
                          className={`bp-card flex flex-col ${
                            isReverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
                          } gap-6 sm:gap-8 lg:gap-12 items-stretch transition-transform duration-300`}
                        >
                          {/* 1. VISUAL FRAME: High Contrast Monochrome with 'MUSIC' Stamp */}
                          <div
                            onClick={() => onSelectArtifact?.(artifact)}
                            className="group relative w-full lg:w-5/12 aspect-[4/5] sm:aspect-[3/2] lg:aspect-[2/3] bg-black border border-white/25 hover:border-white transition-colors duration-200 overflow-hidden cursor-pointer flex-shrink-0"
                          >
                            <img
                              src={artifact.imageUrl}
                              alt={artifact.title}
                              loading="lazy"
                              className="w-full h-full object-cover grayscale contrast-[135%] brightness-90 group-hover:scale-105 group-hover:contrast-[150%] transition-transform duration-700 ease-out"
                            />

                            {/* Corner Serial Overlay (Top Left) */}
                            <div className="absolute top-3 left-3 z-10 mix-blend-exclusion pointer-events-none">
                              <span className="font-mono text-[10px] text-white tracking-widest uppercase">
                                [ {artifact.serialNumber} // ARTIFACT ]
                              </span>
                            </div>

                            {/* 'MUSIC' Cap / Brand Stamp */}
                            <div className="absolute top-3 right-3 z-10">
                              <div
                                className="bg-white text-black px-2.5 py-0.5 font-display font-[900] text-[13px] tracking-[-0.04em] uppercase"
                                style={{ transform: 'scaleY(1.25)' }}
                              >
                                {artifact.capLabel || 'MUSIC'}
                              </div>
                            </div>

                            {/* Bottom Right Reticle Crosshair */}
                            <div className="absolute bottom-3 right-3 z-10 mix-blend-exclusion pointer-events-none">
                              <span className="font-mono text-xs text-white tracking-widest">
                                [ + ]
                              </span>
                            </div>

                            {/* Hover Quick Prompt */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                              <span className="font-mono text-xs text-white bg-black/80 px-4 py-2 border border-white/30 tracking-widest uppercase">
                                INSPECT DOSSIER
                              </span>
                            </div>
                          </div>

                          {/* 2. CLICKABLE PORTFOLIO DOSSIER BOX */}
                          <div
                            onClick={() => onSelectArtifact?.(artifact)}
                            className="group relative w-full lg:w-7/12 bg-black border border-white/20 hover:border-white p-6 sm:p-8 lg:p-10 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.06)]"
                          >
                            {/* Top Meta Row */}
                            <div>
                              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                                <div className="flex items-center gap-2">
                                  <span className="px-2 py-0.5 bg-white/10 text-white font-mono text-[10px] tracking-widest uppercase border border-white/20">
                                    {artifact.categoryLabel}
                                  </span>
                                  {artifact.status === 'ACTIVE' && (
                                    <span className="flex items-center gap-1.5 px-2 py-0.5 bg-emerald-950/80 text-emerald-400 font-mono text-[10px] tracking-wider uppercase border border-emerald-500/40">
                                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                                      CURRENT
                                    </span>
                                  )}
                                </div>
                                <span className="font-mono text-[11px] text-white/50 tracking-wider">
                                  {artifact.timeframe}
                                </span>
                              </div>

                              {/* Title & Organization */}
                              <h4
                                className="font-display font-[900] text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-[95%] uppercase mb-2 group-hover:translate-x-1 transition-transform"
                                style={{ transform: 'scaleY(1.15)', transformOrigin: 'left' }}
                              >
                                {artifact.title}
                              </h4>
                              <div className="font-mono text-xs text-white/70 tracking-wide uppercase mb-6">
                                {artifact.role} —{' '}
                                <span className="text-white font-semibold">
                                  {artifact.organization}
                                </span>
                              </div>

                              {/* Short Summary */}
                              <p className="font-mono text-xs sm:text-sm text-white/80 leading-relaxed mb-6">
                                {artifact.shortSummary}
                              </p>

                              {/* Structured Deliverables / Highlights */}
                              <div className="space-y-2 mb-6 border-l border-white/20 pl-4 py-1">
                                {artifact.bulletPoints.map((point, pIdx) => (
                                  <div
                                    key={pIdx}
                                    className="font-mono text-[11px] sm:text-xs text-white/75 leading-relaxed flex items-start gap-2"
                                  >
                                    <span className="text-white/40 select-none">›</span>
                                    <span>{point}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Bottom Row: Tools & Action Buttons */}
                            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                              {/* Capabilities / Tools Pills */}
                              <div className="flex flex-wrap gap-1.5">
                                {artifact.tools.map((tool) => (
                                  <span
                                    key={tool}
                                    className="px-2 py-0.5 font-mono text-[10px] text-white/60 bg-white/[0.03] border border-white/10 uppercase tracking-wider"
                                  >
                                    {tool}
                                  </span>
                                ))}
                              </div>

                              {/* Action Trigger */}
                              <div className="flex items-center gap-3 self-end sm:self-auto flex-shrink-0">
                                {artifact.link && (
                                  <a
                                    href={artifact.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="font-mono text-xs text-white/70 hover:text-white px-3 py-1.5 border border-white/30 hover:border-white uppercase tracking-wider transition-colors"
                                  >
                                    VISIT ↗
                                  </a>
                                )}
                                <span className="font-mono text-xs text-black bg-white group-hover:bg-neutral-200 px-3 py-1.5 uppercase font-bold tracking-wider transition-colors">
                                  INSPECT DOSSIER →
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
