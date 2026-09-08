import React, { useState } from 'react';
import { PROJECTS } from '../data/websiteData';
import { ProjectItem } from '../types';
import { ImageModal } from './ImageModal';

interface ProjectsGalleryProps {
  onSelectProjectForQuote: (title: string) => void;
}

export const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({ onSelectProjectForQuote }) => {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [showFullGallery, setShowFullGallery] = useState(false);

  // Additional gallery examples if user clicks "View Full Gallery"
  const extendedProjects: ProjectItem[] = [
    ...PROJECTS,
    {
      id: 'boat-trailer-mod',
      title: 'Boat Trailer Crossmember',
      category: 'Marine & Trailer',
      description: 'Heavy duty aluminium crossmember welding and rust elimination for local marine boat trailer.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzlUq79NLtA42uukZ--Yg6QHJoQGayyiXhL6t-tGI3XLpbELp4J69kvCZm-6q8BfY5v52EWV0h_KlBnF43hHlOb0hZTk93ibWGOZKBptSmh-oCv8F6J1FHL-ttrJIvVC7aMfFl7SDWTsZcdkUxUxyX5KNt6jKBb4I4ZFLR3TzW-nnzIyksxB__vi1AYdzBzB7wxAzevbN3EVqxgfZQGfWlJzTrQ0gUy-PpHJG9Kf7cW78ViJ_a2AKNIfmdb2QHBWqT5Gdw7LlWjXY4rA'
    },
    {
      id: 'security-grill-door',
      title: 'Residential Window Grills',
      category: 'Security & Grills',
      description: 'Custom powder-coated security window grills fabricated and installed on-site.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA92MX7Nfpl1FZgqYDGA0fY2RXzytAiE-yz4TkZQOdoOJ23IYU3wwcY8GEwLCSsE2k_qCMW9cgES95XHTPx_XMm-TjL909PvdcX0CFk8RrRwulLrWA3GsG40fDavVpg_yMEqLuZWhM-3pWfH0sLBxg7kRDWivUwu7XsXYMod1dWW3WZlOEOoEtnRt-mY_xdwD8c1agQQ7mN8O-1jKNEiylSrK-YQzmldu5nbHDZHd_yMu6BqjwxWYKF0IQl3DNQM9jxnvbyhFO-OKcUww'
    }
  ];

  const displayedProjects = showFullGallery ? extendedProjects : PROJECTS;

  return (
    <section className="py-20 md:py-32 bg-[#fbf9f9]" id="gallery">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-[#085f9e] font-['Work_Sans'] font-bold text-xs uppercase tracking-widest px-3 py-1 bg-[#d1e4ff] rounded-md inline-block">
            Our Portfolio
          </span>
          <h2 className="font-['Hanken_Grotesk'] text-3xl md:text-4xl font-bold text-[#1b1c1c]">
            Recent Projects
          </h2>
          <p className="text-[#414750] font-['Work_Sans'] text-base md:text-lg max-w-2xl mx-auto">
            A closer look at our mobile welding repairs and custom fabrication across Townsville.
          </p>
          <div className="h-1 w-20 bg-[#4183c4] mx-auto rounded-full"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group bg-[#fbf9f9] rounded-xl overflow-hidden border border-[#c1c7d2] bento-card-hover flex flex-col cursor-pointer shadow-sm"
            >
              <div className="h-64 sm:h-72 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="bg-white/90 text-[#085f9e] p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                    <span className="material-symbols-outlined text-2xl">zoom_in</span>
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 bg-black/70 text-white text-xs font-semibold px-2.5 py-1 rounded backdrop-blur-sm">
                  {project.category}
                </div>
              </div>

              <div className="p-6 md:p-8 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-['Hanken_Grotesk'] text-xl sm:text-2xl font-semibold text-[#1b1c1c] group-hover:text-[#085f9e] transition-colors">
                    {project.title}
                  </h3>
                  <span className="material-symbols-outlined text-[#4183c4] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
                <p className="text-[#414750] font-['Work_Sans'] text-sm sm:text-base">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Gallery CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={() => setShowFullGallery(!showFullGallery)}
            className="inline-flex items-center gap-2 bg-[#4183c4] hover:bg-[#3478b8] text-white px-8 py-4 rounded-lg font-['Work_Sans'] font-semibold text-sm btn-shadow transition-all uppercase tracking-wider"
          >
            <span>{showFullGallery ? 'Show Less Projects' : 'View Full Gallery'}</span>
            <span className="material-symbols-outlined text-[18px]">
              {showFullGallery ? 'expand_less' : 'photo_library'}
            </span>
          </button>
        </div>

      </div>

      {/* Lightbox Modal */}
      <ImageModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onSelectProjectForQuote={onSelectProjectForQuote}
      />
    </section>
  );
};
