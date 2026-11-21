import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell, PhoneCall, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenEnrollment: (planId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnrollment }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre Nós', href: '#sobre' },
    { label: 'Modalidades', href: '#modalidades' },
    { label: 'Estrutura', href: '#estrutura' },
    { label: 'Planos', href: '#planos' },
    { label: 'Equipe', href: '#equipe' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-2xl py-3.5'
          : 'bg-gradient-to-b from-black/90 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF3E24] to-[#E50914] flex items-center justify-center shadow-lg shadow-[#FF3E24]/20 group-hover:scale-105 transition-transform duration-200">
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

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-neutral-300 hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FF3E24] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20visita%20na%20Iron%20Peak."
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 text-xs font-semibold text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#FF3E24]" />
              Agendar Visita
            </a>

            <button
              onClick={() => onOpenEnrollment()}
              className="relative group overflow-hidden px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FF3E24] to-[#E50914] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#FF3E24]/25 hover:shadow-[#FF3E24]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Seja Nosso Aluno
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-white/5 text-neutral-300 hover:text-white focus:outline-none"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0A0C]/98 border-b border-white/10 px-4 pt-4 pb-6 mt-3 animate-fadeIn">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnrollment();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#FF3E24] to-[#E50914] text-white font-bold text-sm uppercase tracking-wider text-center shadow-lg shadow-[#FF3E24]/20"
              >
                Seja Nosso Aluno
              </button>
              <a
                href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20visita%20na%20Iron%20Peak."
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-xl bg-white/5 text-neutral-300 font-semibold text-sm text-center flex items-center justify-center gap-2 hover:bg-white/10"
              >
                <PhoneCall className="w-4 h-4 text-[#FF3E24]" />
                Falar com Consultor
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
