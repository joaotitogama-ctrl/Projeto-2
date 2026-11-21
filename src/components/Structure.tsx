import React, { useState } from 'react';
import { STRUCTURE } from '../data';
import { Building2, CheckCircle2, ChevronRight, Maximize2, X } from 'lucide-react';
import type { StructureItem } from '../types';

export const Structure: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [previewItem, setPreviewItem] = useState<StructureItem | null>(null);

  const categories = [
    { id: 'all', label: 'Todos os Espaços' },
    { id: 'Força e Resistência', label: 'Musculação' },
    { id: 'Condicionamento', label: 'Cardio Panorâmico' },
    { id: 'Alta Intensidade', label: 'Cross Arena' },
    { id: 'Bem-estar e Recuperação', label: 'Recovery & Spa' },
    { id: 'Conforto e Higiene', label: 'Vestiários' },
    { id: 'Convivência e Nutrição', label: 'Lounge Fit' },
  ];

  const filteredItems = activeCategory === 'all'
    ? STRUCTURE
    : STRUCTURE.filter((item) => item.category === activeCategory);

  return (
    <section id="estrutura" className="py-24 bg-[#0A0A0D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#FF3E24] text-xs font-bold uppercase tracking-widest mb-3">
            <Building2 className="w-3.5 h-3.5" />
            Infraestrutura de Alto Padrão
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-display tracking-tight">
            Nossa <span className="text-[#FF3E24]">Estrutura</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-base sm:text-lg">
            Um complexo fitness de 3.800m² concebido por arquitetos premiados para harmonizar iluminação estimulante, climatização inteligente e os equipamentos mais respeitados do mundo.
          </p>
        </div>

        {/* Categories Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-[#FF3E24] to-[#E50914] text-white shadow-lg shadow-[#FF3E24]/20 scale-105'
                  : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setPreviewItem(item)}
              className="group cursor-pointer rounded-3xl overflow-hidden bg-[#121217] border border-white/10 hover:border-[#FF3E24]/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121217] via-black/30 to-transparent" />
                
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-bold text-neutral-300 uppercase tracking-wider border border-white/10">
                  {item.category}
                </span>

                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>

                <div className="absolute bottom-4 left-6 right-6">
                  <h3 className="text-xl font-bold text-white uppercase font-display leading-snug group-hover:text-[#FF3E24] transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 pt-3 flex-1 flex flex-col justify-between">
                <p className="text-sm text-neutral-400 leading-relaxed line-clamp-2 mb-4">
                  {item.description}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-white/5">
                  {item.highlights.slice(0, 2).map((hl, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF3E24] shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal for Preview */}
      {previewItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-[#121217] border border-white/15 rounded-3xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setPreviewItem(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/70 text-white hover:bg-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-80 sm:h-96 w-full">
              <img
                src={previewItem.image}
                alt={previewItem.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121217] via-[#121217]/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs uppercase tracking-widest font-bold text-[#FF3E24] bg-black/60 px-3 py-1 rounded-full border border-[#FF3E24]/30 backdrop-blur-sm">
                  {previewItem.category}
                </span>
                <h3 className="text-2xl sm:text-4xl font-black text-white font-display uppercase mt-2">
                  {previewItem.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                {previewItem.description}
              </p>

              <div>
                <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-bold mb-3">
                  Destaques deste Espaço
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {previewItem.highlights.map((hl, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#FF3E24] shrink-0" />
                      <span className="text-xs text-neutral-200 font-medium">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <a
                  href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20uma%20visita%20para%20conhecer%20a%20estrutura%20da%20academia."
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#FF3E24] to-[#E50914] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:scale-[1.02] transition-transform"
                >
                  Agendar Visita Guiada com Consultor
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
