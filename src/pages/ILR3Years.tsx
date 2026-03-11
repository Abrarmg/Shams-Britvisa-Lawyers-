import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  TrendingUp, 
  ArrowRight,
  Zap,
  Star,
  Award
} from 'lucide-react';
import { BookingSection } from '../components/BookingSection';
import { Link } from 'react-router-dom';

const ILR3Years = () => {
  return (
    <div className="min-h-screen bg-zinc-50 selection:bg-brand-red selection:text-white">
      <Navbar />
      
      <main className="pb-24">
        {/* Hero Section */}
        <section className="relative pt-40 pb-24 overflow-hidden mb-20">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1449156001935-d2863fb22690?auto=format&fit=crop&q=80&w=2000" 
              alt="UK Skyline" 
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
                  Fast-Track Settlement Pathway
                </span>
                <h1 className="text-5xl md:text-7xl font-display font-black text-brand-black mb-8 leading-tight">
                  ILR IN <span className="text-brand-red">3 YEARS</span>
                </h1>
                <p className="text-xl text-zinc-600 font-medium leading-relaxed max-w-3xl mx-auto">
                  Achieve Indefinite Leave to Remain (ILR) in just 3 years instead of the standard 5-year route. Discover the fast-track pathways to permanent UK residency.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Pathways */}
        <section className="container mx-auto px-6 mb-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-brand-black mb-6">Eligible Fast-Track Routes</h2>
              <p className="text-lg text-zinc-600 font-medium">Certain visa categories allow for accelerated settlement based on specific criteria.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-[40px] shadow-xl border border-zinc-100"
              >
                <div className="w-14 h-14 bg-brand-red/10 text-brand-red rounded-2xl flex items-center justify-center mb-6">
                  <Zap size={28} />
                </div>
                <h3 className="text-2xl font-black text-brand-black mb-4">Innovator Founder Route</h3>
                <p className="text-zinc-600 font-medium mb-6">
                  Entrepreneurs who meet specific growth, investment, or job creation targets can apply for ILR after just 3 years of residence.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 font-bold text-zinc-800"><CheckCircle2 className="text-brand-red" size={18} /> £50,000 investment (if required)</li>
                  <li className="flex items-center gap-3 font-bold text-zinc-800"><CheckCircle2 className="text-brand-red" size={18} /> Significant job creation</li>
                  <li className="flex items-center gap-3 font-bold text-zinc-800"><CheckCircle2 className="text-brand-red" size={18} /> Doubling of customer base</li>
                </ul>
                <Link to="/innovator-founder" className="text-brand-red font-black flex items-center gap-2 hover:gap-3 transition-all">
                  View Innovator Founder Details <ArrowRight size={18} />
                </Link>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-[40px] shadow-xl border border-zinc-100"
              >
                <div className="w-14 h-14 bg-brand-red/10 text-brand-red rounded-2xl flex items-center justify-center mb-6">
                  <Star size={28} />
                </div>
                <h3 className="text-2xl font-black text-brand-black mb-4">Global Talent Route</h3>
                <p className="text-zinc-600 font-medium mb-6">
                  Leaders or potential leaders in science, engineering, humanities, medicine, digital technology, or arts can qualify for 3-year settlement.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 font-bold text-zinc-800"><CheckCircle2 className="text-brand-red" size={18} /> Exceptional Talent endorsement</li>
                  <li className="flex items-center gap-3 font-bold text-zinc-800"><CheckCircle2 className="text-brand-red" size={18} /> Peer-reviewed research leaders</li>
                  <li className="flex items-center gap-3 font-bold text-zinc-800"><CheckCircle2 className="text-brand-red" size={18} /> Award-winning artists</li>
                </ul>
                <Link to="/visa-services" className="text-brand-red font-black flex items-center gap-2 hover:gap-3 transition-all">
                  Explore Global Talent <ArrowRight size={18} />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Requirements Grid */}
        <section className="bg-brand-black py-24 mb-24">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-black text-white mb-6">General ILR Requirements</h2>
                <p className="text-xl text-white/60">Even on a fast-track route, you must meet standard settlement criteria.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Lawful Residence",
                    desc: "Continuous residence in the UK for the required period with no more than 180 days absence in any 12 months.",
                    icon: <Clock />
                  },
                  {
                    title: "Knowledge of Life",
                    desc: "Passing the 'Life in the UK' test and meeting the English language requirements (B1 level or higher).",
                    icon: <Award />
                  },
                  {
                    title: "Good Character",
                    desc: "Meeting the suitability requirements, including a clean criminal record and no immigration breaches.",
                    icon: <ShieldCheck />
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[40px] text-white">
                    <div className="text-brand-red mb-6">{item.icon}</div>
                    <h3 className="text-2xl font-black mb-4">{item.title}</h3>
                    <p className="text-white/60 font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <BookingSection 
          title="Ready to Fast-Track Your Future?"
          description="Our expert lawyers in Manchester specialize in accelerated settlement routes. Let us assess your eligibility for ILR in 3 years."
          className="bg-zinc-50"
        />
      </main>

      <Footer />
    </div>
  );
};

export default ILR3Years;
