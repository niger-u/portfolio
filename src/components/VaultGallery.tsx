import React, { useEffect, useRef, useState, useMemo } from 'react';
import { ARCHIVE_ARTIFACTS, ArchiveArtifact } from '../data/archiveData';

interface CellItem {
  artifactIndex: number; // -1 for empty spacer cell
}

function buildLayout(count: number, cols: number): CellItem[][] {
  const rows: CellItem[][] = [];
  let placedCount = 0;
  let r = 0;

  while (placedCount < count) {
    const row: CellItem[] = Array.from({ length: cols }, () => ({ artifactIndex: -1 }));

    // Primary column
    const a = (r * 2 + (r % 2)) % cols;
    row[a] = { artifactIndex: placedCount };
    placedCount++;

    // Every 3rd row, place a second image if available
    if (r % 3 === 0 && placedCount < count) {
      let b = (a + 2) % cols;
      if (b === a) b = (a + 1) % cols;
      row[b] = { artifactIndex: placedCount };
      placedCount++;
    }

    rows.push(row);
    r++;
  }

  return rows;
}

interface VaultGalleryProps {
  onSelectArtifact?: (artifact: ArchiveArtifact) => void;
}

export const VaultGallery: React.FC<VaultGalleryProps> = ({ onSelectArtifact }) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [cols, setCols] = useState(4);

  // Responsive column detection
  useEffect(() => {
    const updateCols = () => {
      const w = window.innerWidth;
      if (w < 640) setCols(2);
      else if (w < 1024) setCols(3);
      else setCols(4);
    };

    updateCols();
    window.addEventListener('resize', updateCols);
    return () => window.removeEventListener('resize', updateCols);
  }, []);

  const layout = useMemo(() => buildLayout(ARCHIVE_ARTIFACTS.length, cols), [cols]);

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
          card.style.transform = 'scale(0)';
        } else {
          // Enter: scales from 0 to 1 as it enters viewport
          const enter = Math.min(1, Math.max(0, (vh - top) / (vh * 0.6)));
          // Exit: scales from 1 to 0 as it exits top
          const exit = Math.min(1, Math.max(0, bottom / (vh * 0.4)));
          const finalScale = Math.min(enter, exit);
          card.style.transform = `scale(${finalScale.toFixed(4)})`;
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
  }, [layout, cols]);

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
        className="w-full pt-[min(400px,40vh)] pb-[40vh] px-4 sm:px-8 lg:px-12"
        style={{ willChange: 'transform' }}
      >
        {/* Anti-Design Grid */}
        <div
          className="grid gap-3 sm:gap-6 lg:gap-8 mx-auto max-w-[1720px]"
          style={{
            gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
          }}
        >
          {layout.map((row, rIdx) =>
            row.map((cell, cIdx) => {
              const key = `${rIdx}-${cIdx}`;
              const isLeftHalf = cIdx < cols / 2;
              const transformOrigin = isLeftHalf ? 'right bottom' : 'left bottom';

              if (cell.artifactIndex === -1) {
                // Empty spacer cell with exposed subtle hairline border
                return (
                  <div
                    key={key}
                    className="w-full aspect-[2/3] border border-dashed border-white/[0.04] rounded-none pointer-events-none"
                    aria-hidden="true"
                  />
                );
              }

              const artifact = ARCHIVE_ARTIFACTS[cell.artifactIndex];
              const cardIndex = cell.artifactIndex;

              return (
                <div
                  key={key}
                  ref={(el) => {
                    cardRefs.current[cardIndex] = el;
                  }}
                  onClick={() => onSelectArtifact?.(artifact)}
                  className="bp-card group relative w-full aspect-[2/3] bg-black cursor-pointer overflow-hidden border border-white/[0.22] hover:border-white transition-colors duration-200"
                  style={{
                    transformOrigin,
                    transform: 'scale(0)',
                  }}
                >
                  {/* High Contrast Monochrome Image */}
                  <img
                    src={artifact.imageUrl}
                    alt={artifact.title}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale contrast-[125%] brightness-90 group-hover:scale-105 group-hover:contrast-[140%] transition-transform duration-700 ease-out"
                  />

                  {/* Corner Index Overlay (Top Left) */}
                  <div className="absolute top-2 left-2 z-10 mix-blend-exclusion pointer-events-none">
                    <span className="font-mono text-[9px] sm:text-[10px] text-white tracking-widest uppercase">
                      {artifact.indexTag}
                    </span>
                  </div>

                  {/* Crosshair Marker (Bottom Right) */}
                  <div className="absolute bottom-2 right-2 z-10 mix-blend-exclusion pointer-events-none">
                    <span className="font-mono text-[10px] text-white tracking-widest">
                      [ + ]
                    </span>
                  </div>

                  {/* Hover Caption Details */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
                    <span className="font-mono text-[10px] text-white/70 uppercase tracking-wider mb-1">
                      {artifact.category}
                    </span>
                    <h3 className="font-display font-[800] text-sm sm:text-base text-white tracking-tight uppercase leading-snug">
                      {artifact.title}
                    </h3>
                    <p className="font-mono text-[10px] text-white/80 line-clamp-2 mt-1 leading-relaxed">
                      {artifact.description}
                    </p>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
