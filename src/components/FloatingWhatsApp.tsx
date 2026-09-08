import React from 'react';
import { COMPANY_INFO } from '../data/websiteData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={`https://wa.me/${COMPANY_INFO.phoneRaw}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl transition-transform duration-300 hover:scale-110 group border-2 border-white/80"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp with Quick Arc"
    >
      <img
        src={COMPANY_INFO.whatsappIcon}
        alt="WhatsApp"
        className="w-8 h-8 sm:w-10 sm:h-10 object-contain transition-transform group-hover:scale-105"
      />
      <span className="absolute right-full mr-3 bg-black/80 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md hidden sm:block">
        Message Quick Arc
      </span>
    </a>
  );
};
