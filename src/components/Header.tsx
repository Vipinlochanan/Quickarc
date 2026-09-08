import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/websiteData';

interface HeaderProps {
  onOpenQuoteModal?: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (targetId === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.querySelector(targetId);
    if (element) {
      const headerOffset = 72;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-[#f1f1f1] border-b border-[#c1c7d2] transition-all duration-300 backdrop-blur-md ${
        isScrolled ? 'shadow-lg py-2' : 'py-3 md:py-4'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-10 h-[60px] md:h-[64px] flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => handleNavClick(e, '#')}
          className="flex items-center gap-2 md:gap-3 shrink-0 group"
        >
          <img
            src={COMPANY_INFO.logo}
            alt="Quick Arc Logo"
            className="w-[45px] h-[45px] md:w-[60px] md:h-[60px] object-contain transition-transform group-hover:scale-105 -ml-[10px] mt-0"
          />
          <span className="text-[25px] font-bold tracking-tight -ml-[10px] md:-ml-[16px] inline-flex items-baseline">
            <span className="font-['Hanken_Grotesk'] text-[#0000b9]">Quick&nbsp;</span>
            <span className="font-['Dancing_Script',cursive] text-[#f24e1e] text-[35px] md:text-[30px] lg:text-[35px] font-bold">Arc</span>
          </span>
        </a>

        {/* Desktop / Tablet Navigation */}
        <nav className="hidden md:flex items-center gap-3 lg:gap-8">
          <a
            href="#"
            onClick={(e) => handleNavClick(e, '#')}
            className="font-['Work_Sans'] text-[13px] lg:text-[14px] font-bold text-[#085f9e] border-b-2 border-[#085f9e] tracking-wider uppercase transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, '#about')}
            className="font-['Work_Sans'] text-[13px] lg:text-[14px] font-semibold text-[#414750] hover:text-[#085f9e] tracking-wider uppercase transition-colors whitespace-nowrap"
          >
            About Us
          </a>
          <a
            href="#services"
            onClick={(e) => handleNavClick(e, '#services')}
            className="font-['Work_Sans'] text-[13px] lg:text-[14px] font-semibold text-[#414750] hover:text-[#085f9e] tracking-wider uppercase transition-colors whitespace-nowrap"
          >
            Our Services
          </a>
          <a
            href="#gallery"
            onClick={(e) => handleNavClick(e, '#gallery')}
            className="font-['Work_Sans'] text-[13px] lg:text-[14px] font-semibold text-[#414750] hover:text-[#085f9e] tracking-wider uppercase transition-colors whitespace-nowrap"
          >
            Gallery
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="font-['Work_Sans'] text-[13px] lg:text-[14px] font-semibold text-[#414750] hover:text-[#085f9e] tracking-wider uppercase transition-colors whitespace-nowrap"
          >
            Contact Us
          </a>
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="hidden md:flex bg-[#4183c4] text-white px-3 py-2 md:w-[130px] md:h-[50px] lg:w-auto lg:px-6 lg:py-3 rounded-lg font-['Work_Sans'] text-xs lg:text-[14px] font-semibold hover:bg-[#3478b8] transition-all btn-shadow uppercase tracking-wider text-center items-center justify-center whitespace-nowrap -mr-[6px]"
          >
            Get Free Quote
          </a>

          <button
            id="mobileMenuBtn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#1b1c1c] p-2 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {mobileMenuOpen && (
        <div
          id="mobileMenu"
          className="md:hidden absolute top-full left-0 w-full bg-[#f1f1f1] border-b border-[#c1c7d2] p-4 flex flex-col gap-3 shadow-xl animate-fade-in"
        >
          <a
            href="#"
            onClick={(e) => handleNavClick(e, '#')}
            className="font-['Work_Sans'] text-[15px] font-bold text-[#085f9e] py-2 border-b border-gray-200"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, '#about')}
            className="font-['Work_Sans'] text-[15px] font-semibold text-[#414750] py-2 border-b border-gray-200"
          >
            About Us
          </a>
          <a
            href="#services"
            onClick={(e) => handleNavClick(e, '#services')}
            className="font-['Work_Sans'] text-[15px] font-semibold text-[#414750] py-2 border-b border-gray-200"
          >
            Our Services
          </a>
          <a
            href="#gallery"
            onClick={(e) => handleNavClick(e, '#gallery')}
            className="font-['Work_Sans'] text-[15px] font-semibold text-[#414750] py-2 border-b border-gray-200"
          >
            Gallery
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="font-['Work_Sans'] text-[15px] font-semibold text-[#414750] py-2 border-b border-gray-200"
          >
            Contact Us
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="bg-[#4183c4] text-white px-6 py-3.5 rounded-lg font-['Work_Sans'] text-[15px] font-bold text-center mt-2 uppercase tracking-wider"
          >
            Get Free Quote
          </a>
        </div>
      )}
    </header>
  );
};
