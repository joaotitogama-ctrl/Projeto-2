import React, { useState } from 'react';
import { PLANS } from '../data';
import type { Plan } from '../types';
import { Check, X, Crown, Sparkles, ArrowRight, ShieldAlert } from 'lucide-react';

interface PlansProps {
  onSelectPlan: (plan: Plan) => void;
}

export const Plans: React.FC<PlansProps> = ({ onSelectPlan }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  return (
    <section id="planos" className="py-24 bg-[#08080A] relative">
      {/* Background visual elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#FF3E24]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#FFB800]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#FF3E24] text-xs font-bold uppercase tracking-widest mb-3">
            <Crown className="w-3.5 h-3.5" />
            Planos & Mensalidades
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-display tracking-tight">
            Invista na Sua <span className="text-[#FF3E24]">Transformação</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-base sm:text-lg">
            Escolha o plano ideal para as suas metas. Sem letras miúdas, com estrutura completa e suporte contínuo para o seu progresso.
          </p>

          {/* Billing Switch */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-full bg-[#121217] border border-white/10">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-white/10 text-white shadow'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                billingCycle === 'annual'
                  ? 'bg-gradient-to-r from-[#FF3E24] to-[#E50914] text-white shadow-lg shadow-[#FF3E24]/20'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <span>Anual Fidelidade</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-black/40 text-[#FFB800] font-extrabold">
                -20% OFF
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PLANS.map((plan) => {
            const calculatedPrice = billingCycle === 'annual'
              ? Math.round(plan.priceMonth * 0.8)
              : plan.priceMonth;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl flex flex-col justify-between transition-all duration-300 ${
                  plan.featured
                    ? 'bg-gradient-to-b from-[#181822] via-[#121218] to-[#0E0E14] border-2 border-[#FF3E24] shadow-2xl shadow-[#FF3E24]/20 lg:-translate-y-3'
                    : 'bg-[#121217] border border-white/10 hover:border-white/20'
                }`}
              >
                {/* Popular or VIP Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-widest bg-gradient-to-r from-[#FF3E24] to-[#FF5722] text-white shadow-lg shadow-[#FF3E24]/40 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="p-8">
                  {/* Plan Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-black text-white font-display uppercase tracking-wide">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-2 min-h-[36px] leading-relaxed">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="pb-6 mb-6 border-b border-white/10">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs text-neutral-400 font-bold">R$</span>
                      <span className="text-4xl sm:text-5xl font-black text-white font-display tracking-tight">
                        {calculatedPrice}
                      </span>
                      <span className="text-xs text-neutral-400 font-medium">/mês</span>
                    </div>
                    <span className="text-[11px] text-neutral-400 mt-1 block">
                      {billingCycle === 'annual'
                        ? '*Faturamento anual em 12x sem juros'
                        : '*Cobrança recorrente mensal no cartão'}
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3.5">
                    <span className="text-xs uppercase tracking-wider text-neutral-400 font-bold block mb-4">
                      O que está incluso:
                    </span>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        {feature.included ? (
                          <div className="w-4 h-4 rounded-full bg-[#FF3E24]/20 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-[#FF3E24]" />
                          </div>
                        ) : (
                          <div className="w-4 h-4 rounded-full bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                            <X className="w-3 h-3 text-neutral-600" />
                          </div>
                        )}
                        <span
                          className={`text-xs sm:text-sm ${
                            feature.included ? 'text-neutral-200' : 'text-neutral-600 line-through'
                          }`}
                        >
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan Footer Button */}
                <div className="p-8 pt-0">
                  <button
                    onClick={() => onSelectPlan(plan)}
                    className={`w-full py-4 rounded-xl font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 ${
                      plan.featured
                        ? 'bg-gradient-to-r from-[#FF3E24] to-[#E50914] text-white shadow-xl shadow-[#FF3E24]/30 hover:scale-[1.02] active:scale-[0.98]'
                        : 'bg-white/10 hover:bg-white/15 text-white hover:scale-[1.02] active:scale-[0.98]'
                    }`}
                  >
                    <span>SELECIONAR ESTE PLANO</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note below plans */}
        <div className="mt-12 text-center text-xs text-neutral-400 max-w-xl mx-auto flex items-center justify-center gap-2">
          <ShieldAlert className="w-4 h-4 text-[#FF3E24] shrink-0" />
          <span>
            Valores demonstrativos sujeitos a confirmação. Todos os planos incluem avaliação física de bioimpedância e aplicativo móvel de treinos.
          </span>
        </div>
      </div>
    </section>
  );
};
