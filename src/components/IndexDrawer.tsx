import React from 'react';
import { ARCHIVE_ARTIFACTS, PROFILE_INFO, ArchiveArtifact } from '../data/archiveData';

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
            INDEX ARCHIVE // CV
          </h2>
          <p className="font-mono text-xs text-white/50 tracking-widest uppercase mt-2">
            [ HARSH VERMA // VAULT SYSTEM 00 ] — {ARCHIVE_ARTIFACTS.length} ENTRIES REGISTERED
          </p>
        </div>

        <button
          onClick={onClose}
          className="font-mono text-sm text-white/70 hover:text-white bg-transparent border border-white/30 px-4 py-2 cursor-pointer uppercase tracking-widest transition-colors"
        >
          [ CLOSE // X ]
        </button>
      </div>

      {/* About & CV Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10 max-w-5xl">
        <div className="lg:col-span-2 bg-white/[0.02] border border-white/10 p-6 flex flex-col justify-between">
          <div>
            <span className="font-mono text-[10px] text-white/50 tracking-widest uppercase block mb-2">
              CURATOR PROFILE // CORE POSITIONING
            </span>
            <h3
              className="font-display font-[800] text-xl sm:text-2xl text-white tracking-tight uppercase leading-snug mb-3"
              style={{ transform: 'scaleY(1.15)', transformOrigin: 'left' }}
            >
              {PROFILE_INFO.name}
            </h3>
            <p className="font-mono text-xs sm:text-sm text-white/90 leading-relaxed uppercase m-0 mb-4">
              {PROFILE_INFO.tagline}
            </p>
            <p className="font-mono text-xs text-white/70 leading-relaxed uppercase m-0">
              FRAMEWORK: BRIDGING PRODUCT MANAGEMENT, GROWTH/GTM EXPERIMENTS, AND ROBUST
              DATA/WORKFLOW ENGINEERING (PYTHON, SCI-PY, DOCKER, N8N).
            </p>
          </div>

          <div className="pt-6 border-t border-white/10 mt-6 flex flex-wrap gap-4 font-mono text-[11px] text-white/60 uppercase">
            <span>EMAIL: {PROFILE_INFO.email}</span>
            <span>TEL: {PROFILE_INFO.phone}</span>
            <span>LOC: {PROFILE_INFO.location}</span>
          </div>
        </div>

        <div className="bg-white/[0.02] border border-white/10 p-6 flex flex-col justify-between">
          <div>
            <span className="font-mono text-[10px] text-white/50 tracking-widest uppercase block mb-2">
              ACADEMICS &amp; HONORS
            </span>
            <div className="font-mono text-xs text-white/90 leading-relaxed uppercase mb-4">
              {PROFILE_INFO.education}
            </div>
            <div className="space-y-1.5 border-t border-white/10 pt-3">
              {PROFILE_INFO.achievements.map((ach, idx) => (
                <div key={idx} className="font-mono text-[11px] text-emerald-400 flex items-start gap-1.5">
                  <span>★</span>
                  <span>{ach}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/10">
            <span className="font-mono text-[10px] text-white/40 tracking-wider uppercase block">
              STATUS: ENROLLED // JADAVPUR UNIVERSITY ('28)
            </span>
          </div>
        </div>
      </div>

      {/* Index List */}
      <div className="flex flex-col divide-y divide-white/10 max-w-5xl">
        {ARCHIVE_ARTIFACTS.map((item) => (
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
                {item.serialNumber}
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
                {item.categoryLabel}
              </span>
              <span className="font-mono text-[11px] text-white/40">
                {item.timeframe}
              </span>
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
