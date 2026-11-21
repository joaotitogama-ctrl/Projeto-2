import React, { useState } from 'react';
import type { Plan } from '../types';
import { X, ShieldCheck, Dumbbell, Sparkles, CheckCircle2 } from 'lucide-react';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: Plan | null;
  plans: Plan[];
  initialNote?: string;
}

export const EnrollmentModal: React.FC<EnrollmentModalProps> = ({
  isOpen,
  onClose,
  selectedPlan,
  plans,
  initialNote = '',
}) => {
  const [currentPlanId, setCurrentPlanId] = useState<string>(
    selectedPlan ? selectedPlan.id : plans[1]?.id || plans[0]?.id
  );

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    shift: 'Manhã (05:30 às 12:00)',
    notes: initialNote,
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const activePlan = plans.find((p) => p.id === currentPlanId) || plans[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setError('Por favor preencha nome, e-mail e WhatsApp.');
      return;
    }

    if (!formData.email.includes('@')) {
      setError('Informe um e-mail válido.');
      return;
    }

    setError('');
    // Simulate successful API registration
    setTimeout(() => {
      setIsSuccess(true);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#121217] border border-white/15 rounded-3xl overflow-hidden shadow-2xl my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="p-10 sm:p-14 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-3xl font-black text-white font-display uppercase">
              Matrícula Pré-Aprovada com Sucesso!
            </h3>

            <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
              Parabéns, <strong className="text-white">{formData.name}</strong>! Sua solicitação para o{' '}
              <strong className="text-[#FF3E24]">{activePlan.name}</strong> foi registrada no sistema Iron Peak.
            </p>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 max-w-sm mx-auto text-left text-xs space-y-2 text-neutral-300">
              <div className="flex justify-between">
                <span>Plano selecionado:</span>
                <strong className="text-white">{activePlan.name}</strong>
              </div>
              <div className="flex justify-between">
                <span>Valor demonstrativo:</span>
                <strong className="text-[#FF3E24]">R$ {activePlan.priceMonth}/mês</strong>
              </div>
              <div className="flex justify-between">
                <span>Turno preferencial:</span>
                <strong className="text-white">{formData.shift}</strong>
              </div>
            </div>

            <p className="text-xs text-neutral-400">
              Enviamos a confirmação para <strong>{formData.email}</strong>. Nosso concierge entrará em contato via WhatsApp para finalizar seus dados e agendar sua avaliação física.
            </p>

            <button
              onClick={() => {
                setIsSuccess(false);
                onClose();
              }}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#FF3E24] to-[#E50914] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#FF3E24]/20"
            >
              Concluir e Voltar ao Site
            </button>
          </div>
        ) : (
          <div className="p-6 sm:p-10">
            {/* Modal Header */}
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF3E24] to-[#E50914] flex items-center justify-center">
                <Dumbbell className="w-4 h-4 text-white" />
              </div>
              <span className="text-xs uppercase font-extrabold text-[#FF3E24] tracking-wider">
                Inscrição Online Express
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase font-display">
              Garanta Sua Vaga na Iron Peak
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1 mb-8">
              Preencha os dados abaixo para reservar sua matrícula sem taxa de adesão nesta semana.
            </p>

            {/* Select Plan Tabs */}
            <div className="mb-8">
              <label className="block text-xs uppercase tracking-wider text-neutral-400 font-bold mb-3">
                1. Selecione o Plano Desejado:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {plans.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setCurrentPlanId(p.id)}
                    className={`p-3.5 rounded-2xl border text-left transition-all ${
                      currentPlanId === p.id
                        ? 'bg-[#181824] border-[#FF3E24] ring-1 ring-[#FF3E24]'
                        : 'bg-white/5 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-white uppercase">{p.name}</span>
                      {p.badge && (
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#FF3E24] text-white font-extrabold">
                          VIP
                        </span>
                      )}
                    </div>
                    <div className="text-lg font-black text-[#FF3E24] font-display">
                      R$ {p.priceMonth}<span className="text-[10px] text-neutral-400 font-normal">/mês</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {error && (
              <div className="mb-6 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs">
                {error}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-neutral-300 font-bold mb-1.5">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-[#FF3E24]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-neutral-300 font-bold mb-1.5">
                    WhatsApp com DDD *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(11) 90000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-[#FF3E24]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-neutral-300 font-bold mb-1.5">
                    E-mail Principal *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="seuemail@exemplo.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-[#FF3E24]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-neutral-300 font-bold mb-1.5">
                    Turno Preferencial de Treino
                  </label>
                  <select
                    value={formData.shift}
                    onChange={(e) => setFormData({ ...formData, shift: e.target.value })}
                    className="w-full px-3.5 py-3 rounded-xl bg-[#1A1A22] border border-white/10 text-white text-xs focus:outline-none focus:border-[#FF3E24]"
                  >
                    <option value="Manhã (05:30 às 12:00)">Manhã (05:30 às 12:00)</option>
                    <option value="Tarde (12:00 às 17:00)">Tarde (12:00 às 17:00)</option>
                    <option value="Noite (17:00 às 23:00)">Noite (17:00 às 23:00)</option>
                    <option value="Horário Livre / Flexível">Horário Livre / Flexível</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-neutral-300 font-bold mb-1.5">
                  Observações ou Objetivos
                </label>
                <input
                  type="text"
                  placeholder="Ex: Treino há 3 anos, foco em hipertrofia e saúde articular"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-[#FF3E24]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#FF3E24] to-[#E50914] text-white font-extrabold text-xs uppercase tracking-wider shadow-xl shadow-[#FF3E24]/30 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>CONFIRMAR E GARANTIR MINHA VAGA</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] text-neutral-400 pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Seus dados estão protegidos pela LGPD. Não enviamos spam.</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
