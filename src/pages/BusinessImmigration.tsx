import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { motion } from 'motion/react';
import { Briefcase, Rocket, Star, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BusinessImmigration() {
  const services = [
    {
      title: 'Corporate Immigration',
      description: 'Comprehensive solutions for businesses looking to hire international talent and manage sponsor licences.',
      link: '/corporate-immigration',
      icon: <Briefcase className="text-brand-red" size={32} />
    },
    {
      title: 'Innovator Founder Visa',
      description: 'For entrepreneurs with innovative, scalable business ideas endorsed by an approved body.',
      link: '/innovator-founder',
      icon: <Rocket className="text-brand-red" size={32} />
    },
    {
      title: 'High Potential Individual Visa',
      description: 'A route for graduates from top global universities to work in the UK without a job offer.',
      link: '/high-potential-individual-visa',
      icon: <Star className="text-brand-red" size={32} />
    },
    {
      title: 'Fast Track ILR',
      description: 'Accelerated pathways to Indefinite Leave to Remain for high-value migrants and innovators.',
      link: '/fast-track-ilr',
      icon: <Clock className="text-brand-red" size={32} />
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-50 selection:bg-brand-red selection:text-white">
      <Navbar />

      <main className="pt-32 pb-24">
        <section className="container mx-auto px-6 mb-24">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-display font-black text-brand-black mb-6 leading-tight"
            >
              Business <span className="text-brand-red">Immigration</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-zinc-600 font-medium leading-relaxed mb-12"
            >
              Strategic immigration solutions for businesses and entrepreneurs. We help you navigate the complexities of UK business visas to achieve your professional goals.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-16">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 rounded-[40px] shadow-xl border border-zinc-100 hover:shadow-2xl transition-all group"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h2 className="text-2xl font-black text-brand-black mb-4">{service.title}</h2>
                <p className="text-zinc-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <Link 
                  to={service.link}
                  className="inline-flex items-center gap-2 text-brand-red font-bold hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight size={20} />
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
