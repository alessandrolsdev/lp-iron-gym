import React from 'react';
import { Play, ArrowRight, Trophy } from 'lucide-react'; // Importei Trophy para a tag
import { motion } from 'framer-motion';
import Button from '../components/Button';
import FadeIn from '../components/FadeIn';
import IronCard from '../components/IronCard'; // <--- Importando o novo Card 3D

/**
 * Hero Section Component.
 * The primary focal point of the landing page, featuring a cinematic background,
 * dynamic text masking, and the primary call to action.
 *
 * @module sections/Hero
 * @returns {React.JSX.Element} The rendered Hero section.
 */
export default function Hero() {

  const handleScrollToPlans = () => {
    const plansSection = document.getElementById('planos');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">

      {/* 1. BACKGROUND IMAGE & OVERLAY */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop"
            alt="Background Gym"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* Overlay Principal */}
        <div className="absolute inset-0 bg-gradient-to-r from-gym-black via-gym-black/80 to-gym-black/40"></div>

        {/* --- CORREÇÃO DO "GRUDADO": Fade Suave na Base --- */}
        {/* Esse gradiente preto na parte inferior faz a transição suave para a Marquee */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gym-black via-gym-black/80 to-transparent z-10"></div>
      </div>

      {/* 2. CONTEÚDO PRINCIPAL */}
      <div className="container mx-auto px-4 z-10 relative pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* COLUNA ESQUERDA: TEXTO */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">

            {/* NOVA TAG: Mais Premium e Tech */}
            <FadeIn direction="down" delay={0.2}>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-sm border-l-4 border-gym-red bg-zinc-900/80 backdrop-blur-md mb-8 shadow-lg shadow-black/50 group hover:bg-zinc-800 transition-colors cursor-default">
                <Trophy size={16} className="text-gym-gold drop-shadow-[0_0_8px_rgba(197,160,89,0.8)]" />
                <div className="flex flex-col items-start">
                  <span className="text-[10px] text-gray-400 font-bold tracking-widest uppercase leading-none mb-0.5">Referência em Esperantina</span>
                  <span className="text-white font-display font-bold tracking-wide text-sm leading-none group-hover:text-gym-red transition-colors">TOP #1 ESTRUTURA</span>
                </div>
              </div>
            </FadeIn>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[0.9] mb-6 overflow-visible drop-shadow-xl">
              <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: "backOut", delay: 0.3 }}>
                CONSTRUA SUA
              </motion.div>
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "backOut", delay: 0.45 }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-gym-crimson via-gym-red to-white pb-2 text-glow"
              >
                MELHOR VERSÃO
              </motion.div>
            </h1>

            <FadeIn delay={0.6}>
              <p className="text-gray-300 text-lg md:text-xl max-w-xl mb-10 font-light leading-relaxed">
                Supere seus limites com equipamentos de elite, treinadores experientes e um ambiente focado no seu resultado. Pare de tentar, comece a treinar.
              </p>
            </FadeIn>

            <FadeIn delay={0.8} className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
              <Button
                onClick={handleScrollToPlans}
                className="flex items-center justify-center gap-2"
              >
                Começar Agora <ArrowRight size={20} />
              </Button>

              <a
                href="https://www.instagram.com/irongymgd/"
                target="_blank"
                rel="noreferrer"
                className="w-full md:w-auto"
              >
                <Button variant="outline" className="w-full flex items-center justify-center gap-2 group backdrop-blur-sm bg-white/5 border-white/20 hover:border-white">
                  <Play size={20} className="fill-white group-hover:fill-gym-red transition-colors" />
                  Tour Virtual
                </Button>
              </a>
            </FadeIn>
          </div>

          {/* COLUNA DIREITA: NOVO CARTÃO 3D */}
          <div className="hidden lg:flex justify-end pr-10 perspective-1000">
            <IronCard />
          </div>

        </div>
      </div>

      {/* 3. SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2 cursor-pointer hover:text-gym-red transition-colors z-20"
        onClick={handleScrollToPlans}
      >
        <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gym-red to-transparent"></div>
      </motion.div>
    </section>
  );
}