import React from 'react';
import { Target, Compass, Gem, CheckCircle2, Award, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Target,
      title: 'Missão',
      text: 'Proporcionar uma experiência transformadora de alto rendimento físico e mental, através de metodologia de ponta, equipamentos biomecânicos e ambiente exclusivo.',
    },
    {
      icon: Compass,
      title: 'Visão',
      text: 'Ser a principal referência de academias premium e centros de alta performance na América Latina, redefinindo o conceito de saúde, longevidade e estética.',
    },
    {
      icon: Gem,
      title: 'Valores',
      text: 'Excelência inegociável, disciplina, respeito à individualidade biológica, embasamento científico e compromisso contínuo com a evolução dos nossos membros.',
    },
  ];

  const differentials = [
    'Ambiente exclusivo com controle de lotação em tempo real',
    'Equipamentos biomecânicos importados Eleiko & Hammer Strength',
    'Avaliadores físicos com mestrado em fisiologia do exercício',
    'Recovery zone completo com crioimersão (gelo) e sauna finlandesa',
    'Vestiários de alto padrão com amenidades completas de banho',
    'Estacionamento com manobrista gratuito e carregadores elétricos',
  ];

  return (
    <section id="sobre" className="py-24 bg-[#0A0A0D] relative overflow-hidden">
      {/* Subtle Glows */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-[#FF3E24]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#FF3E24] text-xs font-bold uppercase tracking-widest mb-3">
            <Award className="w-3.5 h-3.5" />
            Nossa Trajetória
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-display tracking-tight">
            Nascida Para Superar o <span className="text-[#FF3E24]">Comum</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-base sm:text-lg">
            A Iron Peak Fitness nasceu da insatisfação com academias impessoais e superlotadas. Criamos um santuário de evolução onde cada detalhe foi milimetricamente planejado para você conquistar resultados extraordinários.
          </p>
        </div>

        {/* Story Grid with Image & Copy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#FF3E24] to-[#FF5722] rounded-3xl opacity-20 blur-xl group-hover:opacity-35 transition duration-500" />
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=85"
                alt="Infraestrutura Iron Peak"
                className="w-full h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-[#FFB800]" />
                  <p className="text-xs sm:text-sm text-neutral-200 font-medium">
                    "O nosso foco não é acumular milhares de matrículas, mas oferecer aos nossos membros o espaço, o suporte e a tecnologia que merecem."
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white uppercase font-display mb-4">
              Mais do que uma academia, um estilo de vida de alta performance
            </h3>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
              Fundada por atletas de fisiculturismo e fisiologistas renomados, combinamos o ambiente de disciplina dos melhores centros de treinamento olímpicos mundiais com a sofisticação, higiene e conforto dos clubes mais seletos.
            </p>

            {/* Differentials Checklist */}
            <div className="space-y-3 mb-8">
              {differentials.map((diff, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF3E24] shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-neutral-200">{diff}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center gap-6">
              <div>
                <span className="block text-2xl font-black text-white font-display">10 Anos</span>
                <span className="text-xs text-neutral-400 uppercase tracking-wider">De Excelência</span>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <span className="block text-2xl font-black text-white font-display">100%</span>
                <span className="text-xs text-neutral-400 uppercase tracking-wider">Foco no Aluno</span>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <span className="block text-2xl font-black text-[#FF3E24] font-display">0 Filas</span>
                <span className="text-xs text-neutral-400 uppercase tracking-wider">Em Aparelhos</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars: Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#121217] border border-white/10 hover:border-[#FF3E24]/50 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF3E24]/20 to-[#E50914]/10 border border-[#FF3E24]/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-[#FF3E24]" />
                </div>
                <h4 className="text-xl font-bold text-white uppercase font-display mb-3">
                  {pillar.title}
                </h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {pillar.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
