import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  TrendingUp, 
  ShieldCheck, 
  Users
} from 'lucide-react';
import { BookingSection } from '../components/BookingSection';

const SkilledWorkerVisa = () => {
  return (
    <div className="min-h-screen bg-zinc-50 selection:bg-brand-red selection:text-white">
      <Navbar />
      
      <main className="pb-24">
        {/* Hero Section */}
        <section className="relative pt-40 pb-24 overflow-hidden mb-20">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
              alt="Manchester Business District" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-white/90 backdrop-blur-[2px]" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <span className="inline-block bg-brand-red/10 text-brand-red px-4 py-2 rounded-full text-sm font-black uppercase tracking-widest mb-6">
                  Expert Immigration Lawyers in Manchester
                </span>
                <h1 className="text-5xl md:text-7xl font-display font-black text-brand-black mb-8 leading-tight">
                  SKILLED <span className="text-brand-red">WORKER VISA</span>
                </h1>
                <p className="text-xl text-zinc-600 font-medium leading-relaxed max-w-3xl mx-auto">
                  If you want to live and work in the UK legally, the Skilled Worker visa is one of the most popular and secure immigration routes.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Introduction Cards */}
        <section className="container mx-auto px-6 mb-24">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[40px] shadow-xl border border-zinc-100"
            >
              <h2 className="text-3xl font-black text-brand-black mb-6">Specialist Advice</h2>
              <p className="text-lg text-zinc-600 font-medium leading-relaxed">
                At Shams Britvisa Lawyers, based in Manchester, we provide specialist advice on Skilled Worker visa applications, extensions, settlement (ILR), and dependent visas.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-brand-black p-10 rounded-[40px] shadow-xl text-white"
            >
              <h2 className="text-3xl font-black mb-6">Expert Team</h2>
              <p className="text-lg text-white/80 font-medium leading-relaxed">
                Our experienced immigration team ensures your application is accurate, compliant, and strategically prepared to significantly improve your chances of success.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What is Skilled Worker Visa? */}
        <section className="container mx-auto px-6 mb-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-black text-brand-black mb-8">What Is the Skilled Worker Visa?</h2>
                <p className="text-lg text-zinc-600 font-medium mb-8 leading-relaxed">
                  The Skilled Worker visa allows overseas nationals to work in the UK for an approved sponsor in an eligible occupation. This route replaced the former Tier 2 (General) visa.
                </p>
                <div className="space-y-4">
                  {[
                    "Job offer from a UK-licensed sponsor",
                    "Meet salary thresholds",
                    "Meet English language requirements",
                    "Receive a valid Certificate of Sponsorship (CoS)"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-zinc-100">
                      <CheckCircle2 className="text-brand-red shrink-0" />
                      <span className="font-bold text-brand-black">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-zinc-100 rounded-[40px] p-10 border border-zinc-200">
                <h3 className="text-2xl font-black text-brand-black mb-6">Strategic Transitions</h3>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-3xl shadow-sm">
                    <p className="font-black text-brand-red mb-2">PSW to Skilled Worker</p>
                    <p className="text-zinc-600 font-bold">Secure a job with a licensed sponsor and apply before your Graduate visa expires.</p>
                  </div>
                  <div className="bg-white p-6 rounded-3xl shadow-sm">
                    <p className="font-black text-brand-red mb-2">Visa Extension</p>
                    <p className="text-zinc-600 font-bold">Continue working for a licensed sponsor and meet updated salary requirements.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing & Costs */}
        <section className="bg-brand-black py-24 mb-24">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Processing & Costs</h2>
                <p className="text-xl text-white/60 max-w-2xl mx-auto">
                  We provide transparent breakdowns of total costs and timelines before submission.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/5 border border-white/10 p-10 rounded-[40px] hover:bg-white/10 transition-all">
                  <Clock className="text-brand-red mb-6 w-12 h-12" />
                  <h3 className="text-2xl font-black text-white mb-6">Processing Times</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-white/5 rounded-2xl">
                      <span className="text-white/80 font-bold">Outside UK</span>
                      <span className="text-brand-red font-black">3 Weeks</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-white/5 rounded-2xl">
                      <span className="text-white/80 font-bold">Inside UK</span>
                      <span className="text-brand-red font-black">8 Weeks</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 border border-white/10 p-10 rounded-[40px] hover:bg-white/10 transition-all">
                  <TrendingUp className="text-brand-red mb-6 w-12 h-12" />
                  <h3 className="text-2xl font-black text-white mb-6">Cost Factors</h3>
                  <ul className="space-y-3 text-white/60 font-bold">
                    <li className="flex items-center gap-3">• Length of stay</li>
                    <li className="flex items-center gap-3">• Shortage occupation status</li>
                    <li className="flex items-center gap-3">• Immigration Health Surcharge (IHS)</li>
                    <li className="flex items-center gap-3">• Sponsor & legal fees</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dependents & ILR */}
        <section className="container mx-auto px-6 mb-24">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-[40px] shadow-xl border border-zinc-100">
              <h2 className="text-3xl font-black text-brand-black mb-8 flex items-center gap-4">
                <Users className="text-brand-red" /> Skilled Worker Dependent Visa
              </h2>
              <p className="text-lg text-zinc-600 font-medium mb-8">
                Family members can join or remain with you. We assist with full applications and extensions for dependants.
              </p>
              <div className="bg-zinc-50 p-6 rounded-3xl border border-zinc-100">
                <h4 className="font-black text-brand-black mb-4">Key Considerations:</h4>
                <ul className="space-y-2 text-zinc-600 font-bold">
                  <li>• Duration of visa matches main applicant</li>
                  <li>• IHS surcharge applies per person</li>
                  <li>• Must extend at the same time as main applicant</li>
                </ul>
              </div>
            </div>
            <div className="bg-white p-12 rounded-[40px] shadow-xl border border-zinc-100">
              <h2 className="text-3xl font-black text-brand-black mb-8 flex items-center gap-4">
                <ShieldCheck className="text-brand-red" /> ILR After 5 Years
              </h2>
              <p className="text-lg text-zinc-600 font-medium mb-8">
                After 5 years of lawful residence, you may apply for settlement (Indefinite Leave to Remain).
              </p>
              <div className="bg-zinc-50 p-6 rounded-3xl border border-zinc-100">
                <h4 className="font-black text-brand-black mb-4">Required Documents:</h4>
                <ul className="space-y-2 text-zinc-600 font-bold">
                  <li>• Proof of 5 years lawful residence</li>
                  <li>• Employment & salary confirmation</li>
                  <li>• Life in the UK Test certificate</li>
                  <li>• English language proof</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Refusal Reasons */}
        <section className="container mx-auto px-6 mb-24">
          <div className="max-w-4xl mx-auto bg-brand-black p-12 rounded-[50px] shadow-2xl text-white">
            <h2 className="text-3xl font-black mb-10 text-center">Common Reasons for Refusal</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Incorrect salary calculations",
                "Invalid Certificate of Sponsorship",
                "Employer compliance breaches",
                "Missing documents",
                "English language errors"
              ].map((reason, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                  <AlertCircle className="text-brand-red shrink-0" />
                  <span className="font-bold text-white/80">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="container mx-auto px-6 mb-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-black text-brand-black mb-12">Why Choose Shams Britvisa Lawyers?</h2>
            <div className="grid sm:grid-cols-2 gap-8 text-left">
              {[
                "Specialist Skilled Worker visa expertise",
                "Experience with PSW to Skilled Worker transitions",
                "Skilled Worker visa extension support",
                "Dependent visa and extension services",
                "ILR application preparation",
                "Manchester-based immigration lawyers"
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle2 className="text-white" size={18} />
                  </div>
                  <span className="font-black text-brand-black">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <BookingSection 
          title="Start Your Application Today"
          description="Book your consultation today and let our expert team guide you through every stage of the Skilled Worker visa process."
          className="bg-zinc-50"
        />
      </main>

      <Footer />
    </div>
  );
};

export default SkilledWorkerVisa;
