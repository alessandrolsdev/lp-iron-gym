import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Flame, Timer, Zap } from 'lucide-react';

export default function HeroHUD() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="relative hidden md:block w-[380px]"
    >
      {/* CARD PRINCIPAL (Glassmorphism) */}
      <motion.div 
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl shadow-gym-red/10 overflow-hidden"
      >
        {/* Glow de fundo dentro do card */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gym-red/20 blur-[50px] rounded-full pointer-events-none"></div>

        {/* Cabeçalho do Card */}
        <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center border border-white/10">
              <span className="text-white font-bold">IG</span>
            </div>
            <div>
              <h4 className="text-white text-sm font-bold tracking-wider">TREINO ATUAL</h4>
              <span className="text-xs text-gym-red font-mono animate-pulse">● AO VIVO</span>
            </div>
          </div>
          <Zap size={20} className="text-gym-gold fill-gym-gold" />
        </div>

        {/* Gráfico de Batimentos (SVG Animado) */}
        <div className="mb-6 relative h-24 flex items-end gap-1">
          <svg className="w-full h-full absolute bottom-0 left-0 overflow-visible">
            <motion.path
              d="M0 50 L20 50 L30 20 L40 80 L50 50 L70 50 L80 30 L90 60 L100 50 L140 50 L150 10 L160 90 L170 50 L300 50"
              fill="none"
              stroke="#FF2E00" /* gym-red */
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              style={{ filter: "drop-shadow(0 0 5px rgba(255,46,0,0.5))" }}
            />
          </svg>
          {/* Grid de fundo do gráfico */}
          <div className="absolute inset-0 border-b border-l border-white/5 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] opacity-20"></div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Stat 1 */}
          <div className="bg-black/40 rounded-lg p-3 border border-white/5">
            <div className="flex items-center gap-2 text-gray-400 text-xs mb-1">
              <Activity size={14} className="text-gym-red" /> BPM MÁX
            </div>
            <span className="text-2xl font-display font-bold text-white">164</span>
          </div>

          {/* Stat 2 */}
          <div className="bg-black/40 rounded-lg p-3 border border-white/5">
            <div className="flex items-center gap-2 text-gray-400 text-xs mb-1">
              <Flame size={14} className="text-gym-gold" /> KCAL
            </div>
            <span className="text-2xl font-display font-bold text-white">520</span>
          </div>
          
           {/* Stat 3 (Barra de Progresso) */}
           <div className="col-span-2 bg-black/40 rounded-lg p-3 border border-white/5">
             <div className="flex justify-between text-xs mb-2">
                <span className="text-gray-400 flex items-center gap-2"><Timer size={14}/> Duração</span>
                <span className="text-white font-mono">45:00</span>
             </div>
             <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
               <motion.div 
                 className="h-full bg-gradient-to-r from-gym-crimson to-gym-red"
                 initial={{ width: "0%" }}
                 animate={{ width: "75%" }}
                 transition={{ duration: 2, delay: 1 }}
               />
             </div>
           </div>
        </div>
      </motion.div>

      {/* Cartão Traseiro (Efeito de Profundidade) */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -top-6 -right-6 z-0 w-full h-full bg-zinc-800/30 backdrop-blur-sm border border-white/5 rounded-2xl"
      ></motion.div>
    </motion.div>
  );
}