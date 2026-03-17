import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { FeaturePromo } from '../components/FeaturePromo';
import { InstallmentBanner } from '../components/InstallmentBanner';
import { LeadForm } from '../components/LeadForm';
import { EligibilityCheck } from '../components/EligibilityCheck';
import { CredentialsSection } from '../components/CredentialsSection';
import { ClientRequirements } from '../components/ClientRequirements';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { CertificationsBar } from '../components/CertificationsBar';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';
import { LocationSection } from '../components/LocationSection';
import { Footer } from '../components/Footer';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="min-h-screen selection:bg-brand-red selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <FeaturePromo />
        <InstallmentBanner />
        
        <EligibilityCheck />

        <LeadForm />
        
        <div id="credentials">
          <CredentialsSection />
        </div>

        <ClientRequirements />

        <Testimonials />

        <div id="why-choose-us">
          <WhyChooseUs />
          <CertificationsBar />
        </div>

        <FAQ />

        <div id="location">
          <LocationSection />
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="py-12 bg-white"
        >
          <div className="container mx-auto px-6">
            <div className="bg-brand-red rounded-[40px] p-12 text-center text-white relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-display font-extrabold mb-6">Ready to Start Your UK Journey?</h2>
                <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                  Don't let complex immigration laws hold you back. Get professional advice at an affordable price today.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button 
                    onClick={() => window.location.href = '/booking'}
                    className="bg-white text-brand-red px-10 py-4 rounded-full font-bold text-lg hover:bg-zinc-100 transition-all shadow-xl"
                  >
                    Book Consultation
                  </button>
                  <a href="tel:03301338857" className="bg-brand-black text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-zinc-900 transition-all">
                    Call Us
                  </a>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl" />
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
