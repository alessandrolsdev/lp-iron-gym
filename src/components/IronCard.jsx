import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Wifi, Disc } from "lucide-react"; // Disc simula o chip

export default function IronCard() {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.8, x: 100 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
      className="relative h-64 w-96 rounded-2xl bg-gradient-to-br from-zinc-900 to-black border border-white/10 shadow-[0_0_50px_rgba(255,46,0,0.3)] cursor-default hidden lg:block"
    >
      {/* Efeito de Brilho Holográfico no Fundo */}
      <div 
        style={{ transform: "translateZ(50px)" }} 
        className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-40 mix-blend-overlay rounded-2xl"
      ></div>
      
      {/* Conteúdo do Cartão */}
      <div style={{ transform: "translateZ(75px)" }} className="relative h-full flex flex-col justify-between p-6 z-10">
        
        {/* Topo: Logo e Chip */}
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gym-crimson to-gym-red flex items-center justify-center shadow-lg shadow-gym-red/40 border border-white/20">
              <span className="font-display font-bold text-white italic text-lg">IG</span>
            </div>
            <div>
              <h3 className="text-white font-display font-bold text-lg leading-none tracking-wider">IRON GYM</h3>
              <span className="text-[10px] text-gym-gold tracking-[0.2em] font-bold">ACCESS CARD</span>
            </div>
          </div>
          <Disc size={32} className="text-yellow-500/80 drop-shadow-md rotate-90" /> {/* Simulando Chip Dourado */}
        </div>

        {/* Meio: Número e NFC */}
        <div className="flex items-center justify-between">
           <div className="text-gray-400 font-mono text-lg tracking-widest opacity-60">
             •••• •••• •••• 2026
           </div>
           <Wifi size={24} className="text-white/20 rotate-90" />
        </div>

        {/* Base: Nome e Status */}
        <div className="flex justify-between items-end border-t border-white/10 pt-4">
          <div>
            <span className="text-[10px] text-gray-500 uppercase tracking-wider block mb-1">Membro desde 2026</span>
            <span className="text-white font-display font-bold text-xl tracking-wide text-glow">VOCÊ</span>
          </div>
          <div className="px-3 py-1 rounded bg-gym-red/10 border border-gym-red/50 backdrop-blur-md">
            <span className="text-gym-red font-bold text-xs tracking-wider animate-pulse">ATIVO</span>
          </div>
        </div>
      </div>

      {/* Brilho de Reflexo */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
    </motion.div>
  );
}