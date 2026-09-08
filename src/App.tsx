import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { ProjectsGallery } from './components/ProjectsGallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('');

  const handleSelectServiceForQuote = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
  };

  return (
    <div className="min-h-screen flex flex-col font-['Work_Sans'] bg-[#fbf9f9] text-[#1b1c1c] selection:bg-[#d1e4ff] selection:text-[#001d36] relative">
      {/* Header */}
      <Header />

      {/* Main Page Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Services onSelectService={handleSelectServiceForQuote} />
        <ProjectsGallery onSelectProjectForQuote={handleSelectServiceForQuote} />
        <Contact selectedServicePreFill={selectedService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Fixed WhatsApp Action Badge */}
      <FloatingWhatsApp />
    </div>
  );
}
