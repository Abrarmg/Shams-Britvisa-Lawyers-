import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { motion } from 'motion/react';
import { Check, Clock, PoundSterling, HelpCircle, Users, ArrowRight } from 'lucide-react';
import { BookingSection } from './BookingSection';
import { Link } from 'react-router-dom';

interface Fee {
  type: string;
  amount: string;
  notes: string;
}

interface VisaPageProps {
  title: string;
  description: string;
  whatIs: string;
  whoIsItFor: string[];
  keyRequirements: string[];
  fees: Fee[];
  processingTime: string | string[];
  howWeHelp: string;
  heroImage?: string;
}

export const VisaPageTemplate: React.FC<VisaPageProps> = ({
  title,
  description,
  whatIs,
  whoIsItFor,
  keyRequirements,
  fees,
  processingTime,
  howWeHelp,
  heroImage = "https://images.unsplash.com/photo-1436450412740-6b988f486c6b?auto=format&fit=crop&q=80"
}) => {
  return (
    <div className="min-h-screen bg-zinc-50 selection:bg-brand-red selection:text-white">
      <Navbar />

      <main className="pt-24 sm:pt-32 pb-12 sm:pb-24">
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 mb-12 sm:mb-24">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-4xl md:text-6xl font-display font-black text-brand-black mb-4 sm:mb-6 leading-tight"
            >
              {title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-base sm:text-xl text-zinc-600 font-medium leading-relaxed mb-8 sm:mb-12"
            >
              {description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link 
                to="/booking"
                className="inline-flex items-center justify-center gap-2 bg-brand-red text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-red-700 transition-all shadow-lg hover:shadow-red-500/20 w-full sm:w-auto"
              >
                Book a Free Consultation
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-start">
            {/* Left Column: Intro & Eligibility */}
            <div className="space-y-8 sm:space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 sm:p-10 rounded-[24px] sm:rounded-[40px] shadow-xl border border-zinc-100"
              >
                <h2 className="text-2xl sm:text-3xl font-black text-brand-black mb-4 sm:mb-6 flex items-center gap-3">
                  <HelpCircle className="text-brand-red" /> What is {title}?
                </h2>
                <p className="text-zinc-600 leading-relaxed text-base sm:text-lg">
                  {whatIs}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 sm:p-10 rounded-[24px] sm:rounded-[40px] shadow-xl border border-zinc-100"
              >
                <h2 className="text-2xl sm:text-3xl font-black text-brand-black mb-4 sm:mb-6 flex items-center gap-3">
                  <Users className="text-brand-red" /> Who is it for?
                </h2>
                <ul className="space-y-3 sm:space-y-4">
                  {whoIsItFor.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 sm:gap-4">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-brand-red/10 text-brand-red rounded-full flex items-center justify-center shrink-0 mt-1">
                        <Check size={12} className="sm:w-[14px] sm:h-[14px]" />
                      </div>
                      <span className="text-zinc-600 text-sm sm:text-base font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Right Column: Requirements & Image */}
            <div className="space-y-8 sm:space-y-12">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-brand-black text-white p-6 sm:p-10 rounded-[24px] sm:rounded-[40px] shadow-2xl"
              >
                <h2 className="text-2xl sm:text-3xl font-black mb-6 sm:mb-8 flex items-center gap-3">
                  <Check className="text-brand-red" /> Key Requirements
                </h2>
                <ul className="space-y-4 sm:space-y-6">
                  {keyRequirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-3 sm:gap-4">
                      <div className="w-2 h-2 bg-brand-red rounded-full mt-2 sm:mt-2.5 shrink-0" />
                      <span className="text-white/80 font-medium text-base sm:text-lg leading-relaxed">{req}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative rounded-[24px] sm:rounded-[40px] overflow-hidden shadow-2xl h-[250px] sm:h-[400px]"
              >
                <img 
                  src={heroImage} 
                  alt={title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 to-transparent" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Fees Table */}
        <section className="container mx-auto px-4 sm:px-6 mt-12 sm:mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl font-black text-brand-black mb-6 sm:mb-8 flex items-center gap-3">
              <PoundSterling className="text-brand-red" /> Fees
            </h2>
            <div className="overflow-x-auto rounded-2xl sm:rounded-3xl border border-zinc-200 shadow-xl bg-white">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-brand-red text-white">
                    <th className="py-4 sm:py-6 px-6 sm:px-8 font-black uppercase tracking-wider text-xs sm:text-sm">Fee Type</th>
                    <th className="py-4 sm:py-6 px-6 sm:px-8 font-black uppercase tracking-wider text-xs sm:text-sm">Amount</th>
                    <th className="py-4 sm:py-6 px-6 sm:px-8 font-black uppercase tracking-wider text-xs sm:text-sm">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  {fees.map((fee, idx) => (
                    <tr key={idx} className="hover:bg-zinc-50 transition-colors">
                      <td className="py-4 sm:py-6 px-6 sm:px-8 font-bold text-brand-black text-sm sm:text-base">{fee.type}</td>
                      <td className="py-4 sm:py-6 px-6 sm:px-8 font-black text-brand-red text-sm sm:text-base">{fee.amount}</td>
                      <td className="py-4 sm:py-6 px-6 sm:px-8 text-zinc-500 font-medium text-sm sm:text-base">{fee.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </section>

        {/* Processing Time & Help */}
        <section className="container mx-auto px-4 sm:px-6 mt-12 sm:mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 sm:p-10 rounded-[24px] sm:rounded-[40px] shadow-xl border border-zinc-100"
            >
              <h2 className="text-xl sm:text-2xl font-black text-brand-black mb-4 sm:mb-6 flex items-center gap-3">
                <Clock className="text-brand-red" /> Processing Time
              </h2>
              {Array.isArray(processingTime) ? (
                <ul className="space-y-2 sm:space-y-3">
                  {processingTime.map((time, idx) => (
                    <li key={idx} className="flex items-center gap-2 sm:gap-3 text-zinc-600 text-sm sm:text-base font-medium">
                      <div className="w-1.5 h-1.5 bg-brand-red rounded-full" />
                      {time}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-zinc-600 text-sm sm:text-base font-medium leading-relaxed">
                  {processingTime}
                </p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-brand-red/5 p-6 sm:p-10 rounded-[24px] sm:rounded-[40px] border border-brand-red/10"
            >
              <h2 className="text-xl sm:text-2xl font-black text-brand-red mb-4 sm:mb-6">How We Can Help</h2>
              <p className="text-brand-black text-sm sm:text-base font-medium leading-relaxed">
                {howWeHelp}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <BookingSection 
          title="Ready to Start Your Application?"
          description={`Our expert immigration lawyers at Shams Britvisa Lawyers are here to ensure your ${title} application is successful. Book your consultation today.`}
          className="mt-24"
        />
      </main>

      <Footer />
    </div>
  );
};
