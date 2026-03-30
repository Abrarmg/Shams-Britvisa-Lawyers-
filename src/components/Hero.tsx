import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, PhoneCall, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    image: 'https://i.ibb.co/jZMB1ZwJ/image.png',
    heading: 'ILR 3 Years',
    subheadline: 'Innovator Founder Visa',
    description: 'Fast-track your UK settlement. Obtain Indefinite Leave to Remain in just 3 years with our expert Innovator Founder guidance.',
    link: '/innovator-founder'
  },
  {
    image: 'https://i.ibb.co/N6qsdJbK/image.png',
    heading: 'Global Talent Visa',
    subheadline: 'For Leaders & Future Leaders',
    description: 'Exceptional talent in science, engineering, humanities, medicine, digital technology, or arts. Settle in the UK in 3 years.',
    link: '/global-talent-visa'
  },
  {
    image: 'https://i.ibb.co/rfGcX9wr/image.png',
    heading: 'Self-Sponsorship',
    subheadline: 'Be Your Own Sponsor',
    description: 'Take control of your UK immigration. Set up your own company and sponsor your own Skilled Worker visa.',
    link: '/self-sponsorship'
  },
  {
    image: 'https://i.ibb.co/RGhHzx0S/Untitled-design-2.png',
    heading: 'Our Main Office',
    subheadline: 'Based in Manchester',
    description: 'Visit us at our Manchester office for professional, face-to-face immigration advice tailored to your needs.',
    link: '/#location'
  }
];

import { IAABadge } from './IAABadge';

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative min-h-screen flex items-center pt-[120px] sm:pt-[156px] pb-16 overflow-hidden bg-brand-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 z-0"
        >
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].heading}
            className="w-full h-full object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 md:left-8 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-brand-red transition-all group"
      >
        <ChevronLeft size={20} className="md:hidden group-hover:-translate-x-0.5 transition-transform" />
        <ChevronLeft size={24} className="hidden md:block group-hover:-translate-x-0.5 transition-transform" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 md:right-8 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-brand-red transition-all group"
      >
        <ChevronRight size={20} className="md:hidden group-hover:translate-x-0.5 transition-transform" />
        <ChevronRight size={24} className="hidden md:block group-hover:translate-x-0.5 transition-transform" />
      </button>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block bg-brand-red text-white px-5 py-1.5 rounded-lg font-bold text-base mb-6 shadow-lg"
              >
                {slides[currentSlide].heading}
              </motion.div>
              
              <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-display font-extrabold text-white leading-[1.15] mb-6 md:mb-8 drop-shadow-md">
                {slides[currentSlide].subheadline}
              </h1>

              <p className="text-base md:text-xl text-white/90 mb-8 md:mb-12 max-w-2xl leading-relaxed font-medium">
                {slides[currentSlide].description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to={slides[currentSlide].link}
                  className="group bg-brand-red text-white w-full sm:w-auto px-10 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-red-700 transition-all shadow-xl shadow-red-500/20"
                >
                  Learn More
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/booking"
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white w-full sm:w-auto px-10 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-white/20 transition-all"
                >
                  Book Consultation
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Pagination Dots */}
          <div className="flex gap-3 mt-16">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${currentSlide === i ? 'w-12 bg-brand-red' : 'w-3 bg-white/30 hover:bg-white/50'}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* IAA Verification Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 py-4 md:py-8 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 text-center">
          <div className="max-w-2xl">
            <motion.p 
              className="text-white font-bold text-[10px] sm:text-xs md:text-lg inline"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.03,
                  },
                },
              }}
            >
              {"This Immigration Law Firm is IAA Registered. Reg No. F202200117".split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.p>
            <motion.span 
              className="text-brand-red ml-2 inline-block font-bold text-[10px] sm:text-xs md:text-lg"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [1, 0.6, 1],
                scale: [1, 1.02, 1]
              }}
              transition={{ 
                opacity: { delay: 2, duration: 2, repeat: Infinity, ease: "easeInOut" },
                scale: { delay: 2, duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              Click on the Badge to Verify!
            </motion.span>
          </div>
          <IAABadge labelPosition="bottom" className="scale-75 md:scale-100" />
        </div>
      </div>
    </section>
  );
};

