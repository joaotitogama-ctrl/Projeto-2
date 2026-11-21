import React from 'react';
import { TESTIMONIALS } from '../data';
import { Star, MessageSquareQuote, CheckCircle2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 bg-[#08080A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#FF3E24] text-xs font-bold uppercase tracking-widest mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            Resultados Comprovados
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-display tracking-tight">
            A Voz de Quem <span className="text-[#FF3E24]">Vive a Mudança</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-base sm:text-lg">
            Veja como a estrutura, metodologia e comunidade da Iron Peak impactam diariamente a disciplina e o bem-estar de nossos alunos.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-3xl bg-[#121217] border border-white/10 hover:border-[#FF3E24]/60 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-xl"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4 text-[#FFB800]">
                  {[...Array(item.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FFB800]" />
                  ))}
                </div>

                {/* Content Quote */}
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed italic mb-6">
                  "{item.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border border-[#FF3E24]/40"
                />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white uppercase tracking-wide">
                    {item.name}
                  </span>
                  <span className="text-[11px] text-neutral-400">
                    {item.role}
                  </span>
                  <div className="flex items-center gap-1 mt-0.5 text-[10px] text-[#FF3E24] font-semibold">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>{item.timeWithUs}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Badge */}
        <div className="mt-14 max-w-md mx-auto p-4 rounded-2xl bg-[#121217] border border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center font-black text-[#FF3E24] text-lg">
              G
            </div>
            <div>
              <div className="flex items-center gap-1 text-[#FFB800]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#FFB800]" />
                ))}
                <span className="text-xs font-bold text-white ml-1">4.9 / 5.0</span>
              </div>
              <span className="text-[11px] text-neutral-400">Mais de 450 avaliações verificadas</span>
            </div>
          </div>
          <a
            href="https://google.com"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-bold text-[#FF3E24] hover:underline uppercase tracking-wider"
          >
            Ver no Google
          </a>
        </div>
      </div>
    </section>
  );
};
