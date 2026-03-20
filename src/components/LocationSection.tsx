import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock, Phone, Mail, Navigation } from 'lucide-react';

export const LocationSection = () => {
  return (
    <section className="py-12 sm:py-24 bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-red font-bold tracking-widest uppercase text-[10px] sm:text-sm mb-3 sm:mb-4 block"
          >
            Visit Our Office
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-4xl md:text-6xl font-display font-black text-brand-black mb-4 sm:mb-6"
          >
            Where to <span className="text-brand-red">Find Us</span>
          </motion.h2>
          <div className="w-12 sm:w-24 h-1 sm:h-1.5 bg-brand-red mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-stretch">
          {/* Image Card & Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 sm:gap-8"
          >
            <a href="https://ibb.co/sdTz9nLW" target="_blank" rel="noopener noreferrer" className="relative rounded-[20px] sm:rounded-[40px] overflow-hidden shadow-2xl group h-[250px] sm:h-[400px] block">
              <img 
                src="https://i.ibb.co/G4ZNQygH/image.png" 
                alt="Our Office" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 sm:p-6 rounded-xl sm:rounded-2xl">
                  <h3 className="text-white font-black text-lg sm:text-2xl mb-1 sm:mb-2">Manchester HQ</h3>
                  <p className="text-white/80 text-[10px] sm:text-sm font-medium">Our central hub for UK immigration excellence.</p>
                </div>
              </div>
            </a>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white p-5 sm:p-8 rounded-xl sm:rounded-3xl border border-zinc-100 shadow-sm flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-red/5 text-brand-red rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="font-black text-brand-black text-sm sm:text-base mb-0.5 sm:mb-1">Address</h4>
                  <p className="text-zinc-500 text-xs sm:text-sm font-medium">291 Slade Lane, Manchester, M19 2HR, UK</p>
                </div>
              </div>

              <div className="bg-white p-5 sm:p-8 rounded-xl sm:rounded-3xl border border-zinc-100 shadow-sm flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-red/5 text-brand-red rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="font-black text-brand-black text-sm sm:text-base mb-0.5 sm:mb-1">Hours</h4>
                  <p className="text-zinc-500 text-xs sm:text-sm font-medium">Mon - Fri: 9:00 AM - 5:30 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map Embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[20px] sm:rounded-[40px] overflow-hidden shadow-2xl border-2 sm:border-8 border-white min-h-[280px] sm:min-h-[500px]"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2376.543210!2d-2.198765!3d53.443210!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb17000000001%3A0x0!2zMjkxIFNsYWRlIExuLCBNYW5jaGVzdGVyIE0xOSAySFIsIFVLIQ!5e0!3m2!1sen!2suk!4v1709800000000!5m2!1sen!2suk" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
            <div className="absolute top-6 right-6">
              <a 
                href="https://maps.google.com/?q=291+Slade+Lane,+Manchester,+M19+2HR" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-brand-red text-white px-6 py-3 rounded-full font-black text-sm flex items-center gap-2 shadow-xl hover:bg-brand-black transition-all"
              >
                <Navigation size={16} />
                Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
