import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { motion } from 'motion/react';
import { CheckCircle2, Check, Shield, Users, Briefcase, Target, Zap } from 'lucide-react';
import { BookingSection } from '../components/BookingSection';

// --- Main Page Component ---

export default function SelfSponsorship() {
  return (
    <div className="min-h-screen bg-zinc-50 selection:bg-brand-red selection:text-white">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 bg-brand-black overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-30">
            <img 
              src="https://i.ibb.co/rfGcX9wr/image.png" 
              alt="Self Sponsorship Background"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/80 via-brand-black/90 to-zinc-50 z-0" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="inline-block bg-brand-red text-white px-6 py-2 rounded-full font-black uppercase tracking-widest text-sm mb-6 shadow-lg shadow-brand-red/20"
              >
                Take Control of Your Sponsorship
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.1 }} 
                className="text-4xl md:text-6xl font-display font-black text-white mb-8 leading-tight"
              >
                SELF-SPONSORSHIP <span className="text-brand-red">ROUTE</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.2 }} 
                className="text-2xl text-white/80 font-medium leading-relaxed mb-12"
              >
                Set Up Your Own UK Company & Sponsor Yourself. Stop relying on employers — build your own pathway to UK settlement.
              </motion.p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 -mt-20 relative z-20 mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="bg-white p-12 rounded-[40px] shadow-2xl border border-zinc-100">
              <h2 className="text-3xl font-black text-brand-black mb-8">Who Is This For?</h2>
              <div className="grid gap-4">
                {['Individuals already in the UK wishing to switch', 'Overseas entrepreneurs planning to relocate', 'Professionals with genuine business ideas', 'Founders wanting full control over sponsorship'].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
                    <div className="w-8 h-8 bg-brand-red text-white rounded-full flex items-center justify-center shrink-0"><Check size={18} /></div>
                    <span className="text-lg font-bold text-brand-black">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="relative">
              <img src="https://i.ibb.co/KvzxwGh/image.png" alt="Self Sponsorship" className="w-full rounded-[40px] shadow-2xl" referrerPolicy="no-referrer" />
              <div className="absolute -bottom-10 -right-10 bg-brand-black text-white p-10 rounded-[40px] shadow-2xl max-w-xs">
                <div className="text-5xl font-black text-brand-red mb-2">100%</div>
                <div className="text-lg font-bold leading-tight">Control over your own UK Sponsorship</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="bg-brand-black py-24 text-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-display font-black mb-16 text-center">Key Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'UK Company Formation', desc: 'Expert guidance on setting up your UK entity correctly.', icon: <Briefcase /> },
                { title: 'Sponsorship Licence', desc: 'We handle your company\'s Sponsor Licence application.', icon: <Shield /> },
                { title: 'Skilled Worker Visa', desc: 'Sponsor yourself as a director or key employee.', icon: <CheckCircle2 /> },
                { title: 'Relocate Legally', desc: 'Move to the UK through your own established business.', icon: <Zap /> },
                { title: 'Settlement Strategy', desc: 'Build a long-term pathway to Indefinite Leave to Remain.', icon: <Target /> },
                { title: 'No Employer Dependency', desc: 'Full independence from third-party sponsors.', icon: <Users /> },
              ].map((benefit, idx) => (
                <div key={idx} className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all group">
                  <div className="w-12 h-12 bg-brand-red text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">{benefit.icon}</div>
                  <h3 className="text-xl font-black mb-4">{benefit.title}</h3>
                  <p className="text-white/60 leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Support You */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-display font-black text-brand-black mb-16 text-center">How We Support You</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  'Strategic eligibility assessment',
                  'UK company formation guidance',
                  'Sponsor licence roadmap',
                  'Correct SOC code selection',
                  'Compliance systems setup',
                  'Skilled Worker visa application',
                  'Long-term ILR planning'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-6 bg-zinc-50 rounded-3xl border border-zinc-100">
                    <CheckCircle2 className="text-brand-red shrink-0" />
                    <span className="text-lg font-bold text-brand-black">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-zinc-500 mt-12 text-lg italic">We structure your case carefully to align with UKVI requirements.</p>
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <BookingSection 
          title="Start Your Self-Sponsorship"
          description="Book your consultation and start planning your move to the UK. Fee fully refunded when you proceed."
          className="bg-zinc-50"
        />
      </main>
      <Footer />
    </div>
  );
}
