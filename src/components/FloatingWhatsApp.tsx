import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Atendimento rápido">
      <a
        href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Estou%20no%20site%20da%20Iron%20Peak%20e%20gostaria%20de%20informa%C3%A7%C3%B5es."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 group flex items-center gap-2.5 p-3 sm:px-4 sm:py-3 rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/40 hover:scale-105 active:scale-95 transition-all duration-300"
        aria-label="Falar conosco no WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
        <span className="hidden sm:inline font-bold text-xs uppercase tracking-wider pr-1">
          Fale Conosco
        </span>
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-[#0A0A0C] animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-[#0A0A0C]" />
      </a>
    </aside>
  );
};
