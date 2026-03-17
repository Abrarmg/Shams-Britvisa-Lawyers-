import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeatureCardProps {
  image: string;
  heading: string;
  subheadline: string;
  description: string;
  link?: string;
  key?: number;
}

const FeatureCard = ({ image, heading, subheadline, description, link }: FeatureCardProps) => {
  const CardContent = (
    <>
      <div className="h-48 sm:h-64 overflow-hidden relative">
        <img 
          src={image} 
          alt={heading} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      <div className="p-6 sm:p-8 flex flex-col flex-grow">
        <h3 className="text-brand-red font-black text-xl sm:text-2xl mb-2 uppercase tracking-tight">
          {heading}
        </h3>
        <h4 className="text-brand-black font-bold text-base sm:text-lg mb-4 leading-snug">
          {subheadline}
        </h4>
        <p className="text-zinc-600 text-sm sm:text-base mb-6 sm:mb-8 flex-grow leading-relaxed">
          {description}
        </p>
        <div className="flex items-center gap-2 text-brand-red font-black uppercase tracking-widest text-[10px] sm:text-xs hover:gap-3 transition-all group">
          Read More 
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </>
  );

  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-white rounded-[32px] overflow-hidden shadow-xl border border-zinc-100 flex flex-col h-full"
    >
      {link ? (
        <Link to={link} className="flex flex-col h-full">
          {CardContent}
        </Link>
      ) : (
        <div className="flex flex-col h-full">
          {CardContent}
        </div>
      )}
    </motion.div>
  );
};

export const FeaturePromo = () => {
  const features = [
    {
      image: 'https://i.ibb.co/pHczb72/image.png',
      heading: 'ILR IN 3 YEARS',
      subheadline: 'Move to the UK or Switch Inside the UK via Innovator Founder',
      description: 'Are you on PSW, Skilled Worker, or any UK visa? Or are you outside the UK and want to relocate by setting up your own business? Secure a potential route to Indefinite Leave to Remain in 3 years.',
      link: '/innovator-founder'
    },
    {
      image: 'https://i.ibb.co/KvzxwGh/image.png',
      heading: 'SELF-SPONSORSHIP ROUTE',
      subheadline: 'Set Up Your Own UK Company & Sponsor Yourself',
      description: 'On PSW or Skilled Worker? Or outside the UK and planning to move to the UK by launching your own business?',
      link: '/self-sponsorship'
    },
    {
      image: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=800',
      heading: 'GLOBAL TALENT VISA',
      subheadline: 'No Job Offer Required – Freedom to Work & Live in the UK',
      description: 'The most prestigious UK visa for leaders in academia, arts, and tech. Secure ILR in just 3 years with total professional freedom.',
      link: '/global-talent-visa'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
