import React from 'react';
import { TRAINERS } from '../data';
import { GraduationCap, UserCheck } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';

export const Trainers: React.FC = () => {
  return (
    <section id="equipe" className="py-24 bg-[#0A0A0D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#FF3E24] text-xs font-bold uppercase tracking-widest mb-3">
            <UserCheck className="w-3.5 h-3.5" />
            Corpo Técnico de Elite
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-display tracking-tight">
            Nossos <span className="text-[#FF3E24]">Treinadores</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-base sm:text-lg">
            Profissionais pós-graduados, certificados pelas maiores academias mundiais de força e com experiência real em transformar potenciais em resultados.
          </p>
        </div>

        {/* Coaches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TRAINERS.map((coach) => (
            <div
              key={coach.id}
              className="group rounded-3xl overflow-hidden bg-[#121217] border border-white/10 hover:border-[#FF3E24]/60 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 shadow-xl"
            >
              {/* Photo */}
              <div className="relative h-72 w-full overflow-hidden">
                <img
                  src={coach.image}
                  alt={coach.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121217] via-black/30 to-transparent" />
                
                {/* Specialty Pill */}
                <span className="absolute bottom-4 left-4 right-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-extrabold text-[#FF3E24] uppercase tracking-wider border border-[#FF3E24]/30 text-center truncate">
                  {coach.specialty}
                </span>
              </div>

              {/* Bio & Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-black text-white font-display uppercase group-hover:text-[#FF3E24] transition-colors">
                    {coach.name}
                  </h3>
                  <span className="text-xs text-neutral-400 font-semibold block mb-3">
                    {coach.role}
                  </span>

                  <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                    {coach.bio}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <div className="flex items-start gap-2 text-[11px] text-neutral-400 mb-4">
                    <GraduationCap className="w-4 h-4 text-[#FF3E24] shrink-0 mt-0.5" />
                    <span className="line-clamp-2">{coach.certifications}</span>
                  </div>

                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-neutral-300 hover:text-[#FF3E24] font-semibold transition-colors"
                  >
                    <InstagramIcon className="w-3.5 h-3.5" />
                    <span>Conectar no Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
