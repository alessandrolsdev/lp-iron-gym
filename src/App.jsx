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

export default function App() {

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
        {/* CTA Final: Fundo com Gradiente Vermelho Sangue e Textura de Halteres */}
        <section className="py-24 bg-gradient-to-br from-gym-crimson to-gym-red relative overflow-hidden z-10">
          <div className="container mx-auto px-4 text-center relative z-10">
            <FadeIn direction="up">
              <h2 className="text-3xl md:text-6xl font-display font-bold text-white mb-6 uppercase italic tracking-tighter drop-shadow-lg">
                Comece a sua jornada hoje
              </h2>
              <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-medium">
                Não deixe para segunda-feira o resultado que você pode começar a construir agora.
              </p>
              <button
                onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-black text-white border border-white/20 px-10 py-5 font-display font-bold uppercase tracking-wider rounded-sm hover:scale-105 hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-300 shadow-2xl"
              >
                Garantir minha vaga
              </button>
            </FadeIn>
          </div>

          {/* Nova Pattern de fundo com Halteres */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/dumbbell.png')] mix-blend-multiply"></div>
        </section>

        <Footer />
      </main>
    </SmoothScroll>
  )
}