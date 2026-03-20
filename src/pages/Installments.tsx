import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { motion } from 'motion/react';
import { CreditCard, Calendar, CheckCircle, ShieldCheck } from 'lucide-react';

export default function Installments() {
  const plans = [
    {
      title: "Standard Plan",
      description: "Split your legal fees into 3 manageable monthly payments.",
      features: ["0% Interest", "No Credit Check", "Instant Approval"],
      icon: <Calendar className="text-brand-red" size={32} />
    },
    {
      title: "Extended Plan",
      description: "For larger cases, spread the cost over 6 months.",
      features: ["Low Fixed Fee", "Flexible Dates", "Dedicated Support"],
      icon: <CreditCard className="text-brand-red" size={32} />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-24 sm:pt-32 pb-12 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center mb-12 sm:mb-16"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-display font-black text-brand-black mb-4 sm:mb-6 uppercase tracking-tight">
              Pay in <span className="text-brand-red">Installments</span>
            </h1>
            <p className="text-base sm:text-xl text-zinc-600 leading-relaxed">
              We believe quality legal advice should be accessible to everyone. Our flexible payment plans allow you to start your UK journey today without the financial burden of upfront costs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto mb-12 sm:mb-20">
            {plans.map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-zinc-50 p-6 sm:p-10 rounded-[24px] sm:rounded-[40px] border border-zinc-100 hover:shadow-2xl transition-all group"
              >
                <div className="mb-4 sm:mb-6 bg-white w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  {React.cloneElement(plan.icon as React.ReactElement<any>, { size: 28, className: "sm:w-8 sm:h-8 text-brand-red" })}
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-brand-black mb-3 sm:mb-4 uppercase">{plan.title}</h3>
                <p className="text-sm sm:text-base text-zinc-600 mb-6 sm:mb-8 leading-relaxed">{plan.description}</p>
                <ul className="space-y-3 sm:space-y-4">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-brand-black text-sm sm:text-base font-medium">
                      <CheckCircle size={18} className="sm:w-5 sm:h-5 text-brand-red" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-brand-black rounded-[24px] sm:rounded-[40px] p-8 sm:p-12 text-center text-white relative overflow-hidden max-w-5xl mx-auto"
          >
            <div className="relative z-10">
              <ShieldCheck size={40} className="sm:w-12 sm:h-12 mx-auto mb-4 sm:mb-6 text-brand-red" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold mb-4 sm:mb-6 uppercase">Safe & Secure Payments</h2>
              <p className="text-base sm:text-lg text-white/70 mb-8 sm:mb-10 max-w-2xl mx-auto">
                All our payment plans are transparent with no hidden charges. We use industry-standard encryption to protect your financial information.
              </p>
              <button 
                onClick={() => window.location.href = '/booking'}
                className="bg-brand-red text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-red-700 transition-all shadow-xl w-full sm:w-auto"
              >
                Apply for Installment Plan
              </button>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-red/10 rounded-full -ml-32 -mb-32 blur-3xl" />
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
