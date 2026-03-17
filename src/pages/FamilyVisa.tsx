import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { motion } from 'motion/react';
import { Heart, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FamilyVisa() {
  const services = [
    {
      title: 'Spouse Visa',
      description: 'Join your partner in the UK. We provide expert guidance on meeting financial and relationship requirements.',
      link: '/spouse-visa',
      icon: <Heart className="text-brand-red" size={32} />
    },
    {
      title: 'Fiancé Visa',
      description: 'Come to the UK to get married or enter into a civil partnership with your partner.',
      link: '/fiance-visa',
      icon: <Users className="text-brand-red" size={32} />
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
              Family <span className="text-brand-red">Visas</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-zinc-600 font-medium leading-relaxed mb-12"
            >
              Bringing families together in the UK. Our dedicated lawyers help you navigate the complex family visa requirements with compassion and expertise.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-16">
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
