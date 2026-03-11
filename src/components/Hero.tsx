import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, PhoneCall, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1920',
    heading: 'Shams Britvisa Lawyers',
    subheadline: 'Staying Ahead of UK Immigration Changes',
    description: 'At Shams Britvisa Lawyers Ltd, we stay up to date so you don’t have to, ensuring your visa application is always compliant and accurate.',
    link: '/booking'
  },
  {
    image: 'https://i.ibb.co/pHczb72/image.png',
    heading: 'Innovator Founder',
    subheadline: 'Secure Your UK Future with ILR in Just 3 Years',
    description: 'Strategic advice for entrepreneurs and innovators looking to establish their business in the UK and fast-track their settlement route.',
    link: '/innovator-founder'
  },
  {
    image: 'https://i.ibb.co/rfGcX9wr/image.png',
    heading: 'Self-Sponsorship',
    subheadline: 'Take Control: Set Up Your Company & Sponsor Yourself',
    description: 'Expert legal guidance on the self-sponsorship route, allowing you to run your own UK business while securing your professional visa.',
    link: '/self-sponsorship'
  }
];

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
    <section className="relative min-h-screen flex items-center pt-[156px] pb-16 overflow-hidden bg-brand-black">
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
        className="absolute left-4 md:left-8 z-30 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-brand-red transition-all group"
      >
        <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 md:right-8 z-30 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-brand-red transition-all group"
      >
        <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
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
              
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-display font-extrabold text-white leading-[1.15] mb-8 drop-shadow-md">
                {slides[currentSlide].subheadline}
              </h1>

              <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl leading-relaxed font-medium">
                {slides[currentSlide].description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to={slides[currentSlide].link}
                  className="group bg-brand-red text-white px-10 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-red-700 transition-all shadow-xl shadow-red-500/20"
                >
                  Learn More
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/booking"
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-white/20 transition-all"
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
    </section>
  );
};

