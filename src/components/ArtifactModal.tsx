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
          boxShadow: '0 0 50px rgba(255, 255, 255, 0.05)',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 font-mono text-xs text-white/70 hover:text-white bg-transparent border-0 cursor-pointer p-2 tracking-widest uppercase flex items-center gap-2 group"
        >
          [ ESC // CLOSE ]
        </button>

        {/* Image Preview */}
        <div className="w-full md:w-1/2 aspect-[2/3] border border-white/20 overflow-hidden relative">
          <img
            src={artifact.imageUrl}
            alt={artifact.title}
            className="w-full h-full object-cover grayscale contrast-[135%]"
          />
          <div className="absolute top-2 left-2 z-10 mix-blend-exclusion">
            <span className="font-mono text-[10px] text-white tracking-widest uppercase">
              {artifact.indexTag}
            </span>
          </div>
        </div>

        {/* Content Details */}
        <div className="w-full md:w-1/2 flex flex-col justify-between py-2">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-block px-2 py-0.5 border border-white/30 font-mono text-[10px] text-white/80 uppercase tracking-widest">
                {artifact.category}
              </span>
              {artifact.year && (
                <span className="font-mono text-[10px] text-white/50 tracking-wider">
                  ARCHIVED // {artifact.year}
                </span>
              )}
            </div>

            <h2
              className="font-display font-[900] text-2xl sm:text-4xl text-white tracking-tight leading-[95%] uppercase mb-4"
              style={{ transform: 'scaleY(1.15)', transformOrigin: 'left top' }}
            >
              {artifact.title}
            </h2>

            <p className="font-mono text-xs sm:text-sm text-white/80 leading-relaxed mb-6 uppercase">
              {artifact.description}
            </p>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
            {artifact.link ? (
              <a
                href={artifact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-white text-black font-display font-[900] text-sm tracking-wider uppercase text-center hover:bg-neutral-200 transition-colors"
              >
                OPEN EXTERNAL SOURCE →
              </a>
            ) : (
              <div className="w-full py-3 border border-white/20 text-white/50 font-mono text-xs tracking-wider uppercase text-center">
                ARCHIVED SPECIFICATION // CLASSIFIED
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
