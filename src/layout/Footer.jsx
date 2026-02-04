import React from 'react';
import { Instagram, Facebook, MapPin, Phone, Clock } from 'lucide-react';

const WhatsAppIcon = ({ size = 22, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
  </svg>
);

const TikTokIcon = ({ size = 22, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function Footer() {
  
  // Mesma função de scroll suave da Navbar para manter consistência
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-gym-black border-t border-white/10 pt-16 pb-8 relative z-20" id="contato">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        
        {/* Brand & Horários */}
        <div className="col-span-1">
          <div className="flex items-center gap-2 text-white mb-6">
            <img 
              src="/logo-iron-gym.png" 
              alt="Iron Gym" 
              className="h-12 w-auto object-contain"
              onError={(e) => {e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'}}
            />
            <span className="hidden font-display text-2xl font-bold tracking-tighter uppercase text-white">
              Iron<span className="text-gym-red text-glow">Gym</span>
            </span>
          </div>
          
          <div className="text-gray-400 text-sm mb-6">
            <h5 className="text-white font-bold uppercase mb-2 flex items-center gap-2">
              <Clock size={16} className="text-gym-red"/> Horário de Treino
            </h5>
            <ul className="space-y-1">
              <li className="flex justify-between border-b border-white/5 pb-1">
                <span>Seg a Sex:</span>
                <span className="text-white">05h às 22h</span>
              </li>
              <li className="flex justify-between pt-1">
                <span>Sábado:</span>
                <span className="text-white text-right">08h às 11h <br/> 14h às 17h</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Links (Com Scroll Suave) */}
        <div className="md:pl-8">
          <h4 className="text-white font-display uppercase tracking-widest mb-6 border-l-2 border-gym-red pl-3">Menu</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><a href="#" onClick={(e) => {e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' })}} className="hover:text-gym-red transition-colors cursor-pointer">Home</a></li>
            <li><a href="#modalidades" onClick={(e) => handleScroll(e, 'modalidades')} className="hover:text-gym-red transition-colors cursor-pointer">Modalidades</a></li>
            <li><a href="#planos" onClick={(e) => handleScroll(e, 'planos')} className="hover:text-gym-red transition-colors cursor-pointer">Planos</a></li>
            <li><a href="#contato" onClick={(e) => handleScroll(e, 'contato')} className="hover:text-gym-red transition-colors cursor-pointer">Contato</a></li>
          </ul>
        </div>

        {/* Localização */}
        <div>
          <h4 className="text-white font-display uppercase tracking-widest mb-6 border-l-2 border-gym-red pl-3">Localização</h4>
          <ul className="space-y-4 text-gray-400 text-sm mb-6">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-gym-red shrink-0 mt-1" />
              <span>Rua Marechal Deodoro, 646<br/>Centro - Esperantina, PI</span>
            </li>
            <li className="flex items-center gap-3 group cursor-pointer">
              <WhatsAppIcon size={20} className="text-gym-red shrink-0 group-hover:animate-bounce" />
              <a href="https://wa.me/5586988632531" target="_blank" rel="noopener noreferrer" className="hover:text-white font-bold transition-colors">
                (86) 98863-2531
              </a>
            </li>
          </ul>
           {/* Mapa */}
           <div className="w-full h-32 rounded-sm overflow-hidden border border-white/20 group relative hover:border-gym-red/50 transition-colors">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.6833446294726!2d-42.2355!3d-3.9015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwNTQnMDUuNCJTIDQywrAxNCcwNy44Ilc!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr"
              width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy" 
              className="grayscale group-hover:grayscale-0 transition-all opacity-70 group-hover:opacity-100 absolute inset-0"
            ></iframe>
          </div>
        </div>

        {/* Redes Sociais */}
        <div>
          <h4 className="text-white font-display uppercase tracking-widest mb-6 border-l-2 border-gym-red pl-3">Redes</h4>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/irongymgd/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-zinc-900 flex items-center justify-center rounded-sm hover:bg-gym-red hover:text-white transition-all border border-white/5 hover:shadow-[0_0_15px_rgba(255,46,0,0.4)]">
              <Instagram size={22} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61576582526668" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-zinc-900 flex items-center justify-center rounded-sm hover:bg-blue-600 hover:text-white transition-all border border-white/5">
              <Facebook size={22} />
            </a>
            <a href="https://www.tiktok.com/@iron.gym.gd" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-zinc-900 flex items-center justify-center rounded-sm hover:bg-black hover:border-gym-red hover:text-white hover:shadow-[0_0_15px_rgba(255,46,0,0.5)] transition-all border border-white/5">
              <TikTokIcon size={22} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/5 pt-8 text-center text-gray-600 text-xs">
        <p>© 2026 Iron Gym. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}