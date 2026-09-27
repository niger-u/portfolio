import React from 'react';
import { ARCHIVE_ARTIFACTS, ArchiveArtifact } from '../data/archiveData';

interface IndexDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectArtifact: (artifact: ArchiveArtifact) => void;
}

export const IndexDrawer: React.FC<IndexDrawerProps> = ({
  isOpen,
  onClose,
  onSelectArtifact,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col p-6 sm:p-12 overflow-y-auto"
      onClick={onClose}
    >
      {/* Header bar */}
      <div className="flex justify-between items-center pb-6 border-b border-white/20 mb-8">
        <div>
          <h2
            className="font-display font-[900] text-3xl sm:text-5xl text-white tracking-tight leading-none uppercase"
            style={{ transform: 'scaleY(1.2)', transformOrigin: 'left center' }}
          >
            INDEX ARCHIVE
          </h2>
          <p className="font-mono text-xs text-white/50 tracking-widest uppercase mt-2">
            [ HARSH VERMA // VAULT SYSTEM 00 ] — 10 ENTRIES REGISTERED
          </p>
        </div>

        <button
          onClick={onClose}
          className="font-mono text-sm text-white/70 hover:text-white bg-transparent border border-white/30 px-4 py-2 cursor-pointer uppercase tracking-widest transition-colors"
        >
          [ CLOSE // X ]
        </button>
      </div>

      {/* About Overview */}
      <div className="mb-10 max-w-2xl bg-white/[0.02] border border-white/10 p-6">
        <span className="font-mono text-[10px] text-white/50 tracking-widest uppercase block mb-2">
          CURATOR IDENTITY // DOSSIER
        </span>
        <p className="font-mono text-xs sm:text-sm text-white/90 leading-relaxed uppercase m-0">
          HARSH VERMA — OPERATIONS INTERN AT HIREDUE, DESIGN LEAD AT IEEE JUSB, FOUNDER OF UNIVERSE
          UNBOXED (40,000+ STEM MEMBERS), AICSSYC PITCH WINNER ($800 PRIZE). SPECIALIZING IN VIDEO
          DIRECTION, SYSTEM ARCHITECTURE, BRAND POSTERS, AND QUALITATIVE UX RESEARCH.
        </p>
      </div>

      {/* Index List */}
      <div className="flex flex-col divide-y divide-white/10 max-w-5xl">
        {ARCHIVE_ARTIFACTS.map((item, idx) => (
          <div
            key={item.id}
            onClick={(e) => {
              e.stopPropagation();
              onSelectArtifact(item);
              onClose();
            }}
            className="group flex flex-col md:flex-row md:items-center justify-between py-4 hover:bg-white/[0.04] px-4 cursor-pointer transition-colors"
          >
            <div className="flex items-baseline gap-4 sm:gap-8">
              <span className="font-mono text-xs text-white/40 tracking-widest group-hover:text-white">
                00{idx + 1}
              </span>
              <span
                className="font-display font-[800] text-lg sm:text-xl text-white tracking-tight uppercase group-hover:translate-x-2 transition-transform"
                style={{ transform: 'scaleY(1.15)', transformOrigin: 'left' }}
              >
                {item.title}
              </span>
            </div>

            <div className="flex items-center gap-6 mt-2 md:mt-0">
              <span className="font-mono text-[11px] text-white/60 tracking-wider uppercase">
                {item.category}
              </span>
              {item.year && (
                <span className="font-mono text-[11px] text-white/40">
                  {item.year}
                </span>
              )}
              <span className="font-mono text-xs text-white/40 group-hover:text-white">
                [ + ]
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
