import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { motion } from 'motion/react';
import { FileSearch, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { DocumentCheckingForm } from '../components/DocumentCheckingForm';

export default function DocumentChecking() {
  return (
    <div className="min-h-screen bg-white selection:bg-brand-red selection:text-white">
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden bg-[#0D0D0D]">
          <div className="absolute inset-0">
            <img 
              src="https://i.ibb.co/Gv796yD2/image.png" 
              alt="UK Cityscape" 
              className="w-full h-full object-cover opacity-20"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D0D] via-[#0D0D0D]/90 to-brand-red/10" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block bg-brand-red text-white px-6 py-2 rounded-full font-black uppercase tracking-[0.3em] text-sm mb-8"
              >
                Professional Review
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-8xl font-display font-black text-white mb-8 leading-tight"
              >
                Document Checking <br />
                <span className="text-brand-red">Service</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-white/70 font-medium leading-relaxed mb-12 max-w-2xl mx-auto"
              >
                Ensure your UK visa application is flawless with our professional document review service. Complete the form below for an expert-led audit that guarantees peace of mind.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section className="py-24 bg-white relative">
          <div className="container mx-auto px-6">
            <div className="max-w-[1100px] mx-auto">
              <div className="grid lg:grid-cols-12 gap-16">
                
                {/* LEFT SIDE: INFO (4 cols) */}
                <div className="lg:col-span-4 space-y-12">
                  <div>
                    <h3 className="text-2xl font-condensed font-black text-brand-black mb-6 uppercase tracking-tight">Why Use This Service?</h3>
                    <ul className="space-y-4">
                      <li className="flex gap-4">
                        <div className="mt-1">
                          <motion.a 
                            href="https://portal.immigrationadviceauthority.gov.uk/s/adviser-register" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hover:scale-110 transition-transform block"
                            animate={{ 
                              scale: [1, 1.05, 1],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            <img src="https://i.ibb.co/VPt2xXW/IAA-Logo.png" alt="IAA Logo" className="h-16 w-auto" referrerPolicy="no-referrer" />
                          </motion.a>
                        </div>
                        <div>
                          <h5 className="font-bold text-brand-black text-sm">IAA Regulated</h5>
                          <p className="text-xs text-zinc-500 leading-relaxed">Expert audit by a regulated UK immigration adviser.</p>
                        </div>
                      </li>
                      {[
                        { title: "Fast Turnaround", desc: "Detailed feedback report within 48-72 hours." },
                        { title: "Compliance Check", desc: "Verify evidence meets the latest Home Office rules." }
                      ].map((item, i) => (
                        <li key={i} className="flex gap-4">
                          <div className="mt-1">
                            <CheckCircle2 className="text-brand-red" size={18} />
                          </div>
                          <div>
                            <h5 className="font-bold text-brand-black text-sm">{item.title}</h5>
                            <p className="text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100">
                    <h4 className="font-bold text-brand-black mb-4">Service Benefits</h4>
                    <p className="text-sm text-zinc-500 leading-relaxed mb-6">
                      Our document checking service significantly reduces the risk of refusal due to missing or incorrect evidence.
                    </p>
                    <div className="flex items-center gap-3 text-brand-red font-bold text-sm">
                      <ShieldCheck size={18} />
                      <span>Secure Submission</span>
                    </div>
                  </div>
                </div>

                {/* RIGHT SIDE: FORM (8 cols) */}
                <div className="lg:col-span-8">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />
                    <DocumentCheckingForm />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Preview */}
        <section className="py-24 bg-zinc-50">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {[
                {
                  icon: <FileSearch size={40} />,
                  title: "Expert Audit",
                  desc: "A thorough review of every document in your application by a regulated UK immigration adviser."
                },
                {
                  icon: <Clock size={40} />,
                  title: "Fast Turnaround",
                  desc: "Get your detailed feedback report within 48-72 hours, ensuring you stay on track with your submission."
                },
                {
                  icon: <ShieldCheck size={40} />,
                  title: "Compliance Check",
                  desc: "We verify that your evidence meets the specific requirements of the latest Home Office immigration rules."
                }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-10 rounded-[40px] shadow-xl border border-zinc-100 text-center group hover:border-brand-red/20 transition-all"
                >
                  <div className="w-20 h-20 bg-brand-red/5 text-brand-red rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-black text-brand-black mb-4">{feature.title}</h3>
                  <p className="text-zinc-500 font-medium leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
