import React from 'react';
import { motion } from 'motion/react';

export const CertificationsBar = () => {
  const logos = [
    { 
      src: "https://i.ibb.co/W4wZZgD1/Untitled-design-3.png", 
      alt: "ICO Logo",
      className: "h-12 sm:h-18" 
    },
    { 
      src: "https://i.ibb.co/VPt2xXW/IAA-Logo.png", 
      alt: "IAA Logo",
      className: "h-16 sm:h-28",
      href: "https://home.oisc.gov.uk/digital_badges/verification.html?111105115099+109101109098101114098097100103101+100101102097117108116046115118103+104116116112115058047047119119119046115104097109115098118108097119121101114115046099111109047"
    },
    { 
      src: "https://i.ibb.co/8Dc4nr8L/image.png", 
      alt: "Certification Logo",
      className: "h-12 sm:h-18" 
    },
  ];

  // Duplicate logos for seamless marquee
  const marqueeLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

  return (
    <div className="bg-zinc-900 py-8 sm:py-12 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 sm:mb-12">
        <h2 className="text-white font-bold text-lg sm:text-3xl tracking-tight text-center">
          Our Certifications & Accreditations
        </h2>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <motion.div 
          className="flex whitespace-nowrap gap-12 sm:gap-32 items-center"
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
              {logo.href ? (
                <a href={logo.href} target="_blank" rel="noopener noreferrer">
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className={`${logo.className} w-auto object-contain transition-all duration-500 hover:scale-110`}
                    referrerPolicy="no-referrer"
                  />
                </a>
              ) : (
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className={`${logo.className} w-auto object-contain transition-all duration-500 hover:scale-110`}
                  referrerPolicy="no-referrer"
                />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
