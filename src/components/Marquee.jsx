import React from 'react';

export default function Marquee() {
  return (
    // Fundo escuro com bordas vermelhas sutis
    <div className="relative flex overflow-hidden bg-gym-black/80 backdrop-blur-sm py-4 border-y border-gym-red/30 select-none z-20">
      
      {/* Faixa 1 */}
      <div className="animate-marquee whitespace-nowrap flex gap-8 items-center">
        {[...Array(10)].map((_, i) => (
          // Texto Vermelho Neon (text-gym-red + text-glow)
          <span key={i} className="text-xl md:text-3xl font-display font-bold uppercase text-gym-red italic tracking-tighter flex items-center text-glow">
            NO PAIN NO GAIN <span className="text-white/20 px-6 text-sm">•</span> 
            IRON GYM <span className="text-white/20 px-6 text-sm">•</span> 
            RESULTADO REAL <span className="text-white/20 px-6 text-sm">•</span>
          </span>
        ))}
      </div>
      
      {/* Faixa 2 (Cópia para efeito infinito) */}
      <div className="absolute top-0 py-4 animate-marquee2 whitespace-nowrap flex gap-8 items-center">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="text-xl md:text-3xl font-display font-bold uppercase text-gym-red italic tracking-tighter flex items-center text-glow">
            NO PAIN NO GAIN <span className="text-white/20 px-6 text-sm">•</span> 
            IRON GYM <span className="text-white/20 px-6 text-sm">•</span> 
            RESULTADO REAL <span className="text-white/20 px-6 text-sm">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}