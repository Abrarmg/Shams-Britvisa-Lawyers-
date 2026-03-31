import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';
import { ShieldCheck, ExternalLink } from 'lucide-react';

export default function IAAVerification() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-red/10 text-brand-red mb-6">
                <ShieldCheck size={20} />
                <span className="text-sm font-bold uppercase tracking-widest">Official Verification</span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold text-brand-black mb-6">IAA Digital Verification</h1>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
                Verify our official registration with the New Zealand Immigration Advisers Authority (IAA). 
                We are committed to providing professional and regulated immigration advice.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-zinc-50 rounded-3xl p-8 sm:p-12 border border-zinc-100">
              <div className="flex flex-col items-center justify-center">
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-zinc-100 w-full max-w-[300px]">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 text-center mb-4">IAA Regulated</p>
                  {/* Start of Digital Badge code */}
                  <div style={{ width: '100%', maxWidth: '200px', margin: '0 auto' }}>
                    <div style={{ position: 'relative', paddingBottom: '152%', height: 'auto', overflow: 'hidden' }}>
                      <iframe 
                        id="myFrame" 
                        src="https://cdn2.yoshki.com/badgeframe?10" 
                        style={{ overflow: 'hidden', border: '0px', margin: '0px', padding: '0px', backgroundColor: 'transparent', top: '0px', left: '0px', width: '100%', height: '100%', position: 'absolute' }}
                        title="IAA Digital Badge"
                        referrerPolicy="no-referrer"
                      ></iframe>
                    </div>
                  </div>
                  {/* End of Digital Badge code */}
                  <p className="text-xs text-zinc-500 text-center mt-6 italic">Click the badge to verify our credentials on the official IAA register.</p>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-brand-black mb-4">Why Verification Matters</h3>
                  <p className="text-zinc-600 leading-relaxed">
                    The Immigration Advisers Authority (IAA) was set up to promote and protect the interests of people receiving New Zealand immigration advice. 
                    Using a licensed adviser ensures you receive competent advice from a professional who is required to follow a Code of Conduct.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="text-brand-red" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-black">Consumer Protection</h4>
                      <p className="text-sm text-zinc-500">Licensed advisers must be honest, professional, and diligent.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="text-brand-red" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-black">Professional Standards</h4>
                      <p className="text-sm text-zinc-500">Advisers must follow the Licensed Immigration Advisers Code of Conduct.</p>
                    </div>
                  </div>
                </div>

                <a 
                  href="https://portal.immigrationadviceauthority.gov.uk/s/adviser-register" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-brand-red font-bold hover:gap-3 transition-all"
                >
                  View Official Register <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
