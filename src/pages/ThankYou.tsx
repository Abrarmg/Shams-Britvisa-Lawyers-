import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { motion } from 'motion/react';
import { CheckCircle2, Mail, Phone, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand-red selection:text-white">
      <Navbar />

      <main className="pt-32 pb-20">
        <section className="relative py-24 overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-green-500/10"
              >
                <CheckCircle2 size={48} />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-6xl font-display font-black text-brand-black mb-6"
              >
                Booking <span className="text-brand-red">Confirmed!</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-zinc-50 p-8 md:p-12 rounded-[3rem] border border-zinc-100 text-left space-y-6 mb-12"
              >
                <p className="text-brand-red font-bold text-lg leading-relaxed">
                  Thank you for booking your consultation with us. Your consultation will be conducted by an experienced immigration lawyer at the time you have selected.
                </p>
                
                <div className="space-y-4">
                  <p className="text-zinc-700 font-medium leading-relaxed">
                    For online consultations, please let us know your preferred platform; WhatsApp Call, Zoom, or Microsoft Teams — by emailing <a href="mailto:info@shamsbvlawyers.com" className="text-brand-red hover:underline font-bold">info@shamsbvlawyers.com</a> or calling <a href="tel:03301338857" className="text-brand-red hover:underline font-bold">0330 133 8857</a>, and we will arrange the meeting link for you.
                  </p>
                  
                  <p className="text-zinc-700 font-medium leading-relaxed">
                    If you need to change the date or time of your consultation, or if you have any questions beforehand, please do not hesitate to contact us and we will be happy to assist.
                  </p>
                </div>

                <p className="text-brand-black font-black text-xl pt-4 border-t border-zinc-200">
                  Thank you again for choosing Shams Britvisa Lawyers Ltd. We look forward to assisting you.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <Link
                  to="/"
                  className="bg-brand-black text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-zinc-900 transition-all shadow-xl"
                >
                  Return Home
                </Link>
                <Link
                  to="/courses"
                  className="bg-brand-red text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-all shadow-xl shadow-red-500/20"
                >
                  Explore Courses
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Background Accents */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl -ml-48 -mb-48" />
        </section>
      </main>

      <Footer />
    </div>
  );
}
