import React from 'react';
import FadeIn from '../components/FadeIn';

/**
 * CTA (Call to Action) Section Component.
 * Encapsulates the final call to action encouraging users to sign up.
 *
 * @module layout/CTA
 * @returns {React.JSX.Element} The rendered CTA section.
 */
export default function CTA() {
    const handleScrollToPlans = () => {
        document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="py-24 bg-gradient-to-br from-gym-crimson to-gym-red relative overflow-hidden z-10">
            <div className="container mx-auto px-4 text-center relative z-10">
                <FadeIn direction="up">
                    <h2 className="text-3xl md:text-6xl font-display font-bold text-white mb-6 uppercase italic tracking-tighter drop-shadow-lg">
                        Comece a sua jornada hoje
                    </h2>
                    <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-medium">
                        Não deixe para segunda-feira o resultado que você pode começar a construir agora.
                    </p>
                    <button
                        onClick={handleScrollToPlans}
                        className="bg-black text-white border border-white/20 px-10 py-5 font-display font-bold uppercase tracking-wider rounded-sm hover:scale-105 hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-300 shadow-2xl"
                    >
                        Garantir minha vaga
                    </button>
                </FadeIn>
            </div>

            {/* Nova Pattern de fundo com Halteres */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/dumbbell.png')] mix-blend-multiply"></div>
        </section>
    );
}
