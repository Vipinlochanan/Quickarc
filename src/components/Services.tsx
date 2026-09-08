import React, { useState } from 'react';
import { SERVICES } from '../data/websiteData';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService?: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'trailer', label: 'Trailers' },
    { id: 'gate-grill', label: 'Gates & Grills' },
    { id: 'pet-cage', label: 'Cages & Enclosures' },
    { id: 'play-area', label: 'Play Areas & Park' }
  ];

  const filteredServices = selectedCategory === 'all'
    ? SERVICES
    : SERVICES.filter(s => s.id === selectedCategory);

  const handleQuoteClick = (serviceTitle: string) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const element = document.querySelector('#contact');
    if (element) {
      const headerOffset = 72;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-32 bg-[#f1f1f1]" id="services">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <span className="text-[#085f9e] font-['Work_Sans'] font-bold text-xs uppercase tracking-widest px-3 py-1 bg-[#d1e4ff] rounded-md inline-block">
            What We Do
          </span>
          <h2 className="font-['Hanken_Grotesk'] text-3xl md:text-4xl font-bold text-[#1b1c1c]">
            Our Services
          </h2>
          <div className="h-1 w-20 bg-[#4183c4] mx-auto rounded-full"></div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full font-['Work_Sans'] text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#085f9e] text-white shadow-md'
                  : 'bg-white text-[#414750] border border-[#c1c7d2] hover:border-[#085f9e] hover:text-[#085f9e]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {filteredServices.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="group bg-[#fbf9f9] rounded-xl overflow-hidden border border-[#c1c7d2] bento-card-hover flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="h-64 sm:h-72 overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-[#085f9e]/90 text-white text-xs font-semibold px-3 py-1.5 rounded-md backdrop-blur-sm">
                    Mobile On-Site
                  </div>
                </div>

                <div className="p-6 md:p-8 space-y-4">
                  <h3 className="font-['Hanken_Grotesk'] text-2xl font-semibold text-[#1b1c1c]">
                    {service.title}
                  </h3>
                  <p className="text-[#414750] font-['Work_Sans'] text-base leading-relaxed">
                    {service.description}
                  </p>

                  {/* Tags */}
                  {service.tags && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {service.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-[#e9e8e7] text-[#414750] text-xs font-medium px-2.5 py-1 rounded-md border border-[#c1c7d2]/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0">
                <button
                  onClick={() => handleQuoteClick(service.title)}
                  className="w-full py-3 px-4 bg-white hover:bg-[#4183c4] text-[#085f9e] hover:text-white font-['Work_Sans'] font-semibold text-sm rounded-lg border border-[#4183c4] transition-all flex items-center justify-center gap-2 group-hover:shadow-md"
                >
                  <span>Request Quote for {service.title}</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
