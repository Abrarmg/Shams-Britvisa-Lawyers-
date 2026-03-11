import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, PlayCircle, FileText, CheckSquare, 
  Infinity as InfinityIcon, Smartphone, MessageCircle, 
  ChevronDown, ArrowRight, Star, Play, User, Users 
} from 'lucide-react';
import { BookingSection } from '../components/BookingSection';
import { Link } from 'react-router-dom';

export default function Courses() {
  return (
    <div className="min-h-screen bg-white selection:bg-brand-red selection:text-white font-sans">
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden bg-[#0D0D0D]">
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
                Learning Platform
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-8xl font-display font-black text-white mb-8 leading-tight"
              >
                UK Immigration <br />
                <span className="text-brand-red">Courses</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                className="inline-block bg-white/5 backdrop-blur-xl border border-white/10 px-12 py-6 rounded-[32px] mb-12"
              >
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
                  COMING <span className="text-brand-red">SOON</span>
                </h2>
              </motion.div>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-white/70 font-medium leading-relaxed mb-12 max-w-2xl mx-auto"
              >
                We are building a comprehensive library of expert-led video courses to help you master your UK visa application. Get ready to learn, prepare, and apply with total confidence.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap justify-center gap-6"
              >
                <Link 
                  to="/booking"
                  className="bg-brand-red text-white px-10 py-5 rounded-full font-black text-lg hover:bg-red-700 transition-all shadow-2xl flex items-center gap-2"
                >
                  Book a Consultation Instead <ArrowRight size={20} />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Newsletter / Notification CTA */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto bg-brand-black rounded-[40px] p-12 text-center text-white relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-display font-black mb-6">Want to be notified?</h2>
                <p className="text-xl text-white/60 mb-10 max-w-xl mx-auto">
                  Leave your email below and we'll let you know the moment our courses go live.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 bg-white/10 border border-white/20 rounded-full px-8 py-4 outline-none focus:border-brand-red transition-all"
                  />
                  <button className="bg-brand-red text-white px-8 py-4 rounded-full font-black hover:bg-red-700 transition-all">
                    Notify Me
                  </button>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 rounded-full -mr-32 -mt-32 blur-3xl" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
