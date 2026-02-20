import React from 'react';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Classes from './sections/Classes';
import Pricing from './sections/Pricing';
import Testimonials from './sections/Testimonials';
import NoiseBackground from './components/NoiseBackground';
import Marquee from './components/Marquee';
import FadeIn from './components/FadeIn';
import WhatsAppFloat from './components/WhatsAppFloat';
import SmoothScroll from './components/SmoothScroll';
import CTA from './layout/CTA';

/**
 * Main Application Component for LP Iron Gym.
 * Orchestrates the layout, sections, background effects, and navigation.
 *
 * @module App
 * @returns {React.JSX.Element} The rendered application component.
 */
export default function App() {

  /**
   * Smoothly scrolls the window to the plans/pricing section.
   * @returns {void}
   */
  const handleScrollToPlans = () => {
    const plansSection = document.getElementById('planos');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <SmoothScroll>
      <main className="bg-gym-black min-h-screen flex flex-col relative selection:bg-gym-red selection:text-white overflow-x-hidden">

        {/* 1. Textura de Ruído (Noise) - Mantemos para aspecto de filme */}
        <NoiseBackground />

        {/* 2. NOVA TEXTURA: Grid Tecnológico no Fundo
         Fica fixo para criar profundidade enquanto você rola a página */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-cyber-grid opacity-60"></div>
          <div className="absolute inset-0 vignette"></div>
        </div>

        {/* Botão Flutuante */}
        <WhatsAppFloat />

        <Navbar />

        <Hero />

        <Marquee />

        {/* Container relativo para garantir que o conteúdo fique ACIMA do grid de fundo */}
        <div className="relative z-10">
          <Features />
          <Classes />
          <Pricing />
          <Testimonials />
        </div>

        {/* CTA Final */}
        <CTA />

        <Footer />
      </main>
    </SmoothScroll>
  )
}