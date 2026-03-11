import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  ChevronDown,
  Video,
  Building2,
  MapPin,
  Star
} from 'lucide-react';
import { BookingWidget } from '../components/BookingWidget';

export default function Booking() {
  const [consultationType, setConsultationType] = useState<'online' | 'office'>('online');

  const onlineSrc = "https://api.leadconnectorhq.com/widget/booking/ejeBFhqWhG5QIqP3QMqz";
  const onlineId = "ejeBFhqWhG5QIqP3QMqz_1772903795792";
  
  const officeSrc = "https://api.leadconnectorhq.com/widget/booking/5Z8SM75j6H7WIVpuWepC";
  const officeId = "5Z8SM75j6H7WIVpuWepC_1773167176398";

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand-red selection:text-white">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-[80vh] flex items-center pt-32 pb-20 bg-[#0D0D0D] overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 opacity-30"
          style={{ 
            backgroundImage: 'url("https://i.ibb.co/Gv796yD2/image.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D]/80 to-transparent z-0" />
        
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-red/20 rounded-full blur-[120px] -mr-64 -mt-64 z-0" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-brand-red font-bold text-xs uppercase tracking-[0.3em] mb-6 block">SPEAK TO AN EXPERT</span>
              <h1 className="text-6xl md:text-8xl font-condensed font-extrabold leading-[0.9] mb-8 text-white">
                Book Your<br />
                <span className="text-brand-red">Immigration Consultation</span>
              </h1>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed mb-12">
                Get clear, honest advice from a regulated UK immigration adviser. Choose your consultation type and book your preferred time slot instantly.
              </p>

              <div className="flex flex-wrap gap-8 mb-16">
                {[
                  "Regulated by IAA",
                  "Same-day appointments available",
                  "Online & in-office options"
                ].map((badge, i) => (
                  <div key={i} className="flex items-center gap-3 text-white font-medium">
                    <div className="w-6 h-6 rounded-full bg-brand-red flex items-center justify-center">
                      <CheckCircle2 size={14} className="text-white" />
                    </div>
                    <span className="text-sm md:text-base">{badge}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bouncing Arrow */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 z-10"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* CONSULTATION EXPERIENCE HIGHLIGHT */}
      <section className="py-24 bg-zinc-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-brand-red font-bold text-xs uppercase tracking-[0.3em] mb-4 block"
              >
                Premium Experience
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-condensed font-black text-brand-black mb-6 uppercase tracking-tight"
              >
                Online <span className="text-brand-red">&</span> In-Person
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-zinc-500 max-w-2xl mx-auto font-medium"
              >
                Whether you're across the globe or just around the corner, we provide the same high-level strategic immigration advice.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Online Card */}
              <motion.div 
                onClick={() => {
                  setConsultationType('online');
                  document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`group relative p-10 rounded-[40px] shadow-xl border overflow-hidden transition-all duration-500 cursor-pointer ${
                  consultationType === 'online' 
                    ? 'bg-white border-brand-red ring-2 ring-brand-red/20' 
                    : 'bg-white border-zinc-100 hover:border-brand-red/20'
                }`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-brand-red/10 transition-colors" />
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 ${
                    consultationType === 'online'
                      ? 'bg-brand-red text-white scale-110'
                      : 'bg-brand-red/5 text-brand-red group-hover:scale-110 group-hover:bg-brand-red group-hover:text-white'
                  }`}>
                    <Video size={32} />
                  </div>
                  <h3 className="text-3xl font-condensed font-black text-brand-black mb-4 uppercase tracking-tight">Online Consultation</h3>
                  <p className="text-zinc-600 font-medium leading-relaxed mb-8">
                    Connect with our experts from anywhere in the world via Zoom, Microsoft Teams, or WhatsApp Video. Perfect for busy professionals and overseas applicants.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {['Secure Video Link', 'Screen Sharing for Documents', 'Digital Action Plan Provided', 'Global Timezone Flexibility'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-bold text-zinc-500">
                        <div className="w-1.5 h-1.5 bg-brand-red rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className={`inline-flex items-center gap-2 font-bold text-sm uppercase tracking-widest transition-colors ${
                    consultationType === 'online' ? 'text-brand-red' : 'text-zinc-400 group-hover:text-brand-red'
                  }`}>
                    {consultationType === 'online' ? 'Selected' : 'Select Online'}
                    <ChevronDown size={14} className={consultationType === 'online' ? 'rotate-0' : '-rotate-90'} />
                  </div>
                </div>
              </motion.div>

              {/* In-Person Card */}
              <motion.div 
                onClick={() => {
                  setConsultationType('office');
                  document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`group relative p-10 rounded-[40px] shadow-xl overflow-hidden transition-all duration-500 cursor-pointer border ${
                  consultationType === 'office'
                    ? 'bg-brand-black border-brand-red ring-2 ring-brand-red/20'
                    : 'bg-brand-black border-transparent hover:shadow-brand-red/5'
                }`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-white/10 transition-colors" />
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 ${
                    consultationType === 'office'
                      ? 'bg-brand-red text-white scale-110'
                      : 'bg-white/5 text-white group-hover:scale-110 group-hover:bg-brand-red'
                  }`}>
                    <MapPin size={32} />
                  </div>
                  <h3 className="text-3xl font-condensed font-black text-white mb-4 uppercase tracking-tight">In-Person Meeting</h3>
                  <p className="text-white/60 font-medium leading-relaxed mb-8">
                    Visit our modern offices in Manchester for a face-to-face session. Ideal for complex cases requiring physical document review and detailed discussion.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {['Private Consultation Suite', 'Document Scanning Service', 'Central Manchester Location', 'Immediate Legal Guidance'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-bold text-white/40">
                        <div className="w-1.5 h-1.5 bg-brand-red rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className={`inline-flex items-center gap-2 font-bold text-sm uppercase tracking-widest transition-colors ${
                    consultationType === 'office' ? 'text-brand-red' : 'text-white/20 group-hover:text-brand-red'
                  }`}>
                    {consultationType === 'office' ? 'Selected' : 'Select In-Person'}
                    <ChevronDown size={14} className={consultationType === 'office' ? 'rotate-0' : '-rotate-90'} />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING INTERFACE */}
      <section id="booking-section" className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="max-w-[1100px] mx-auto">
            <div className="grid lg:grid-cols-12 gap-16">
              
              {/* LEFT SIDE: INFO (4 cols) */}
              <div className="lg:col-span-4 space-y-12">
                <div>
                  <h3 className="text-2xl font-condensed font-black text-brand-black mb-6 uppercase tracking-tight">Why Consult With Us?</h3>
                  <ul className="space-y-4">
                    {[
                      { title: "IAA Regulated", desc: "Fully qualified and regulated legal advice." },
                      { title: "Strategic Planning", desc: "We don't just fill forms; we build winning strategies." },
                      { title: "High Success Rate", desc: "Thousands of successful applications processed." }
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4">
                        <div className="mt-1">
                          <CheckCircle2 className="text-brand-red" size={18} />
                        </div>
                        <div>
                          <h5 className="font-bold text-brand-black text-sm">{item.title}</h5>
                          <p className="text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100">
                  <h4 className="font-bold text-brand-black mb-4">Consultation Fees</h4>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-6">
                    Our fees are transparent and fixed. The consultation fee is deductible from our full representation service if you choose to instruct us.
                  </p>
                  <div className="flex items-center gap-3 text-brand-red font-bold text-sm">
                    <ShieldCheck size={18} />
                    <span>Secure Payment via Stripe</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-brand-black mb-2 text-sm uppercase tracking-widest">Need Fast Help?</h4>
                  <p className="text-sm text-zinc-500 mb-4">Call our emergency hotline for immediate assistance with refusals.</p>
                  <a href="tel:+447776668557" className="text-xl font-black text-brand-red hover:text-brand-black transition-colors">
                    +44 7776 668557
                  </a>
                </div>
              </div>

              {/* RIGHT SIDE: BOOKING WIDGET (8 cols) */}
              <div className="lg:col-span-8">
                <div className="flex flex-col gap-8">
                  {/* Selector */}
                  <div className="flex p-1 bg-zinc-100 rounded-2xl w-full max-w-md mx-auto">
                    <button
                      onClick={() => setConsultationType('online')}
                      className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-sm font-bold transition-all duration-300 ${
                        consultationType === 'online'
                          ? 'bg-white text-brand-red shadow-sm'
                          : 'text-zinc-500 hover:text-brand-black'
                      }`}
                    >
                      <Video size={18} />
                      Online
                    </button>
                    <button
                      onClick={() => setConsultationType('office')}
                      className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-sm font-bold transition-all duration-300 ${
                        consultationType === 'office'
                          ? 'bg-white text-brand-red shadow-sm'
                          : 'text-zinc-500 hover:text-brand-black'
                      }`}
                    >
                      <Building2 size={18} />
                      In-Office
                    </button>
                  </div>

                  <motion.div 
                    key={consultationType}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-zinc-100 p-4 md:p-10 relative"
                  >
                    <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />
                    <BookingWidget 
                      src={consultationType === 'online' ? onlineSrc : officeSrc}
                      id={consultationType === 'online' ? onlineId : officeId}
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
