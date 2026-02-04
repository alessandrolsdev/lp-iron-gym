import React, { useRef, useEffect, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SpotlightCard from '../components/SpotlightCard';
import FadeIn from '../components/FadeIn';

// Dados fiéis aos prints enviados
const reviews = [
  {
    name: "Mara Pain",
    text: "Estrutura excelente, professores qualificados e ambiente sempre limpo e organizado. Ótimo atendimento e treinos bem direcionados. Recomendo para quem busca resultados com qualidade e segurança.",
    rating: 5,
  },
  {
    name: "Gilvania Leão",
    text: "Equipe competente e atenciosa. Ambiente agradável, maquinário de excelência.",
    rating: 5,
  },
  {
    name: "Aniel Oliveira",
    text: "melhor academia de esperantina ! espaço amplo e com muito maquinário de musculação !!",
    rating: 5,
  },
  {
    name: "Jessyca Maria Fontineles Silva",
    text: "Uma das melhores de Esperantina-PI, lugar para quem quer ter resultados reais na sua forma física, os profissionais dispensa comentários te fazem ir até o seu melhor! Merece mais do que 5 estrelas.",
    rating: 5,
  },
  {
    name: "Diana Gomez",
    text: "Uma Academia acolhedora, sempre inovando para atender com qualidade. Parabéns meu amigo Georges, sucesso!!! 💪💪",
    rating: 5,
  },
  {
    name: "Renata Silveira",
    text: "A Melhor academia da cidade de Esperantina. Ótimos espaços e instrutores fantásticos.",
    rating: 5,
  },
  {
    name: "Livia Maria",
    text: "A melhor! Diversos aparelhos, instrutores atentos com os alunos, ambiente e iluminação top 💗",
    rating: 5,
  }
];

export default function Testimonials() {
  const carouselRef = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  return (
    <section className="py-24 bg-transparent border-y border-white/5 relative overflow-hidden z-20">
      
      {/* Grid de Fundo */}
      <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Cabeçalho */}
        <FadeIn className="text-center mb-12 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-4 bg-white/5 px-4 py-2 rounded-full border border-white/10 shadow-[0_0_15px_rgba(197,160,89,0.15)] backdrop-blur-md">
            <span className="text-white font-bold text-xl">5.0</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={16} className="fill-gym-gold text-gym-gold" />
              ))}
            </div>
            <a href="https://www.google.com/maps" target="_blank" className="text-gray-400 text-xs ml-2 uppercase tracking-wide hover:text-white transition-colors underline decoration-dotted">
              Ver no Google
            </a>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 drop-shadow-lg">
            A VOZ DE QUEM TREINA
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-lg">
            Arraste para o lado e veja o que os alunos dizem sobre a Iron Gym.
          </p>
        </FadeIn>

        {/* CARROSSEL */}
        <motion.div 
          ref={carouselRef} 
          className="cursor-grab active:cursor-grabbing overflow-hidden"
          whileTap={{ cursor: "grabbing" }}
        >
          {/* A mágica está aqui: 'flex' alinha lado a lado e 'items-stretch' (padrão) iguala as alturas */}
          <motion.div 
            drag="x" 
            dragConstraints={{ right: 0, left: -width }} 
            className="flex gap-6 py-4"
          >
            {reviews.map((review, index) => (
              <motion.div 
                key={index} 
                className="min-w-[320px] md:min-w-[400px] h-auto" // h-auto deixa o flex pai decidir a altura
              >
                {/* h-full no card força ele a ocupar toda a altura disponível do pai */}
                <SpotlightCard 
                  className="p-8 h-full flex flex-col justify-between bg-zinc-900/40 border-white/5 hover:border-gym-red/50 transition-colors backdrop-blur-md"
                  spotlightColor="rgba(197, 160, 89, 0.15)"
                >
                  {/* Conteúdo do Topo */}
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-zinc-800 to-black border border-white/10 flex items-center justify-center text-white font-bold font-display text-lg shrink-0 shadow-lg group-hover:border-gym-gold/50 transition-colors">
                          {review.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-sm leading-tight line-clamp-1">{review.name}</h4>
                          <div className="flex mt-1">
                             {[...Array(review.rating)].map((_, i) => (
                                <Star key={i} size={10} className="fill-gym-gold text-gym-gold" />
                             ))}
                          </div>
                        </div>
                      </div>
                      <Quote className="text-white/10 w-8 h-8 shrink-0" />
                    </div>
                    
                    <p className="text-gray-300 text-sm leading-relaxed italic relative z-10">
                      "{review.text}"
                    </p>
                  </div>

                  {/* Rodapé do Card (Visual) */}
                  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gym-gold/20 to-transparent mt-6"></div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Gradientes Laterais (Fade) */}
        <div className="absolute top-0 left-0 w-8 md:w-32 h-full bg-gradient-to-r from-gym-black to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-8 md:w-32 h-full bg-gradient-to-l from-gym-black to-transparent z-20 pointer-events-none"></div>

      </div>
    </section>
  );
}