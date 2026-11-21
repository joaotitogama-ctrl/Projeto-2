import React from 'react';
import { ArrowRight, ShieldCheck, Flame, Users, Trophy } from 'lucide-react';
import { STATS } from '../data';

interface HeroProps {
  onOpenEnrollment: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnrollment, onExploreClick }) => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Hero Image with High Quality Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=90"
          alt="Academia Iron Peak Fitness Premium"
          className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[10000ms]"
        />
        {/* Layered gradients for cinematic effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-[#08080A]/85 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08080A] via-[#08080A]/70 to-transparent" />
        <div className="absolute -top-40 right-0 w-96 h-96 bg-[#FF3E24]/20 rounded-full blur-[140px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-6">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
            <Flame className="w-4 h-4 text-[#FF3E24] animate-bounce" />
            <span className="text-xs uppercase tracking-widest font-bold text-neutral-300">
              Experiência Fitness de Alto Padrão
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[1.05] font-display">
            SUPERE SEUS LIMITES.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3E24] via-[#FF5722] to-[#FFB800]">
              CONSTRUA SUA MELHOR VERSÃO.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg sm:text-xl text-neutral-300 font-light leading-relaxed max-w-2xl">
            A união perfeita entre ciência do movimento, equipamentos biomecânicos de padrão internacional e um ambiente exclusivo desenhado para a sua evolução máxima.
          </p>

          {/* CTA Buttons */}
          <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onOpenEnrollment}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#FF3E24] to-[#E50914] text-white font-extrabold text-sm uppercase tracking-wider shadow-2xl shadow-[#FF3E24]/35 hover:shadow-[#FF3E24]/60 hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group"
            >
              <span>SEJA NOSSO ALUNO</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onExploreClick}
              className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-bold text-sm uppercase tracking-wider backdrop-blur-sm transition-all flex items-center justify-center gap-2.5 hover:border-white/30"
            >
              <span>CONHEÇA NOSSA ACADEMIA</span>
            </button>
          </div>

          {/* Trust points */}
          <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-neutral-400 font-medium">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#FF3E24]" />
              <span>Sem taxa de matrícula oculta</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-[#FF3E24]" />
              <span>Biomecânica padrão internacional</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#FF3E24]" />
              <span>Vagas limitadas por horário</span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-16 pt-12 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {STATS.map((stat, idx) => (
            <div key={idx} className="relative group">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight group-hover:text-[#FF3E24] transition-colors">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-neutral-200 uppercase tracking-wider mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-neutral-400 mt-1 line-clamp-1">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
