import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/websiteData';

export const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (targetId === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.querySelector(targetId);
    if (element) {
      const headerOffset = 72;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1a1a1a] text-[#e3e2e2] py-16 md:py-20 border-t border-gray-800">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
        
        {/* Company Info Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <img
              src={COMPANY_INFO.logo}
              alt="Quick Arc Logo"
              className="w-[50px] h-[50px] object-contain"
            />
            <span className="text-2xl font-bold tracking-tight inline-flex items-baseline">
              <span className="font-['Hanken_Grotesk'] text-white">Quick&nbsp;</span>
              <span className="font-['Dancing_Script',cursive] text-[#f24e1e] text-[35px] font-bold">Arc</span>
            </span>
          </div>
          <p className="text-[#c1c7d2] font-['Work_Sans'] text-sm leading-relaxed max-w-sm">
            Mobile welding &amp; light fabrication, Townsville. Professional repairs and custom metal work delivered directly to your doorstep or job site.
          </p>
          <p className="text-xs text-[#717781] font-mono">
            ABN: {COMPANY_INFO.abn}
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h4 className="text-white font-['Work_Sans'] text-xs font-bold uppercase tracking-widest border-b border-gray-700 pb-3 inline-block">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-3 font-['Work_Sans'] text-sm text-[#c1c7d2]">
            <li>
              <a href="#" onClick={(e) => handleNavClick(e, '#')} className="hover:text-white transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-white transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-white transition-colors">
                Our Services
              </a>
            </li>
            <li>
              <a href="#gallery" onClick={(e) => handleNavClick(e, '#gallery')} className="hover:text-white transition-colors">
                Gallery
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-white transition-colors">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="space-y-6">
          <h4 className="text-white font-['Work_Sans'] text-xs font-bold uppercase tracking-widest border-b border-gray-700 pb-3 inline-block">
            Contact Info
          </h4>
          <div className="space-y-4 font-['Work_Sans'] text-sm text-[#c1c7d2]">
            <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="flex items-center gap-3 hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[#4183c4]">call</span>
              <span>{COMPANY_INFO.phone}</span>
            </a>

            <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-3 hover:text-white transition-colors break-all">
              <span className="material-symbols-outlined text-[#4183c4]">mail</span>
              <span>{COMPANY_INFO.email}</span>
            </a>

            <a
              href={COMPANY_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined text-[#4183c4] mt-0.5">location_on</span>
              <span>{COMPANY_INFO.address}</span>
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-10 mt-16 pt-8 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#717781] font-['Work_Sans']">
          <p>© {new Date().getFullYear()} Quick Arc. All rights reserved.</p>
          <div className="flex gap-6">
            <button onClick={() => setModalType('privacy')} className="hover:text-white transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => setModalType('terms')} className="hover:text-white transition-colors">
              Terms of Service
            </button>
          </div>
        </div>
      </div>

      {/* Privacy / Terms Modal */}
      {modalType && (
        <div className="fixed inset-0 z-[110] bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in">
          <div className="bg-white text-[#1b1c1c] rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-4 shadow-2xl relative">
            <button
              onClick={() => setModalType(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
            <h3 className="font-['Hanken_Grotesk'] text-2xl font-bold">
              {modalType === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
            </h3>
            <div className="text-sm text-[#414750] space-y-3 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              {modalType === 'privacy' ? (
                <>
                  <p>Quick Arc respects your personal privacy. Any information submitted via our quote form or phone contacts (such as your name, mobile phone number, email address, and service requests) is strictly used to communicate with you regarding your welding inquiries in Townsville.</p>
                  <p>We do not sell, rent, or share customer information with third parties.</p>
                </>
              ) : (
                <>
                  <p>By requesting welding or light fabrication services from Quick Arc, you agree to provide accurate job site details and access to the working area.</p>
                  <p>All on-site estimates are subject to physical inspection. Warranty covering structural welds applies to standard trade usage and specified job scopes.</p>
                </>
              )}
            </div>
            <div className="pt-4 border-t border-gray-200 text-right">
              <button
                onClick={() => setModalType(null)}
                className="bg-[#085f9e] text-white px-5 py-2 rounded-lg font-semibold text-xs uppercase"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
