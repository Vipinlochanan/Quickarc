import React from 'react';
import { ProjectItem } from '../types';

interface ImageModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onSelectProjectForQuote: (title: string) => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  project,
  onClose,
  onSelectProjectForQuote
}) => {
  if (!project) return null;

  const handleQuoteClick = () => {
    onSelectProjectForQuote(project.title);
    onClose();
    const element = document.querySelector('#contact');
    if (element) {
      const headerOffset = 72;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative border border-white/20 my-auto max-h-[90vh] flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        {/* Image Display */}
        <div className="relative bg-black h-[320px] sm:h-[420px] flex items-center justify-center overflow-hidden shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain"
          />
          {project.beforeAfter && (
            <div className="absolute bottom-4 left-4 bg-black/75 text-white text-xs font-semibold px-3 py-1.5 rounded-md backdrop-blur-md border border-white/20">
              ⚡ On-Site Restoration
            </div>
          )}
        </div>

        {/* Modal Info */}
        <div className="p-6 sm:p-8 space-y-4 overflow-y-auto">
          <div className="flex items-center justify-between gap-4">
            <div>
              <span className="text-[#085f9e] text-xs font-bold uppercase tracking-wider bg-[#d1e4ff] px-2.5 py-1 rounded">
                {project.category}
              </span>
              <h3 className="font-['Hanken_Grotesk'] text-2xl font-bold text-[#1b1c1c] mt-2">
                {project.title}
              </h3>
            </div>
          </div>

          <p className="text-[#414750] font-['Work_Sans'] text-base leading-relaxed">
            {project.description}
          </p>

          <div className="pt-4 border-t border-[#c1c7d2] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#717781] italic">
              Crafted in Townsville by Quick Arc Trade Welding
            </p>

            <button
              onClick={handleQuoteClick}
              className="w-full sm:w-auto bg-[#4183c4] hover:bg-[#3478b8] text-white px-6 py-3 rounded-lg font-bold text-sm transition-all btn-shadow flex items-center justify-center gap-2 uppercase tracking-wider"
            >
              <span>Get Quote for Similar Work</span>
              <span className="material-symbols-outlined text-[18px]">send</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
