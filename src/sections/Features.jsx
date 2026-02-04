import React from 'react';
import { Zap, Clock, Users, ShieldCheck } from 'lucide-react';
import SpotlightCard from '../components/SpotlightCard';
import FadeIn from '../components/FadeIn';

const features = [
  {
    icon: <Zap className="w-8 h-8 text-gym-red" />,
    title: "Equipamentos de Elite",
    description: "Maquinário biomecânico de ponta para evitar lesões e maximizar seus ganhos reais."
  },
  {
    icon: <Clock className="w-8 h-8 text-gym-gold" />,
    title: "Horário Flexível",
    description: "Aberta de Seg a Sáb com horários estendidos. Seu treino se adapta à sua rotina, não o contrário."
  },
  {
    icon: <Users className="w-8 h-8 text-gym-red" />,
    title: "Ambiente Motivador",
    description: "Uma comunidade que respira evolução. Aqui a energia é contagiante e você não treina sozinho."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-gym-gold" />,
    title: "Profissionais Reais",
    description: "Time de treinadores certificados prontos para corrigir sua execução e montar sua ficha personalizada."
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-transparent relative z-10">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <span className="text-gym-red font-bold tracking-widest uppercase text-xs md:text-sm border border-gym-red/30 px-4 py-1 rounded-full bg-gym-red/5 mb-4 inline-block">
            Por que escolher a Iron Gym?
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mt-4 drop-shadow-lg">
            MAIS QUE UMA ACADEMIA,<br />UM <span className="text-gym-gold text-glow">ESTILO DE VIDA</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FadeIn key={index} delay={index * 0.1} fullWidth>
              <SpotlightCard 
                className="p-8 h-full group hover:bg-zinc-900/60 transition-colors border-white/5 bg-zinc-900/20 backdrop-blur-sm"
                spotlightColor="rgba(255, 46, 0, 0.15)"
              >
                <div className="mb-6 bg-white/5 w-16 h-16 flex items-center justify-center rounded-lg group-hover:scale-110 transition-transform duration-500 border border-white/5 shadow-lg group-hover:border-gym-red/20">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-gym-red transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300">
                  {feature.description}
                </p>
              </SpotlightCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}