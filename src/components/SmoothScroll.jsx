import React, { useEffect, createContext, useContext, useState } from 'react';
import Lenis from 'lenis';

// Criamos um Contexto para poder acessar o scroll de qualquer lugar (Navbar, Footer, etc)
const LenisContext = createContext();

export const useLenis = () => useContext(LenisContext);

export default function SmoothScroll({ children }) {
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    // Configuração "Awwwards" de física
    const lenisInstance = new Lenis({
      duration: 1.5, // Quanto maior, mais "pesado" e suave o scroll (1.2 a 1.5 é o ideal)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Curva exponencial suave
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false, // Mobile geralmente preferimos nativo, mas pode por true se quiser
      touchMultiplier: 2,
    });

    setLenis(lenisInstance);

    // Loop de animação (Request Animation Frame)
    function raf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisInstance.destroy();
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>
      {children}
    </LenisContext.Provider>
  );
}