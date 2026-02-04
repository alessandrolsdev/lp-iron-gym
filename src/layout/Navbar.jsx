import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from '../components/Button';
import { useLenis } from '../components/SmoothScroll'; // Importamos o Hook

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lenis = useLenis(); // Acessamos a instância do scroll suave

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Nova função de Scroll usando a física do Lenis
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);

    if (lenis) {
      // O Lenis calcula a inércia perfeita até o alvo
      lenis.scrollTo(`#${targetId}`, {
        offset: -80, // Compensação da Navbar
        duration: 1.5, // Duração da viagem (mais lento = mais cinematico)
      });
    } else {
      // Fallback caso o Lenis não tenha carregado (raro)
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { name: 'Modalidades', id: 'modalidades' },
    { name: 'Planos', id: 'planos' },
    { name: 'Localização', id: 'contato' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 border-b ${
      scrolled 
        ? 'bg-gym-black/80 backdrop-blur-md py-4 border-white/10 shadow-lg' 
        : 'bg-transparent py-6 border-transparent'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        
        {/* LOGO */}
        <div 
          className="flex items-center gap-2 cursor-pointer group" 
          onClick={(e) => { e.preventDefault(); lenis?.scrollTo(0, { duration: 2 }) }}
        >
          <img 
            src="/logo-iron-gym.png" 
            alt="Iron Gym Logo" 
            className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
            }}
          />
          <span className="hidden font-display text-2xl font-bold tracking-tighter uppercase text-white items-center gap-1">
            Iron<span className="text-gym-red text-glow group-hover:text-white transition-colors">Gym</span>
          </span>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={`#${link.id}`} 
              onClick={(e) => handleScrollTo(e, link.id)}
              className="font-display uppercase tracking-wide text-sm text-gray-300 hover:text-gym-red transition-colors hover:drop-shadow-[0_0_5px_rgba(255,46,0,0.5)] cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <Button variant="primary" onClick={(e) => handleScrollTo(e, 'planos')}>
            Matricule-se
          </Button>
        </div>

        {/* MOBILE TOGGLE */}
        <button 
          className="md:hidden text-white hover:text-gym-red transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir Menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div className={`md:hidden fixed top-[70px] left-0 w-full bg-gym-black/95 backdrop-blur-xl border-b border-gym-red/20 flex flex-col items-center py-10 gap-8 shadow-2xl transition-all duration-300 origin-top ${
        isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
      }`}>
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={`#${link.id}`}
            className="font-display text-2xl uppercase tracking-wider text-white hover:text-gym-red hover:text-glow cursor-pointer"
            onClick={(e) => handleScrollTo(e, link.id)}
          >
            {link.name}
          </a>
        ))}
        <Button className="w-3/4 mt-4" onClick={(e) => handleScrollTo(e, 'planos')}>
          Começar Agora
        </Button>
      </div>
    </nav>
  );
}