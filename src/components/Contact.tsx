import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/websiteData';
import { QuoteFormData } from '../types';

interface ContactProps {
  selectedServicePreFill?: string;
}

export const Contact: React.FC<ContactProps> = ({ selectedServicePreFill }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    mobile: '',
    email: '',
    service: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitType, setSubmitType] = useState<'whatsapp' | 'email' | null>(null);

  useEffect(() => {
    if (selectedServicePreFill) {
      setFormData(prev => ({
        ...prev,
        service: selectedServicePreFill.toLowerCase().includes('trailer') ? 'trailer' :
                 selectedServicePreFill.toLowerCase().includes('gate') ? 'mig-tig' :
                 selectedServicePreFill.toLowerCase().includes('pet') ? 'arc' :
                 selectedServicePreFill.toLowerCase().includes('play') ? 'arc' : 'mig-tig'
      }));
    }
  }, [selectedServicePreFill]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.fullName.trim() || !formData.mobile.trim() || !formData.email.trim() || !formData.service || !formData.message.trim()) {
      alert('Please complete all form fields so we can generate your free quote.');
      return false;
    }
    return true;
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const text = `*New Quote Request*\n\n*Name:* ${formData.fullName}\n*Mobile:* ${formData.mobile}\n*Email:* ${formData.email}\n*Service:* ${formData.service.toUpperCase()}\n*Message:* ${formData.message}`;
    const waUrl = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');

    setSubmitType('whatsapp');
    setSubmitted(true);
  };

  const handleEmailSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const subject = encodeURIComponent(`Quote Request: ${formData.service.toUpperCase()} - ${formData.fullName}`);
    const body = encodeURIComponent(`Name: ${formData.fullName}\nMobile: ${formData.mobile}\nEmail: ${formData.email}\nService: ${formData.service}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`;

    setSubmitType('email');
    setSubmitted(true);
  };

  return (
    <section className="py-20 md:py-32 bg-[#fbf9f9]" id="contact">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10 grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12 lg:gap-16">
        
        {/* Left Column: Info & WhatsApp */}
        <div className="space-y-10">
          <div>
            <span className="text-[#085f9e] font-['Work_Sans'] font-bold text-xs uppercase tracking-widest px-3 py-1 bg-[#d1e4ff] rounded-md inline-block mb-3">
              Get In Touch
            </span>
            <h2 className="font-['Hanken_Grotesk'] text-3xl sm:text-4xl font-bold text-[#1b1c1c] mb-8">
              Contact Us
            </h2>

            <div className="space-y-6">
              {/* Call Us */}
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="flex items-start gap-4 group p-2 -ml-2 rounded-xl hover:bg-[#efeded] transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-[#e9e8e7] flex items-center justify-center text-[#085f9e] group-hover:bg-[#085f9e] group-hover:text-white transition-all shrink-0">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <p className="font-['Work_Sans'] text-xs uppercase font-bold tracking-wider text-[#414750] mb-0.5">
                    Call Us
                  </p>
                  <p className="font-['Hanken_Grotesk'] text-xl font-bold text-[#1b1c1c]">
                    {COMPANY_INFO.phone}
                  </p>
                </div>
              </a>

              {/* Email Us */}
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-start gap-4 group p-2 -ml-2 rounded-xl hover:bg-[#efeded] transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-[#e9e8e7] flex items-center justify-center text-[#085f9e] group-hover:bg-[#085f9e] group-hover:text-white transition-all shrink-0">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <p className="font-['Work_Sans'] text-xs uppercase font-bold tracking-wider text-[#414750] mb-0.5">
                    Email Us
                  </p>
                  <p className="font-['Hanken_Grotesk'] text-lg sm:text-xl font-bold text-[#1b1c1c] break-all">
                    {COMPANY_INFO.email}
                  </p>
                </div>
              </a>

              {/* Location */}
              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group p-2 -ml-2 rounded-xl hover:bg-[#efeded] transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-[#e9e8e7] flex items-center justify-center text-[#085f9e] group-hover:bg-[#085f9e] group-hover:text-white transition-all shrink-0">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <p className="font-['Work_Sans'] text-xs uppercase font-bold tracking-wider text-[#414750] mb-0.5">
                    Our Location
                  </p>
                  <p className="font-['Work_Sans'] text-base text-[#1b1c1c] leading-snug group-hover:text-[#085f9e] transition-colors">
                    6 Fitzgerald Cres, Kirwan,<br />
                    Queensland 4817
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* WhatsApp Direct Banner Box */}
          <div className="p-6 bg-[#efeded] rounded-xl border border-[#c1c7d2] space-y-4 shadow-sm">
            <p className="font-['Hanken_Grotesk'] text-xl font-bold text-[#1b1c1c]">
              Chat with us
            </p>
            <p className="text-xs text-[#414750]">
              Need a quick answer or want to send photos of your damaged trailer or gate? Message us directly on WhatsApp!
            </p>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-6 py-4 rounded-lg font-bold text-base hover:bg-[#1ebd59] transition-all w-full shadow-md"
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3oa-wTqHMopAd3vg4ucd4MBunMNMlOD5JVEEAubYk-kgWermrnS8AfEsoO9adlduFAklR5FK-3YqoVCRXExuuFJf5yifh-AR3lSJ-fsZ2HddCIhGV__Wn8CQTYsN_v9JWgXNanPL8Jy3X-bqm7TPHL6VeiToarZmix9JbdP6Z_49Ps2sJg0WdFgKD_4aojP0u-2s7fZnr8vxSdR8hPHe8s0Y4eGLUgpYUIBMHC9xMghiOr91sVljRs85sn1o1qBH_0n_ZFgjrJig"
                alt="WhatsApp"
                className="w-6 h-6 object-contain"
              />
              <span>Message on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Right Column: Quote Form */}
        <div className="bg-white p-6 sm:p-10 md:p-12 rounded-2xl border border-[#c1c7d2] shadow-xl">
          <h3 className="font-['Hanken_Grotesk'] text-2xl sm:text-3xl font-bold text-[#1b1c1c] mb-2">
            Get Your Free Quote
          </h3>
          <p className="text-sm text-[#414750] mb-8">
            Fill out the details below and we'll reply promptly with a free quote.
          </p>

          {!submitted ? (
            <form onSubmit={handleWhatsAppSubmit} className="space-y-6" id="quoteForm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-['Work_Sans'] text-xs font-bold uppercase tracking-wider text-[#414750]">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full p-4 bg-[#fbf9f9] border border-[#c1c7d2] rounded-lg focus:border-[#085f9e] focus:ring-4 focus:ring-[#085f9e]/10 outline-none transition-all text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-['Work_Sans'] text-xs font-bold uppercase tracking-wider text-[#414750]">
                    Mobile Number *
                  </label>
                  <input
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    required
                    className="w-full p-4 bg-[#fbf9f9] border border-[#c1c7d2] rounded-lg focus:border-[#085f9e] focus:ring-4 focus:ring-[#085f9e]/10 outline-none transition-all text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-['Work_Sans'] text-xs font-bold uppercase tracking-wider text-[#414750]">
                  E-mail Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email address"
                  required
                  className="w-full p-4 bg-[#fbf9f9] border border-[#c1c7d2] rounded-lg focus:border-[#085f9e] focus:ring-4 focus:ring-[#085f9e]/10 outline-none transition-all text-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="font-['Work_Sans'] text-xs font-bold uppercase tracking-wider text-[#414750]">
                  Service Required *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full p-4 bg-[#fbf9f9] border border-[#c1c7d2] rounded-lg focus:border-[#085f9e] focus:ring-4 focus:ring-[#085f9e]/10 outline-none transition-all text-sm"
                >
                  <option value="" disabled>Select a service</option>
                  <option value="arc">Arc Welding</option>
                  <option value="mig-tig">MIG or TIG Welding</option>
                  <option value="aluminium">Aluminium Welding</option>
                  <option value="trailer">Trailer Welding &amp; Repairs</option>
                  <option value="gate-grill">Gate and Grill Works</option>
                  <option value="pet-cage">Pet / Ute Cage Fabrication</option>
                  <option value="play-area">Play Area / Equipment Repair</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="font-['Work_Sans'] text-xs font-bold uppercase tracking-wider text-[#414750]">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Describe your project details, location, and dimensions..."
                  required
                  className="w-full p-4 bg-[#fbf9f9] border border-[#c1c7d2] rounded-lg focus:border-[#085f9e] focus:ring-4 focus:ring-[#085f9e]/10 outline-none transition-all text-sm"
                ></textarea>
              </div>

              <div className="flex flex-col gap-3 pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#4183c4] hover:bg-[#3478b8] text-white p-4 rounded-lg font-bold text-base transition-all btn-shadow uppercase tracking-widest flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[20px]">send</span>
                  <span>Send Quote Request</span>
                </button>

                <button
                  type="button"
                  onClick={handleEmailSubmit}
                  className="w-full border border-[#085f9e] text-[#085f9e] hover:bg-[#085f9e] hover:text-white p-3.5 rounded-lg font-semibold text-sm transition-all uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">mail</span>
                  <span>Send via Email Client</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="p-8 bg-[#d1e4ff] text-[#00497c] rounded-xl border border-[#085f9e]/20 space-y-4 animate-fade-in text-center">
              <span className="material-symbols-outlined text-[#085f9e] text-5xl">check_circle</span>
              <h4 className="font-['Hanken_Grotesk'] text-2xl font-bold">
                Quote Request Initiated!
              </h4>
              <p className="font-['Work_Sans'] text-sm sm:text-base leading-relaxed">
                {submitType === 'whatsapp'
                  ? 'Your message details have been passed to WhatsApp. Click send in WhatsApp to finish messaging Quick Arc!'
                  : 'Your email client has been opened with your quote request details. Thank you!'}
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 bg-[#085f9e] text-white px-6 py-2.5 rounded-lg font-semibold text-xs uppercase tracking-wider hover:bg-[#00497c] transition-colors"
              >
                Send Another Message
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
