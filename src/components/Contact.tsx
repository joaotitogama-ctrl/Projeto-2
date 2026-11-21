import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Clock, Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Matrícula e Planos',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setStatus('error');
      setErrorMessage('Por favor, preencha todos os campos obrigatórios (*).');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setStatus('error');
      setErrorMessage('Por favor, informe um endereço de e-mail válido.');
      return;
    }

    setStatus('submitting');

    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'Matrícula e Planos',
        message: '',
      });
    }, 1000);
  };

  return (
    <section id="contato" className="py-24 bg-[#0A0A0D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#FF3E24] text-xs font-bold uppercase tracking-widest mb-3">
            <Mail className="w-3.5 h-3.5" />
            Canais de Atendimento
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-display tracking-tight">
            Fale Com Nossos <span className="text-[#FF3E24]">Especialistas</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-base sm:text-lg">
            Estamos prontos para esclarecer dúvidas sobre planos, agendar avaliações físicas e receber você para uma experiência exclusiva.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details & Operational Hours */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-[#121217] border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white uppercase font-display">
                Informações da Unidade
              </h3>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FF3E24]/10 border border-[#FF3E24]/30 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#FF3E24]" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-neutral-400 font-bold block">
                    Endereço
                  </span>
                  <p className="text-sm text-neutral-200 mt-0.5">
                    Av. Brigadeiro Faria Lima, 3477 - Itaim Bibi, São Paulo - SP, 04538-133
                  </p>
                  <span className="text-xs text-[#FF3E24] mt-1 block">
                    Estacionamento com manobrista gratuito no local
                  </span>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FF3E24]/10 border border-[#FF3E24]/30 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#FF3E24]" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-neutral-400 font-bold block">
                    Telefone & WhatsApp
                  </span>
                  <p className="text-sm text-neutral-200 mt-0.5">
                    (11) 3456-7890
                  </p>
                  <a
                    href="https://wa.me/5511999999999?text=Ol%C3%A1,%20gostaria%20de%20atendimento%20da%20Iron%20Peak."
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#FF3E24] hover:underline font-bold mt-1"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    Chamar no WhatsApp Oficial
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FF3E24]/10 border border-[#FF3E24]/30 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#FF3E24]" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-neutral-400 font-bold block">
                    Horários de Funcionamento
                  </span>
                  <div className="text-xs text-neutral-300 space-y-1 mt-1">
                    <p className="flex justify-between gap-4">
                      <span>Segunda a Sexta:</span>
                      <strong className="text-white">05:30 às 23:00</strong>
                    </p>
                    <p className="flex justify-between gap-4">
                      <span>Sábados:</span>
                      <strong className="text-white">07:00 às 20:00</strong>
                    </p>
                    <p className="flex justify-between gap-4">
                      <span>Domingos e Feriados:</span>
                      <strong className="text-white">08:00 às 16:00</strong>
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">
                  Siga-nos nas Redes:
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-lg bg-white/5 hover:bg-[#FF3E24] text-neutral-300 hover:text-white transition-all"
                    aria-label="Instagram da Iron Peak"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-lg bg-white/5 hover:bg-[#25D366] text-neutral-300 hover:text-white transition-all"
                    aria-label="WhatsApp da Iron Peak"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-3xl overflow-hidden border border-white/10 h-64 relative bg-[#121217]">
              <iframe
                title="Localização da Academia Iron Peak"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.762836248967!2d-46.6897930248888!3d-23.58593897878347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce575b6d19fb59%3A0x6b301c3e38706240!2sAv.%20Brig.%20Faria%20Lima%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1716300000000!5m2!1spt-BR!2sbr"
                className="w-full h-full border-0 filter grayscale invert contrast-125 opacity-80 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </div>
          </div>

          {/* Contact / Interest Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#121217] border border-white/10 shadow-2xl relative">
              <h3 className="text-2xl font-black text-white font-display uppercase mb-2">
                Envie uma Mensagem
              </h3>
              <p className="text-sm text-neutral-400 mb-8">
                Preencha o formulário e um de nossos consultores entrará em contato em menos de 15 minutos via WhatsApp ou telefone.
              </p>

              {status === 'success' && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-3 text-emerald-400">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <div className="text-xs sm:text-sm">
                    <strong>Mensagem recebida com sucesso!</strong> Nossa equipe entrará em contato em breve.
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center gap-3 text-red-400">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <div className="text-xs sm:text-sm">
                    {errorMessage}
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-300 font-bold mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Lucas Gabriel Silveira"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#FF3E24] focus:ring-1 focus:ring-[#FF3E24] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-300 font-bold mb-2">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      placeholder="Ex: (11) 98765-4321"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#FF3E24] focus:ring-1 focus:ring-[#FF3E24] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-300 font-bold mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      placeholder="Ex: seuemail@exemplo.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#FF3E24] focus:ring-1 focus:ring-[#FF3E24] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-300 font-bold mb-2">
                      Assunto de Interesse
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#1A1A22] border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF3E24] transition-all"
                    >
                      <option value="Matrícula e Planos">Matrícula e Planos</option>
                      <option value="Agendar Aula Experimental">Agendar Aula Experimental</option>
                      <option value="Contratar Personal Trainer">Contratar Personal Trainer</option>
                      <option value="Parcerias e Corporativo">Plano Corporativo / Empresas</option>
                      <option value="Outro">Outro assunto</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-300 font-bold mb-2">
                    Mensagem ou Objetivos (Opcional)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Conte-nos seus objetivos principais (emagrecimento, hipertrofia, reabilitação, etc.)"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#FF3E24] focus:ring-1 focus:ring-[#FF3E24] transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#FF3E24] to-[#E50914] text-white font-extrabold text-xs uppercase tracking-wider shadow-xl shadow-[#FF3E24]/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                >
                  {status === 'submitting' ? (
                    <span>Enviando dados...</span>
                  ) : (
                    <>
                      <span>SOLICITAR CONTATO DE UM CONSULTOR</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
