import React from 'react';
import { Dumbbell, MessageSquare } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050507] border-t border-white/10 pt-16 pb-12 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#inicio" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF3E24] to-[#E50914] flex items-center justify-center shadow-lg shadow-[#FF3E24]/20">
                <Dumbbell className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-wider text-white font-display leading-none">
                  IRON<span className="text-[#FF3E24]">PEAK</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-semibold mt-0.5">
                  Fitness Club
                </span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed">
              O mais alto padrão de treinamento de força, biomecânica e saúde integrada. Projetado para quem busca evolução contínua em um ambiente sofisticado.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#FF3E24] text-neutral-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#25D366] text-neutral-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">Sobre Nós</a>
              </li>
              <li>
                <a href="#modalidades" className="hover:text-white transition-colors">Modalidades</a>
              </li>
              <li>
                <a href="#estrutura" className="hover:text-white transition-colors">Nossa Estrutura</a>
              </li>
              <li>
                <a href="#planos" className="hover:text-white transition-colors">Planos & Valores</a>
              </li>
            </ul>
          </div>

          {/* Modalities Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Modalidades
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#modalidades" className="hover:text-white transition-colors">Musculação de Precisão</a>
              </li>
              <li>
                <a href="#modalidades" className="hover:text-white transition-colors">Cross Training Oficial</a>
              </li>
              <li>
                <a href="#modalidades" className="hover:text-white transition-colors">Studio Pilates Reformer</a>
              </li>
              <li>
                <a href="#modalidades" className="hover:text-white transition-colors">Treinamento Funcional</a>
              </li>
              <li>
                <a href="#modalidades" className="hover:text-white transition-colors">Recovery & Crioterapia</a>
              </li>
            </ul>
          </div>

          {/* Legal and Support */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Horários & Suporte
            </h4>
            <div className="space-y-2 text-xs">
              <p className="text-neutral-300">Seg - Sex: 05:30 às 23:00</p>
              <p className="text-neutral-300">Sáb: 07:00 às 20:00</p>
              <p className="text-neutral-300">Dom: 08:00 às 16:00</p>
              <div className="pt-2 text-[11px] text-neutral-400">
                Av. Faria Lima, 3477 - São Paulo/SP
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Iron Peak Fitness Club Ltda. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6 text-neutral-400 text-xs">
            <span className="hover:text-white cursor-pointer transition-colors">Termos de Uso</span>
            <span className="hover:text-white cursor-pointer transition-colors">Política de Privacidade</span>
            <span className="hover:text-white cursor-pointer transition-colors">Normas de Convivência</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
