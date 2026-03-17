import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { motion } from 'motion/react';
import { AlertCircle } from 'lucide-react';

export default function LegalDisclaimer() {
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
              <AlertCircle size={16} />
              Legal Notice
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-black text-white mb-8"
            >
              Legal <span className="text-brand-red">Disclaimer</span>
            </motion.h1>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg prose-zinc max-w-none">
              <p className="text-xl text-zinc-600 mb-12 leading-relaxed">
                The information provided on this website is intended solely for general informational purposes and should not be construed as legal advice. It does not serve as a complete or definitive statement of immigration law and may not be relied upon as such. While we strive to ensure the accuracy of the content at the time of publication, we make no representations or warranties, express or implied, about the accuracy, completeness, or reliability of the immigration information provided. Shams Britvisa Lawyers Ltd assumes no responsibility for any errors or omissions.
              </p>

              <h2 className="text-3xl font-black text-brand-black mt-12 mb-6">Not Legal Advice</h2>
              <p className="text-zinc-600 mb-8">
                The content of this website is not a substitute for professional legal advice. We strongly recommend that you seek qualified legal immigration advisor either with us or other qualified immigration lawyers. This could be by paying the correct fees before taking any action based on the information found here. Immigration laws and policies may change, and we cannot guarantee that the information provided will always reflect the most current legal developments. As such, we disclaim any responsibility for reliance on outdated or incorrect information.
              </p>

              <h2 className="text-3xl font-black text-brand-black mt-12 mb-6">No Client-Lawyer Relationship</h2>
              <p className="text-zinc-600 mb-8">
                Visiting this website, reading our content, or relying on the information contained here does not create a client-lawyer relationship between the user and Shams Britvisa Lawyers Ltd. A formal relationship is only established through direct consultation and engagement with our firm following the signing of the client care letter.
              </p>

              <h2 className="text-3xl font-black text-brand-black mt-12 mb-6">Accuracy of Information</h2>
              <p className="text-zinc-600 mb-8">
                We work diligently to provide accurate and up-to-date information, but immigration laws and regulations are subject to change. The website may not always reflect these changes immediately due to delays in updating content. Therefore, no guarantees are made as to the timeliness or completeness of the information presented.
              </p>

              <h2 className="text-3xl font-black text-brand-black mt-12 mb-6">Web Content and Development</h2>
              <p className="text-zinc-600 mb-8">
                Although every effort has been taken to ensure that the content on this site is accurate, Shams Britvisa Lawyers Ltd and the website developers cannot be held responsible for any outdated information or inaccuracies that may occur. The content is provided “as is” and without warranty of any kind, either express or implied.
              </p>

              <h2 className="text-3xl font-black text-brand-black mt-12 mb-6">Contact Us for Up-to-Date Legal Guidance</h2>
              <p className="text-zinc-600 mb-8">
                Before fully relying on the information provided on our website, you may wish to contact Shams Britvisa Lawyers Ltd or any other experts for up-to-date advice. You can reach us at 0330 133 8857 or by emailing info@shamsbvlawyers.com. Additionally, you can request a call back or book a detailed consultation with our immigration experts. Please note that consultations may be payable.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
