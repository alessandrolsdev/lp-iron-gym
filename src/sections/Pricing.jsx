import React from 'react';
import { Check, Star } from 'lucide-react';
import Button from '../components/Button';
import SpotlightCard from '../components/SpotlightCard';
import FadeIn from '../components/FadeIn';

const plans = [
  {
    name: "Econômico",
    frequency: "3x na semana",
    price: "69,99",
    features: ["Acesso 3 dias/semana", "Musculação livre", "Sem taxa de matrícula", "Apoio de professores"],
    highlight: false
  },
  {
    name: "Flex",
    frequency: "4x na semana",
    price: "74,99",
    features: ["Acesso 4 dias/semana", "Musculação livre", "Horário livre", "Apoio de professores"],
    highlight: false
  },
  {
    name: "Iron Standard",
    frequency: "Segunda a Sábado",
    price: "89,99",
    features: ["Acesso ilimitado (Seg-Sáb)", "Treino livre em qualquer horário", "Avaliação física básica", "Acesso a todas as máquinas"],
    highlight: true, 
    tag: "Mais Popular",
    color: "red"
  },
  {
    name: "Iron Premium",
    frequency: "Seg a Sáb + Nutri",
    price: "119,99",
    features: ["Acesso Total (Seg-Sáb)", "Consulta com Nutricionista", "Acompanhamento de dieta", "Todos os benefícios Standard"],
    highlight: false,
    special: true,
    color: "gold"
  }
];

export default function Pricing() {
  
  const handleSubscribe = (planName) => {
    const phoneNumber = "5586988632531";
    const message = `Olá! Tenho interesse em me matricular no plano *${planName}* da Iron Gym. Como procedo?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="planos" className="py-24 bg-gym-black relative scroll-mt-20 z-20 backdrop-blur-sm overflow-hidden">
      
      {/* --- CORREÇÃO: Grid Texture Reinserido Localmente --- */}
      <div className="absolute inset-0 bg-cyber-grid opacity-40 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase italic tracking-tighter">
            Nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-gym-crimson to-gym-red text-glow pr-4 py-2 inline-block">Planos</span>
          </h2>
          <p className="text-gray-400 mt-4 text-lg">Invista em você. Escolha a sua melhor versão.</p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto items-stretch">
          {plans.map((plan, index) => (
            <FadeIn key={index} delay={index * 0.1} fullWidth>
              <SpotlightCard 
                spotlightColor={plan.special ? "rgba(197, 160, 89, 0.25)" : "rgba(255, 46, 0, 0.2)"}
                className={`h-full flex flex-col p-6 transition-all duration-300 border 
                  ${plan.highlight 
                    ? 'bg-gym-dark/80 border-gym-crimson shadow-[0_0_30px_rgba(212,28,28,0.15)] md:-translate-y-4' 
                    : plan.special
                      ? 'bg-gym-dark/80 border-gym-gold/40 shadow-[0_0_30px_rgba(197,160,89,0.1)]'
                      : 'bg-gym-dark/40 border-white/5 hover:border-white/10'
                  }`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gym-crimson text-white text-[10px] font-bold px-4 py-1 uppercase tracking-widest rounded-sm shadow-lg shadow-gym-crimson/40 whitespace-nowrap">
                    {plan.tag}
                  </div>
                )}
                
                {plan.special && (
                   <div className="absolute top-4 right-4 text-gym-gold animate-pulse-slow drop-shadow-[0_0_8px_rgba(197,160,89,0.8)]">
                     <Star size={20} fill="currentColor" />
                   </div>
                )}

                <h3 className={`text-2xl font-display uppercase tracking-tight 
                  ${plan.special ? 'text-gym-gold gold-glow' : 'text-white'}`}>
                  {plan.name}
                </h3>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-6 block border-b border-white/5 pb-4 mt-2">
                  {plan.frequency}
                </span>

                <div className="mb-6">
                  <span className="text-sm align-top text-gray-400 mr-1">R$</span>
                  <span className={`text-5xl font-display font-bold ${plan.special ? 'text-white' : 'text-white'}`}>
                     {plan.price}
                  </span>
                  <span className="text-gray-500 text-sm ml-1 font-medium">/mês</span>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm group">
                      <Check className={`w-4 h-4 shrink-0 transition-colors mt-0.5 
                        ${plan.special 
                          ? 'text-gym-gold drop-shadow-[0_0_5px_rgba(197,160,89,0.5)]' 
                          : 'text-gym-red drop-shadow-[0_0_5px_rgba(255,46,0,0.5)]'}`} 
                      />
                      <span className="leading-tight group-hover:text-white transition-colors">{feat}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.special ? 'gold' : (plan.highlight ? 'primary' : 'outline')} 
                  className="w-full justify-center text-sm"
                  onClick={() => handleSubscribe(plan.name)} 
                >
                  Matricular
                </Button>
              </SpotlightCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}