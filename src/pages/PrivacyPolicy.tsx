import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { motion } from 'motion/react';
import { Shield } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white selection:bg-brand-red selection:text-white">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <section className="relative py-24 overflow-hidden bg-[#0D0D0D]">
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://i.ibb.co/Gv796yD2/image.png" 
              alt="Background" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-brand-red/10 text-brand-red px-6 py-2 rounded-full font-bold uppercase tracking-widest text-sm mb-8"
            >
              <Shield size={16} />
              Privacy Protection
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-black text-white mb-8"
            >
              Privacy <span className="text-brand-red">Policy</span>
            </motion.h1>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg prose-zinc max-w-none">
              <p className="text-xl text-zinc-600 mb-12 leading-relaxed">
                At Shams Britvisa Lawyers, we are committed to protecting your privacy and ensuring the security of your personal information. This policy outlines how we collect, use, and safeguard your data.
              </p>

              <h2 className="text-3xl font-black text-brand-black mt-12 mb-6">1. Information We Collect</h2>
              <p className="text-zinc-600 mb-8">
                We collect information that you provide directly to us when you use our services, including your name, contact information, and any details related to your immigration case.
              </p>

              <h2 className="text-3xl font-black text-brand-black mt-12 mb-6">2. How We Use Your Information</h2>
              <p className="text-zinc-600 mb-8">
                Your information is used solely for the purpose of providing immigration legal services, communicating with you about your case, and improving our service offerings.
              </p>

              <h2 className="text-3xl font-black text-brand-black mt-12 mb-6">3. Data Security</h2>
              <p className="text-zinc-600 mb-8">
                We implement industry-standard security measures to protect your data from unauthorized access, disclosure, or alteration.
              </p>

              <h2 className="text-3xl font-black text-brand-black mt-12 mb-6">4. Third-Party Disclosure</h2>
              <p className="text-zinc-600 mb-8">
                We do not sell or trade your personal information to outside parties. This does not include trusted third parties who assist us in operating our website or servicing you, so long as those parties agree to keep this information confidential.
              </p>

              <h2 className="text-3xl font-black text-brand-black mt-12 mb-6">5. Your Rights</h2>
              <p className="text-zinc-600 mb-8">
                You have the right to access, correct, or request the deletion of your personal information at any time. Please contact us if you wish to exercise these rights.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
