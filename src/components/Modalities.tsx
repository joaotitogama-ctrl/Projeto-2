import React, { useState } from 'react';
import { MODALITIES } from '../data';
import type { Modality } from '../types';
import { Flame, Clock, ChevronRight, X, Check } from 'lucide-react';

interface ModalProps {
  modality: Modality | null;
  onClose: () => void;
  onSelectModality: (title: string) => void;
}

const ModalityDetailModal: React.FC<ModalProps> = ({ modality, onClose, onSelectModality }) => {
  if (!modality) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#121217] border border-white/15 rounded-3xl overflow-hidden shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-neutral-300 hover:text-white hover:bg-black/80 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image Header */}
        <div className="relative h-64 w-full">
          <img
            src={modality.image}
            alt={modality.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121217] via-[#121217]/50 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-xs uppercase tracking-widest font-extrabold text-[#FF3E24] bg-black/50 px-3 py-1 rounded-full border border-[#FF3E24]/30 backdrop-blur-sm">
              {modality.intensity} Intensidade
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white font-display uppercase mt-2">
              {modality.title}
            </h3>
            <p className="text-sm text-neutral-300 font-medium">{modality.subtitle}</p>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-neutral-300 text-sm leading-relaxed">
            {modality.description}
          </p>

          <div className="grid grid-cols-2 gap-4 py-4 border-y border-white/10">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#FF3E24]" />
              <div>
                <span className="text-xs text-neutral-400 block uppercase font-bold">Duração</span>
                <span className="text-sm font-semibold text-white">{modality.duration}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Flame className="w-5 h-5 text-[#FF3E24]" />
              <div>
                <span className="text-xs text-neutral-400 block uppercase font-bold">Gasto Calórico Médio</span>
                <span className="text-sm font-semibold text-white">{modality.calories}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-bold mb-3">
              Principais Benefícios
            </h4>
            <ul className="space-y-2">
              {modality.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2.5 text-sm text-neutral-200">
                  <div className="w-4 h-4 rounded-full bg-[#FF3E24]/20 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[#FF3E24]" />
                  </div>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-2 flex gap-3">
            <button
              onClick={() => {
                onClose();
                onSelectModality(modality.title);
              }}
              className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-[#FF3E24] to-[#E50914] text-white font-bold text-xs uppercase tracking-wider text-center shadow-lg shadow-[#FF3E24]/20 hover:scale-[1.01] transition-transform"
            >
              Agendar Aula Experimental Gratuita
            </button>
            <button
              onClick={onClose}
              className="px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 text-xs font-semibold uppercase tracking-wider"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ModalitiesProps {
  onOpenEnrollmentWithNote: (note: string) => void;
}

export const Modalities: React.FC<ModalitiesProps> = ({ onOpenEnrollmentWithNote }) => {
  const [selectedModality, setSelectedModality] = useState<Modality | null>(null);

  return (
    <section id="modalidades" className="py-24 bg-[#08080A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#FF3E24] text-xs font-bold uppercase tracking-widest mb-3">
              <Flame className="w-3.5 h-3.5" />
              Treinamentos Especializados
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-display tracking-tight">
              Modalidades de <span className="text-[#FF3E24]">Alta Performance</span>
            </h2>
            <p className="mt-4 text-neutral-400 text-base">
              Do ganho de força bruta ao condicionamento cardiovascular e alinhamento postural. Treine com o suporte dos melhores instrutores do país.
            </p>
          </div>
          <a
            href="https://wa.me/5511999999999?text=Ol%C3%A1,%20gostaria%20de%20consultar%20a%20grade%20de%20hor%C3%A1rios%20das%20aulas."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-300 hover:text-[#FF3E24] transition-colors pb-1 border-b border-white/20 hover:border-[#FF3E24]"
          >
            Consultar Grade de Horários
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MODALITIES.map((mod) => (
            <div
              key={mod.id}
              className="group relative rounded-3xl overflow-hidden bg-[#121217] border border-white/10 hover:border-[#FF3E24]/60 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 shadow-xl hover:shadow-2xl hover:shadow-[#FF3E24]/10"
            >
              <div>
                {/* Image & Badge */}
                <div className="relative h-60 w-full overflow-hidden">
                  <img
                    src={mod.image}
                    alt={mod.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121217] via-black/40 to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-bold uppercase tracking-wider text-white">
                      {mod.intensity}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="text-xl font-bold text-white uppercase font-display leading-tight group-hover:text-[#FF3E24] transition-colors">
                      {mod.title}
                    </h3>
                    <p className="text-xs text-neutral-300 font-medium mt-1">
                      {mod.subtitle}
                    </p>
                  </div>
                </div>

                {/* Body info */}
                <div className="p-6 pt-4">
                  <p className="text-neutral-400 text-sm leading-relaxed line-clamp-3 mb-6">
                    {mod.description}
                  </p>

                  <div className="flex items-center justify-between text-xs text-neutral-400 border-t border-white/5 pt-4">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#FF3E24]" />
                      <span>{mod.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Flame className="w-3.5 h-3.5 text-[#FF3E24]" />
                      <span>{mod.calories}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={() => setSelectedModality(mod)}
                  className="w-full py-3 rounded-xl bg-white/5 hover:bg-gradient-to-r hover:from-[#FF3E24] hover:to-[#E50914] text-neutral-200 hover:text-white font-bold text-xs uppercase tracking-wider border border-white/10 hover:border-transparent transition-all flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-[#FF3E24]/20"
                >
                  <span>Conhecer Detalhes</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal View */}
      <ModalityDetailModal
        modality={selectedModality}
        onClose={() => setSelectedModality(null)}
        onSelectModality={(title) => {
          onOpenEnrollmentWithNote(`Interesse na modalidade: ${title}`);
        }}
      />
    </section>
  );
};
