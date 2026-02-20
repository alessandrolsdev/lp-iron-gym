import React from 'react';

/**
 * Premium customizable button component for the Iron Gym landing page.
 * Provides different visual variants suitable for dark mode aesthetics.
 * 
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be rendered inside the button.
 * @param {'primary' | 'outline' | 'gold'} [props.variant='primary'] - Visual style variant.
 * @param {string} [props.className=''] - Additional Tailwind CSS classes.
 * @returns {React.JSX.Element} The rendered button element.
 */
export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseStyle = "px-8 py-4 font-display uppercase tracking-wider font-bold transition-all duration-300 transform hover:-translate-y-1 rounded-sm relative overflow-hidden group";

  const variants = {
    // Estilo Tron Vermelho: Fundo Crimson + Sombra Neon Red
    primary: "bg-gym-crimson text-white hover:bg-gym-red shadow-[0_0_20px_rgba(212,28,28,0.4)] hover:shadow-[0_0_30px_rgba(255,46,0,0.6)] border border-white/10",

    // Estilo Contorno: Borda sutil que acende ao passar o mouse
    outline: "bg-transparent border border-white/20 text-white hover:border-gym-red hover:text-gym-red hover:shadow-[0_0_15px_rgba(255,46,0,0.2)]",

    // Estilo GD (Gold): Para momentos premium
    gold: "bg-transparent border border-gym-gold text-gym-gold hover:bg-gym-gold hover:text-gym-black hover:shadow-[0_0_20px_rgba(197,160,89,0.5)]"
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {/* Brilho interno ao passar o mouse (Opcional, dá um toque vidro) */}
      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300 pointer-events-none"></div>

      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
}