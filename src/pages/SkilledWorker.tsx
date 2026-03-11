import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { motion } from 'motion/react';
import { CheckCircle2, Calendar, Clock, MapPin, Phone, Video, CreditCard, ArrowRight, ChevronRight, Check, Users, Shield, Briefcase, GraduationCap, PoundSterling, FileText, AlertCircle } from 'lucide-react';
import { BookingSection } from '../components/BookingSection';

// --- Main Page Component ---

export default function SkilledWorker() {

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
              Work & Settle in the UK
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-display font-black text-brand-black mb-8 leading-tight"
            >
              Skilled Worker Visa – <span className="text-brand-red">Expert Immigration Lawyers</span> in Manchester
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-zinc-600 font-medium leading-relaxed mb-12"
            >
              If you want to live and work in the UK legally, the Skilled Worker visa is one of the most popular and secure immigration routes. Whether you are switching from a Graduate Visa, extending your current permission, or applying with family members, expert legal support can significantly improve your chances of success.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-zinc-500 leading-relaxed mb-12 max-w-3xl mx-auto"
            >
              At Shams Britvisa Lawyers, based in Manchester, we provide specialist advice on Skilled Worker visa applications, extensions, settlement (ILR), and dependent visas. Our experienced immigration team ensures your application is accurate, compliant, and strategically prepared.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-20">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-10 rounded-[40px] shadow-2xl border border-zinc-100"
            >
              <h2 className="text-3xl font-black text-brand-black mb-8">What Is the Skilled Worker Visa?</h2>
              <p className="text-zinc-600 mb-6 leading-relaxed">
                The Skilled Worker visa allows overseas nationals to work in the UK for an approved sponsor in an eligible occupation. This route replaced the former Tier 2 (General) visa and is now the primary work visa pathway.
              </p>
              <h3 className="text-xl font-black text-brand-black mb-4">To qualify, you must:</h3>
              <div className="grid gap-4">
                {[
                  'Have a job offer from a UK-licensed sponsor',
                  'Meet salary thresholds',
                  'Meet English language requirements',
                  'Receive a valid Certificate of Sponsorship (CoS)'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
                    <div className="w-8 h-8 bg-brand-red text-white rounded-full flex items-center justify-center shrink-0">
                      <Check size={18} />
                    </div>
                    <span className="text-lg font-bold text-brand-black">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-zinc-500 font-medium">Our Manchester-based legal team ensures all eligibility criteria are met before submission.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <img 
                src="https://i.ibb.co/nM29tqY2/image.png" 
                alt="Skilled Worker Visa" 
                className="w-full rounded-[40px] shadow-2xl h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 bg-brand-black text-white p-10 rounded-[40px] shadow-2xl max-w-xs">
                <div className="text-4xl font-black text-brand-red mb-2">5 Years</div>
                <div className="text-lg font-bold leading-tight">Pathway to Indefinite Leave to Remain (ILR)</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* PSW to Skilled Worker */}
        <section className="bg-brand-black py-24 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-16 h-16 bg-brand-red text-white rounded-2xl flex items-center justify-center">
                  <GraduationCap size={32} />
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-black">PSW to Skilled Worker Visa</h2>
              </div>
              <p className="text-xl text-white/70 mb-12 leading-relaxed">
                Many individuals switch from the Graduate Route (PSW) to the Skilled Worker visa. Switching from Graduate visa to Skilled Worker visa is a common and strategic move for those wishing to remain in the UK long term.
              </p>
              
              <div className="bg-white/5 p-10 rounded-[40px] border border-white/10">
                <h3 className="text-2xl font-black mb-8">How to Switch from PSW to Skilled Worker Visa</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    'Secure a job with a licensed sponsor',
                    'Meet the required salary level',
                    'Ensure your employer assigns a CoS',
                    'Apply before your Graduate visa expires'
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl border border-white/10">
                      <div className="w-10 h-10 bg-brand-red text-white rounded-xl flex items-center justify-center shrink-0 font-black">
                        {idx + 1}
                      </div>
                      <p className="text-lg font-bold">{step}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-10 text-brand-red font-black text-center text-xl">
                  We guide applicants step-by-step to ensure a smooth transition without immigration gaps.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Extension & Processing */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl font-black text-brand-black mb-8 flex items-center gap-4">
                  <Clock className="text-brand-red" /> Skilled Worker Visa Extension
                </h2>
                <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                  If your visa is due to expire, you may need a Skilled Worker visa extension. Understanding how to extend Skilled Worker visa correctly is essential to avoid refusal or overstaying.
                </p>
                <div className="space-y-4">
                  <h3 className="text-xl font-black text-brand-black mb-4">To apply for an extension, you must:</h3>
                  {[
                    'Continue working for a licensed sponsor',
                    'Meet updated salary requirements',
                    'Have a new or extended Certificate of Sponsorship'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
                      <CheckCircle2 className="text-brand-red shrink-0" />
                      <span className="font-bold text-brand-black">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-8 p-6 bg-brand-red/5 rounded-2xl border border-brand-red/10 text-brand-black font-bold">
                  At Shams Britvisa Lawyers in Manchester, we handle full application preparation and compliance checks for extending Skilled Worker visa applications.
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-black text-brand-black mb-8 flex items-center gap-4">
                  <Briefcase className="text-brand-red" /> Processing Times & Costs
                </h2>
                <div className="space-y-8">
                  <div className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100">
                    <h3 className="text-xl font-black text-brand-black mb-4">Processing Times</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-white rounded-2xl shadow-sm">
                        <p className="text-3xl font-black text-brand-red">3 Weeks</p>
                        <p className="text-sm font-bold text-zinc-500 uppercase">Outside UK</p>
                      </div>
                      <div className="text-center p-4 bg-white rounded-2xl shadow-sm">
                        <p className="text-3xl font-black text-brand-red">8 Weeks</p>
                        <p className="text-sm font-bold text-zinc-500 uppercase">Inside UK</p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-zinc-500 italic">Priority services may be available depending on location.</p>
                  </div>

                  <div className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100">
                    <h3 className="text-xl font-black text-brand-black mb-4">Cost of Skilled Worker Visa UK</h3>
                    <ul className="space-y-3">
                      {[
                        'Length of stay',
                        'Whether the role is on the shortage occupation list',
                        'Immigration Health Surcharge (IHS)',
                        'Sponsor fees'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-zinc-600 font-medium">
                          <PoundSterling size={16} className="text-brand-red" /> {item}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-6 font-bold text-brand-black">We provide transparent breakdowns of total costs before submission.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dependents & ILR */}
        <section className="py-24 bg-zinc-50">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-white p-12 rounded-[40px] shadow-xl border border-zinc-100">
                <h2 className="text-3xl font-black text-brand-black mb-8 flex items-center gap-4">
                  <Users className="text-brand-red" /> Skilled Worker Dependent Visa
                </h2>
                <p className="text-zinc-600 mb-8 leading-relaxed">
                  Family members can join or remain with you under the Skilled Worker route. If the main applicant extends their visa, dependants must apply for a Skilled Worker dependent visa extension at the same time.
                </p>
                <div className="grid gap-4">
                  <div className="p-6 bg-zinc-50 rounded-2xl">
                    <h4 className="font-black text-brand-black mb-2">Dependent Visa Fee Factors:</h4>
                    <ul className="grid grid-cols-2 gap-2 text-sm font-bold text-zinc-500">
                      <li>• Duration of visa</li>
                      <li>• Location</li>
                      <li>• IHS surcharge</li>
                    </ul>
                  </div>
                </div>
                <p className="mt-8 font-bold text-brand-red">We assist families across Manchester and the UK with full dependent visa applications and extensions.</p>
              </div>

              <div className="bg-white p-12 rounded-[40px] shadow-xl border border-zinc-100">
                <h2 className="text-3xl font-black text-brand-black mb-8 flex items-center gap-4">
                  <Shield className="text-brand-red" /> ILR After Skilled Worker Visa
                </h2>
                <p className="text-zinc-600 mb-8 leading-relaxed">
                  After 5 years in the UK under this route, you may apply for settlement (Indefinite Leave to Remain). Preparing the correct documents required for ILR Skilled Worker visa is critical to avoid refusal.
                </p>
                <div className="space-y-4">
                  <h4 className="font-black text-brand-black">Documents Required:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      '5 years lawful residence',
                      'Employment confirmation',
                      'Salary evidence',
                      'Life in the UK Test',
                      'English language proof'
                    ].map((doc, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm font-bold text-zinc-500">
                        <FileText size={14} className="text-brand-red" /> {doc}
                      </div>
                    ))}
                  </div>
                </div>
                <p className="mt-8 font-bold text-brand-red">We conduct thorough eligibility reviews to ensure you qualify before submission.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Refusals & Why Us */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-16">
                <div>
                  <h2 className="text-3xl font-black text-brand-black mb-8 flex items-center gap-4">
                    <AlertCircle className="text-brand-red" /> Common Refusal Reasons
                  </h2>
                  <div className="space-y-4">
                    {[
                      'Incorrect salary calculations',
                      'Invalid Certificate of Sponsorship',
                      'Employer compliance breaches',
                      'Missing documents',
                      'English language errors'
                    ].map((reason, idx) => (
                      <div key={idx} className="flex items-center gap-4 p-4 bg-red-50 rounded-2xl border border-red-100">
                        <div className="w-2 h-2 bg-brand-red rounded-full" />
                        <span className="font-bold text-brand-black">{reason}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-black text-brand-black mb-8">Why Choose Shams Britvisa?</h2>
                  <div className="grid gap-3">
                    {[
                      'Specialist Skilled Worker visa expertise',
                      'Experience with PSW transitions',
                      'Skilled Worker visa extension support',
                      'Dependent visa services',
                      'ILR application preparation',
                      'Transparent fee structure',
                      'Manchester-based immigration lawyers'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-zinc-600 font-bold">
                        <Check size={18} className="text-emerald-500" /> {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <BookingSection 
          title="Book Your Consultation"
          description="Start your Skilled Worker visa application today. Book your consultation and let our expert team guide you through every stage."
          className="bg-zinc-50"
        />
      </main>

      <Footer />
    </div>
  );
}
