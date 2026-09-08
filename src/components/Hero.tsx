import React from 'react';
import { COMPANY_INFO } from '../data/websiteData';

export const Hero: React.FC = () => {
  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      const headerOffset = 72;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#fbf9f9] py-14 md:py-24">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={COMPANY_INFO.heroBg}
          alt="Mobile Welding Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/55 backdrop-brightness-90"></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 md:px-10 grid grid-cols-1 gap-12 items-center relative z-10">
        <div className="flex flex-col gap-6 md:gap-8 text-white max-w-3xl">
          <div className="space-y-3">
            <h1
              style={{
                color: '#f77807',
                fontSize: '35px',
                lineHeight: '40px',
                fontFamily: 'Verdana, sans-serif',
                fontWeight: 'bold',
              }}
              className="tracking-tight"
            >
              Your local Welder <br />
              <span
                style={{
                  fontSize: '29px',
                  lineHeight: '35px',
                  fontWeight: 'bold',
                }}
                className="text-[#4183c4]"
              >
                Light Fabrication and Repairs
              </span>
            </h1>
          </div>

          <p className="font-['Work_Sans'] text-base sm:text-lg md:text-xl max-w-2xl text-gray-100 leading-relaxed">
            Quick Arc doing light fabrication and repairs in Townsville. We handle MIG, TIG &amp; Aluminium welding, structural repairs, modifications, and light custom welding — including places with no access to power.
          </p>

          {/* Key Feature Badges */}
          <div className="flex flex-wrap gap-3 py-2">
            <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs md:text-sm font-semibold text-white border border-white/20">
              <span className="material-symbols-outlined text-[18px] text-[#4183c4]">verified</span>
              Trade Qualified
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs md:text-sm font-semibold text-white border border-white/20">
              <span className="material-symbols-outlined text-[18px] text-[#4183c4]">bolt</span>
              On-site Generator Power
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs md:text-sm font-semibold text-white border border-white/20">
              <span className="material-symbols-outlined text-[18px] text-[#4183c4]">location_on</span>
              Greater Townsville Region
            </span>
          </div>

          {/* Action Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="#contact"
              onClick={handleScrollToContact}
              className="bg-[#4183c4] text-white px-8 py-4 rounded-lg font-['Work_Sans'] font-semibold text-center btn-shadow hover:bg-[#3478b8] transition-all uppercase tracking-wider text-sm sm:text-base flex items-center justify-center gap-2"
            >
              Get Free Quote
            </a>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="border-2 border-[#4183c4] bg-black/20 hover:bg-[#4183c4]/20 backdrop-blur-sm px-8 py-4 rounded-lg font-['Work_Sans'] font-semibold text-center transition-colors flex items-center justify-center gap-2 text-white hover:text-white text-sm sm:text-base"
            >
              <span className="material-symbols-outlined text-[20px]">call</span>
              {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
