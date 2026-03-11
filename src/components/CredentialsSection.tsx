import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Star, Award } from 'lucide-react';

export const CredentialsSection = () => {
  const credentials = [
    {
      title: 'Regulated & Compliant',
      description: 'Officially regulated by the IAA in Level 1 Immigration category (Reg No: F202200117).',
      icon: <ShieldCheck size={32} />
    },
    {
      title: 'Highly Rated',
      description: 'Proudly maintaining a 5.0 ★★★★★ rating based on Google Reviews from our satisfied clients.',
      icon: <Star size={32} />
    },
    {
      title: 'Proven Success',
      description: 'Over 1000+ consultations handled, guiding applicants safely through complex Home Office procedures.',
      icon: <Award size={32} />
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-black text-brand-black mb-6 leading-tight">
              Trusted UK Immigration Lawyers & <br />
              <span className="text-brand-red">Regulated Advisers</span>
            </h2>
            <p className="text-xl text-zinc-600 leading-relaxed">
              When your future or business operations are on the line, you need absolute certainty. Our legal precision is backed by established credentials and real-world results.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {credentials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col gap-6 p-10 rounded-[32px] bg-zinc-50 border border-zinc-100 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 group"
            >
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-red group-hover:text-white transition-all duration-300 text-brand-red">
                {item.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-brand-black mb-3">{item.title}</h3>
                <p className="text-zinc-500 leading-relaxed text-lg">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
