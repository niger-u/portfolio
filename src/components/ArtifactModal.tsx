import React from 'react';
import { ArchiveArtifact } from '../data/archiveData';

interface ArtifactModalProps {
  artifact: ArchiveArtifact | null;
  onClose: () => void;
}

export const ArtifactModal: React.FC<ArtifactModalProps> = ({ artifact, onClose }) => {
  if (!artifact) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-black border border-white/30 p-6 sm:p-10 flex flex-col md:flex-row gap-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        style={{
          boxShadow: '0 0 50px rgba(255, 255, 255, 0.08)',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 font-mono text-xs text-white/70 hover:text-white bg-transparent border border-white/20 hover:border-white cursor-pointer px-3 py-1 tracking-widest uppercase transition-colors"
        >
          [ ESC // CLOSE ]
        </button>

        {/* Image Preview with 'MUSIC' Stamp */}
        <div className="w-full md:w-5/12 aspect-[4/5] sm:aspect-[2/3] border border-white/25 overflow-hidden relative flex-shrink-0">
          <img
            src={artifact.imageUrl}
            alt={artifact.title}
            className="w-full h-full object-cover grayscale contrast-[135%] brightness-90"
          />
          <div className="absolute top-2 left-2 z-10 mix-blend-exclusion">
            <span className="font-mono text-[10px] text-white tracking-widest uppercase">
              [ {artifact.serialNumber} // ARTIFACT ]
            </span>
          </div>
          <div className="absolute top-2 right-2 z-10">
            <div
              className="bg-white text-black px-2 py-0.5 font-display font-[900] text-[11px] tracking-tight uppercase"
              style={{ transform: 'scaleY(1.25)' }}
            >
              {artifact.capLabel || 'MUSIC'}
            </div>
          </div>
        </div>

        {/* Content Details */}
        <div className="w-full md:w-7/12 flex flex-col justify-between py-2">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-block px-2 py-0.5 border border-white/30 font-mono text-[10px] text-white/80 uppercase tracking-widest">
                {artifact.categoryLabel}
              </span>
              <span className="font-mono text-[10px] text-white/50 tracking-wider">
                {artifact.timeframe}
              </span>
            </div>

            <h2
              className="font-display font-[900] text-2xl sm:text-4xl text-white tracking-tight leading-[95%] uppercase mb-2"
              style={{ transform: 'scaleY(1.15)', transformOrigin: 'left top' }}
            >
              {artifact.organization}
            </h2>

            <div className="font-mono text-xs text-white/70 uppercase tracking-wide mb-4 flex flex-wrap items-center gap-2">
              <span className="text-white font-bold">{artifact.role}</span>
              <span className="text-white/30">•</span>
              <span className="text-white/60">{artifact.title}</span>
            </div>

            <p className="font-mono text-xs sm:text-sm text-white/80 leading-relaxed mb-6">
              {artifact.shortSummary}
            </p>

            {/* Key Deliverables */}
            <div className="mb-6">
              <span className="font-mono text-[10px] text-white/50 tracking-widest uppercase block mb-2">
                KEY DELIVERABLES &amp; IMPACT
              </span>
              <div className="space-y-1.5 border-l border-white/20 pl-3">
                {artifact.bulletPoints.map((point, idx) => (
                  <div key={idx} className="font-mono text-xs text-white/70 flex items-start gap-2">
                    <span className="text-white/40">›</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Skills */}
            <div className="mb-6">
              <span className="font-mono text-[10px] text-white/50 tracking-widest uppercase block mb-2">
                CAPABILITIES &amp; TOOLS
              </span>
              <div className="flex flex-wrap gap-1.5">
                {artifact.tools.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 font-mono text-[10px] text-white/70 bg-white/[0.04] border border-white/10 uppercase"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            {artifact.link ? (
              <a
                href={artifact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-white text-black font-display font-[900] text-sm tracking-wider uppercase text-center hover:bg-neutral-200 transition-colors"
              >
                OPEN EXTERNAL SOURCE ↗
              </a>
            ) : (
              <div className="w-full py-3 border border-white/20 text-white/50 font-mono text-xs tracking-wider uppercase text-center">
                ARCHIVED CLASSIFIED ARTIFACT
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
