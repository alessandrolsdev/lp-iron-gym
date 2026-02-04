import React from 'react';
import { motion } from 'framer-motion';

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" fill="currentColor" />
    <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" stroke="white" strokeWidth="2" fill="none" />
  </svg>
);

export default function WhatsAppFloat() {
  const phoneNumber = "5586988632531"; // Seu número
  const defaultMessage = "Olá! Vim pelo site e gostaria de saber mais sobre a Iron Gym.";
  
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-[9999] bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.5)] flex items-center justify-center group"
      aria-label="Fale conosco no WhatsApp"
    >
      {/* Efeito de Pulse (Ondas) */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping -z-10"></span>
      
      {/* Ícone SVG Manual do WhatsApp para garantir compatibilidade */}
      <svg 
        viewBox="0 0 24 24" 
        width="32" 
        height="32" 
        stroke="currentColor" 
        strokeWidth="2" 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="fill-white stroke-none"
      >
        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
        <path d="M9 10a2 2 0 0 0-2 2v.5a2 2 0 0 0 2 2h.5a2 2 0 0 0 2-2V12" className="stroke-white fill-none" /> 
        {/* Ajuste visual simples */}
      </svg>

      {/* Tooltip Hover */}
      <span className="absolute right-full mr-4 bg-white text-gym-black px-3 py-1 rounded text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
        Fale Conosco
      </span>
    </motion.button>
  );
}