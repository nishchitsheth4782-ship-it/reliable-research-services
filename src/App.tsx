import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhoWeHelp } from './components/WhoWeHelp';
import { HowWeWork } from './components/HowWeWork';
import { WhyUs } from './components/WhyUs';
import { AboutFounder } from './components/AboutFounder';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppBubble } from './components/WhatsAppBubble';

export default function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [defaultService, setDefaultService] = useState('AI-Assisted Website');

  const handleOpenContact = (service: string = 'AI-Assisted Website') => {
    setDefaultService(service);
    setContactModalOpen(true);
  };

  const handleNavigate = (sectionId: string) => {
    if (sectionId === 'contact') {
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        setContactModalOpen(true);
      }
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-white">
      {/* Header with prominent logo in top left */}
      <Header onNavigate={handleNavigate} onOpenContact={handleOpenContact} />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenContact={handleOpenContact} onExploreServices={handleExploreServices} />

        {/* What We Offer */}
        <Services onOpenContact={handleOpenContact} />

        {/* Who We Help */}
        <WhoWeHelp onOpenContact={handleOpenContact} />

        {/* How We Work */}
        <HowWeWork />

        {/* Why Work With Us */}
        <WhyUs />

        {/* About Us & Founder */}
        <AboutFounder />

        {/* FAQ & AEO */}
        <FAQ />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Contact Modal when triggered */}
      {contactModalOpen && (
        <Contact
          defaultService={defaultService}
          isOpenModal={true}
          onCloseModal={() => setContactModalOpen(false)}
        />
      )}

      {/* Floating WhatsApp Chat Bubble */}
      <WhatsAppBubble />
    </div>
  );
}

