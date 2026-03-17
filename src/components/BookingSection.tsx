import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BookingWidget } from './BookingWidget';
import { Video, Building2 } from 'lucide-react';

interface BookingSectionProps {
  title?: string;
  description?: string;
  id?: string;
  className?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ 
  title = "Book Your Consultation", 
  description = "Get clear, honest advice from a regulated UK immigration adviser. Choose your consultation type and book your preferred time slot instantly.",
  id = "booking",
  className = ""
}) => {
  const [consultationType, setConsultationType] = useState<'online' | 'office'>('online');

  const onlineSrc = "https://api.leadconnectorhq.com/widget/booking/ejeBFhqWhG5QIqP3QMqz";
  const onlineId = "ejeBFhqWhG5QIqP3QMqz_1772903795792";
  
  const officeSrc = "https://api.leadconnectorhq.com/widget/booking/5Z8SM75j6H7WIVpuWepC";
  const officeId = "5Z8SM75j6H7WIVpuWepC_1773167176398";

  return (
    <section id={id} className={`py-16 sm:py-32 relative overflow-hidden ${className}`}>
      {/* Background Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-red/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-red/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Static Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-black rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 md:p-16 text-center text-white mb-12 sm:mb-16 shadow-2xl relative overflow-hidden border border-white/5"
          >
            <div className="relative z-10">
              <span className="inline-block bg-brand-red text-white px-5 sm:px-6 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] mb-6 sm:mb-8 shadow-lg shadow-brand-red/20">
                Book Consultation
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-black mb-6 sm:mb-8 leading-tight tracking-tight">
                {title.split(' ').map((word, i) => (
                  <span key={i} className={word.toLowerCase() === 'consultation' || word.toLowerCase() === 'help' || word.toLowerCase() === 'future' ? 'text-brand-red' : ''}>
                    {word}{' '}
                  </span>
                ))}
              </h2>
              <p className="text-base sm:text-xl text-white/60 max-w-2xl mx-auto font-medium leading-relaxed">
                {description}
              </p>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-red/10 rounded-full -mr-48 -mt-48 blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-red/5 rounded-full -ml-48 -mb-48 blur-[80px]" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            {/* Selector */}
            <div className="flex p-1 bg-zinc-100 rounded-2xl w-full max-w-md mx-auto shadow-inner">
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

            <div className="bg-white rounded-[2rem] sm:rounded-[3.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] border border-zinc-100 p-1 sm:p-2 md:p-8 relative">
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-brand-red/5 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-brand-red/5 rounded-full blur-[80px] pointer-events-none" />
              <BookingWidget 
                src={consultationType === 'online' ? onlineSrc : officeSrc}
                id={consultationType === 'online' ? onlineId : officeId}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
