import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Calendar, Clock, MapPin, Phone, Video, CreditCard, ArrowRight, ChevronRight, Check } from 'lucide-react';
import { BookingSection } from '../components/BookingSection';

// --- Main Page Component ---

export default function InnovatorFounder() {
  return (
    <div className="min-h-screen bg-zinc-50 selection:bg-brand-red selection:text-white">
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="container mx-auto px-6 mb-24">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block bg-brand-red/10 text-brand-red px-6 py-2 rounded-full font-black uppercase tracking-widest text-sm mb-6"
            >
              Fast-Track Settlement Pathway
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-black text-brand-black mb-8 leading-tight"
            >
              ILR IN <span className="text-brand-red">3 YEARS</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl text-zinc-600 font-medium leading-relaxed mb-12"
            >
              Move to the UK or Switch Inside the UK via Innovator Founder. Turn your skills into a UK business and settlement pathway.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-20">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-12 rounded-[40px] shadow-2xl border border-zinc-100"
            >
              <h2 className="text-3xl font-black text-brand-black mb-8">Who Is This For?</h2>
              <div className="grid gap-4">
                {[
                  'PSW holders looking to switch',
                  'Skilled Workers seeking independence',
                  'Entrepreneurs outside the UK',
                  'Professionals wanting to move to the UK',
                  'Anyone wanting a fast-track to ILR'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
                    <div className="w-8 h-8 bg-brand-red text-white rounded-full flex items-center justify-center shrink-0">
                      <Check size={18} />
                    </div>
                    <span className="text-lg font-bold text-brand-black">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <img 
                src="https://i.ibb.co/pHczb72/image.png" 
                alt="Innovator Founder" 
                className="w-full rounded-[40px] shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -left-10 bg-brand-black text-white p-10 rounded-[40px] shadow-2xl max-w-xs">
                <div className="text-5xl font-black text-brand-red mb-2">3Yrs</div>
                <div className="text-lg font-bold leading-tight">Fast-track to Indefinite Leave to Remain</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="bg-brand-black py-24 text-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-display font-black mb-16 text-center">Key Benefits</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Fast-Track ILR', desc: 'Potential ILR in 3 years (subject to criteria)', icon: <Clock /> },
                { title: 'No Sponsor Needed', desc: 'No traditional employer sponsor required', icon: <Shield /> },
                { title: 'No Salary Cap', desc: 'No fixed minimum salary threshold', icon: <CreditCard /> },
                { title: 'Family Relocation', desc: 'Family members can apply as dependants', icon: <Users /> },
                { title: 'Work Flexibility', desc: '20 hours additional work permitted', icon: <Clock /> },
                { title: 'Full Control', desc: 'Flexible structure and full business control', icon: <CheckCircle2 /> },
              ].map((benefit, idx) => (
                <div key={idx} className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all group">
                  <div className="w-12 h-12 bg-brand-red text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {React.cloneElement(benefit.icon as React.ReactElement<any>, { size: 24 })}
                  </div>
                  <h3 className="text-xl font-black mb-4">{benefit.title}</h3>
                  <p className="text-white/60 leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-display font-black text-brand-black mb-16 text-center">How It Works</h2>
              
              <div className="space-y-12">
                <div className="flex gap-8">
                  <div className="w-16 h-16 bg-brand-red text-white rounded-full flex items-center justify-center shrink-0 font-black text-2xl shadow-xl">1</div>
                  <div>
                    <h3 className="text-2xl font-black text-brand-black mb-4">Consultation First</h3>
                    <p className="text-xl text-zinc-600 leading-relaxed">We assess your CV, qualifications, immigration status, and relocation goals to ensure this is the right path for you.</p>
                  </div>
                </div>

                <div className="flex gap-8">
                  <div className="w-16 h-16 bg-brand-red text-white rounded-full flex items-center justify-center shrink-0 font-black text-2xl shadow-xl">2</div>
                  <div>
                    <h3 className="text-2xl font-black text-brand-black mb-4">Stage 1 – Endorsement</h3>
                    <ul className="space-y-4 text-lg text-zinc-600">
                      <li className="flex gap-3"><CheckCircle2 className="text-brand-red shrink-0" /> We develop an innovative UK business idea based on your background</li>
                      <li className="flex gap-3"><CheckCircle2 className="text-brand-red shrink-0" /> Business plan and financial forecast prepared</li>
                      <li className="flex gap-3"><CheckCircle2 className="text-brand-red shrink-0" /> Submission to endorsement body (Fee approx. £1,000)</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-8">
                  <div className="w-16 h-16 bg-brand-red text-white rounded-full flex items-center justify-center shrink-0 font-black text-2xl shadow-xl">3</div>
                  <div>
                    <h3 className="text-2xl font-black text-brand-black mb-4">Stage 2 – Visa Application</h3>
                    <p className="text-xl text-zinc-600 leading-relaxed">Full visa preparation for you and your dependants. We handle all the paperwork and Home Office communication.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <BookingSection 
          title="Book Your Consultation"
          description="Explore your relocation strategy with our expert team. Consultation fee is fully refunded when you instruct us."
          className="bg-zinc-50"
        />
      </main>

      <Footer />
    </div>
  );
}

// --- Icons (missing from lucide) ---
const Shield = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const Users = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
