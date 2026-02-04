import React from 'react';
import FadeIn from '../components/FadeIn';

const classes = [
  {
    name: "Musculação",
    img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470&auto=format&fit=crop",
    cols: "md:col-span-2"
  },
  {
    name: "Cross Training",
    img: "https://images.unsplash.com/photo-1434596922112-19c563067271?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cols: "md:col-span-1"
  },
  {
    name: "FitDance & Ritmos",
    img: "https://media.istockphoto.com/id/1067011906/pt/foto/dance-fitness.webp?a=1&b=1&s=612x612&w=0&k=20&c=gZyby2QaT_E50pMeg05xBgUdyely9HoKJyK834AuoWo=",
    cols: "md:col-span-1"
  },
  {
    name: "Indoor Cycle",
    img: "https://images.unsplash.com/photo-1591741535018-d042766c62eb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cols: "md:col-span-2"
  },
];

export default function Classes() {
  return (
    <section id="modalidades" className="py-20 bg-gym-black relative scroll-mt-28 z-10 overflow-hidden">
      
      {/* --- CORREÇÃO: Grid Texture Reinserido Localmente --- */}
      <div className="absolute inset-0 bg-cyber-grid opacity-40 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <FadeIn>
          <h2 className="text-4xl font-display font-bold text-white mb-10 border-l-8 border-gym-red pl-4">
            NOSSAS MODALIDADES
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {classes.map((item, index) => (
            <FadeIn key={index} delay={index * 0.1} className={`${item.cols} w-full`}>
              <div className={`relative group overflow-hidden rounded-sm cursor-pointer h-64 md:h-96 border border-white/5 hover:border-gym-red/50 transition-all duration-500`}>
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-gym-black via-gym-black/40 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500" />
                
                <div className="absolute bottom-6 left-6 z-10">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white italic uppercase tracking-wider translate-y-2 group-hover:translate-y-0 transition-transform duration-300 text-glow group-hover:text-gym-red">
                    {item.name}
                  </h3>
                  <div className="w-12 h-1 bg-gym-red mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}