import React from 'react';
import { COMPANY_INFO } from '../data/websiteData';

export const About: React.FC = () => {
  return (
    <section className="py-16 md:py-28 bg-[#fbf9f9] border-y border-[#c1c7d2]/30" id="about">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        
        {/* Left Image Section */}
        <div className="order-2 md:order-1 relative">
          <div className="rounded-xl overflow-hidden border border-[#c1c7d2] bg-white shadow-md">
            <img
              src={COMPANY_INFO.aboutImg}
              alt="Quick Arc Founder and Mobile Trailer Truck"
              className="w-full h-auto object-cover"
            />
          </div>
          {/* Badge Overlay */}
          <div
            style={{
              width: '260px',
              paddingLeft: '15px',
              paddingRight: '15px',
              paddingTop: '3px',
              paddingBottom: '7px',
            }}
            className="absolute -bottom-3 right-1 sm:-bottom-5 sm:right-4 md:right-6 bg-[#4183c4] text-white rounded-lg sm:rounded-xl shadow-xl max-w-[260px]"
          >
            <p className="font-['Hanken_Grotesk'] text-lg sm:text-xl font-bold">100% Mobile</p>
            <p className="font-['Work_Sans'] text-xs opacity-90 leading-tight">Fully equipped for on-site repairs anywhere in Townsville</p>
          </div>
        </div>

        {/* Right Content Section */}
        <div className="order-1 md:order-2 space-y-6 md:space-y-8">
          <div className="space-y-3">
            <span className="text-[#085f9e] font-['Work_Sans'] font-bold text-xs uppercase tracking-widest px-3 py-1 bg-[#d1e4ff] rounded-md inline-block">
              Locally Owned &amp; Operated
            </span>
            <h2 className="font-['Hanken_Grotesk'] text-2xl sm:text-3xl md:text-4xl font-bold text-[#1b1c1c] leading-tight">
              Backyard-born onsite welding &amp; light fabrication expert
            </h2>
          </div>

          <div className="space-y-5 font-['Work_Sans'] text-[#414750] text-base md:text-lg leading-relaxed">
            <p>
              Born in my own backyard workshop, Quick Arc began as a solo gig doing light fabrication and simple repairs in Townsville. Over time, word-of-mouth grew the work, and today I'm a fully equipped, trade-qualified, on-site welder bringing fast, precise mobile welding and light fabrication direct to your location.
            </p>
            <p>
              We are proud to be a locally owned and operated business serving the Greater Townsville region with integrity and high-quality craftsmanship.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-[#efeded] rounded-lg border border-[#c1c7d2]/50">
                <div className="flex items-center gap-2 font-['Hanken_Grotesk'] font-bold text-[#1b1c1c]">
                  <span className="material-symbols-outlined text-[#085f9e]">construction</span>
                  <span>MIG, TIG &amp; Arc</span>
                </div>
                <p className="text-xs text-[#414750] mt-1">Specialised in steel &amp; aluminium</p>
              </div>

              <div className="p-4 bg-[#efeded] rounded-lg border border-[#c1c7d2]/50">
                <div className="flex items-center gap-2 font-['Hanken_Grotesk'] font-bold text-[#1b1c1c]">
                  <span className="material-symbols-outlined text-[#085f9e]">precision_manufacturing</span>
                  <span>Custom Fab</span>
                </div>
                <p className="text-xs text-[#414750] mt-1">Built to your exact specs</p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#c1c7d2]">
              <p className="font-bold text-[#1b1c1c] text-sm md:text-base">
                ABN: <span className="font-mono text-[#085f9e]">{COMPANY_INFO.abn}</span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
