import React from 'react';
import { motion } from 'motion/react';

export const CertificationsBar = () => {
  const logos = [
    { 
      src: "https://i.ibb.co/W4wZZgD1/Untitled-design-3.png", 
      alt: "ICO Logo",
      className: "h-10 sm:h-14" 
    },
    { 
      src: "https://i.ibb.co/VPt2xXW/IAA-Logo.png", 
      alt: "IAA Logo",
      className: "h-14 sm:h-20" 
    },
    { 
      src: "https://i.ibb.co/8Dc4nr8L/image.png", 
      alt: "Certification Logo",
      className: "h-10 sm:h-14" 
    },
  ];

  // Duplicate logos for seamless marquee
  const marqueeLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

  return (
    <div className="bg-zinc-900 py-12 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-white font-bold text-xl sm:text-3xl tracking-tight text-center">
          Our Certifications & Accreditations
        </h2>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <motion.div 
          className="flex whitespace-nowrap gap-12 sm:gap-24 items-center"
          animate={{
            x: ["-50%", "0%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {marqueeLogos.map((logo, idx) => (
            <div key={idx} className="flex-shrink-0 px-4">
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className={`${logo.className} w-auto object-contain transition-all duration-500 hover:scale-110`}
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
