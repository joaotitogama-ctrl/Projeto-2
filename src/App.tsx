import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Modalities } from './components/Modalities';
import { Structure } from './components/Structure';
import { Plans } from './components/Plans';
import { Trainers } from './components/Trainers';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { EnrollmentModal } from './components/EnrollmentModal';
import { PLANS } from './data';
import type { Plan } from './types';

export function App() {
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);
  const [selectedPlanForModal, setSelectedPlanForModal] = useState<Plan | null>(null);
  const [enrollmentNote, setEnrollmentNote] = useState<string>('');

  const handleOpenEnrollment = (planId?: string) => {
    if (planId) {
      const found = PLANS.find((p) => p.id === planId);
      setSelectedPlanForModal(found || null);
    } else {
      setSelectedPlanForModal(PLANS[1]); // Default to Premium
    }
    setEnrollmentNote('');
    setIsEnrollmentOpen(true);
  };

  const handleOpenEnrollmentWithNote = (note: string) => {
    setSelectedPlanForModal(PLANS[1]);
    setEnrollmentNote(note);
    setIsEnrollmentOpen(true);
  };

  const handleSelectPlan = (plan: Plan) => {
    setSelectedPlanForModal(plan);
    setEnrollmentNote(`Plano escolhido: ${plan.name}`);
    setIsEnrollmentOpen(true);
  };

  const handleExploreClick = () => {
    const el = document.getElementById('sobre');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#08080A] text-neutral-100 flex flex-col font-sans selection:bg-[#FF3E24] selection:text-white">
      {/* Navbar */}
      <Navbar onOpenEnrollment={handleOpenEnrollment} />

      {/* Main Content */}
      <main className="flex-1">
        <Hero
          onOpenEnrollment={() => handleOpenEnrollment()}
          onExploreClick={handleExploreClick}
        />
        <About />
        <Modalities onOpenEnrollmentWithNote={handleOpenEnrollmentWithNote} />
        <Structure />
        <Plans onSelectPlan={handleSelectPlan} />
        <Trainers />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive WhatsApp Floating Button */}
      <FloatingWhatsApp />

      {/* Modal for Enrollment & Plan Selection */}
      <EnrollmentModal
        isOpen={isEnrollmentOpen}
        onClose={() => setIsEnrollmentOpen(false)}
        selectedPlan={selectedPlanForModal}
        plans={PLANS}
        initialNote={enrollmentNote}
      />
    </div>
  );
}

export default App;
