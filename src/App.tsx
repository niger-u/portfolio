import React, { useState } from 'react';
import { FilmGrain } from './components/FilmGrain';
import { CustomCursor } from './components/CustomCursor';
import { HeroVideo } from './components/HeroVideo';
import { BrutalistUI } from './components/BrutalistUI';
import { VaultGallery } from './components/VaultGallery';
import { ArtifactModal } from './components/ArtifactModal';
import { IndexDrawer } from './components/IndexDrawer';
import { ArchiveArtifact } from './data/archiveData';

export const App: React.FC = () => {
  const [selectedArtifact, setSelectedArtifact] = useState<ArchiveArtifact | null>(null);
  const [isIndexOpen, setIsIndexOpen] = useState(false);

  const handleEnterClick = () => {
    // Scroll down to the gallery phase or loop
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div
      id="scroll-spacer"
      className="relative select-none bg-black text-white w-full lg:cursor-none min-h-[500vh]"
    >
      {/* 35mm Analog Film Grain Overlay Layer */}
      <FilmGrain />

      {/* Desktop Custom 48x48 Industrial Exclusion Reticle Cursor */}
      <CustomCursor />

      {/* Hero Dual-Video Cursor Scrubbing Background */}
      <HeroVideo />

      {/* Overlaid Brutalist UI (Wordmark, Nav, Manifesto, Outro Info, ENTER Button) */}
      <BrutalistUI
        onOpenIndex={() => setIsIndexOpen(true)}
        onEnterClick={handleEnterClick}
      />

      {/* Black Panel Vault Gallery (Sliding Anti-Design Grid & RAF Card Physics) */}
      <VaultGallery onSelectArtifact={(artifact) => setSelectedArtifact(artifact)} />

      {/* Interactive Artifact Detail Modal */}
      <ArtifactModal
        artifact={selectedArtifact}
        onClose={() => setSelectedArtifact(null)}
      />

      {/* Archival Index & About Dossier Drawer */}
      <IndexDrawer
        isOpen={isIndexOpen}
        onClose={() => setIsIndexOpen(false)}
        onSelectArtifact={(artifact) => setSelectedArtifact(artifact)}
      />
    </div>
  );
};

export default App;
