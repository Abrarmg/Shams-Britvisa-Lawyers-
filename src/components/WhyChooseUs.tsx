import React from 'react';
import { motion } from 'motion/react';

export const WhyChooseUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  } as const;

  return (
    <section className="py-16 sm:py-24 bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-brand-black mb-6 leading-tight">
              Why Choose <span className="text-brand-red">Shams Britvisa Lawyers?</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl sm:text-2xl font-bold text-brand-black mb-8 leading-relaxed">
              We are your positioning sweet spot: Regulated UK immigration lawyers who combine legal precision with real-world immigrant experience.
            </motion.p>
            <motion.div variants={itemVariants} className="space-y-6 text-base sm:text-lg text-zinc-600 leading-relaxed">
              <p>
                Unlike large, global corporate firms that can feel expensive and impersonal, we provide a human, immigrant-led approach tailored to your specific goals. We avoid the generic, sales-heavy tactics used by high-volume agencies.
              </p>
              <p>
                Instead, our Director and Founder, <span className="font-bold text-brand-black">Shams Sherzad (LLB (Hons), IAA Advisor & CIlex AP)</span>, and our expert team focus on niche expertise, empathy, transparency, and trust. We don't just process paperwork; we build lawful, strategic pathways for your future.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="aspect-square rounded-[40px] sm:rounded-[60px] overflow-hidden shadow-2xl relative z-10 cursor-pointer"
            >
              <img 
                src="https://i.ibb.co/B2nfsGXf/image.png" 
                alt="Shams Sherzad - Founder" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 text-white">
                <p className="text-xl sm:text-2xl font-black mb-1">Shams Sherzad</p>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-white">LLB (Hons), IAA Advisor & CIlex AP</p>
              </div>
            </motion.div>
            
            {/* Decorative Elements with floating animation */}
            <motion.div 
              animate={{ 
                y: [0, -20, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute -top-10 -right-10 w-64 h-64 bg-brand-red/10 rounded-full blur-3xl -z-0" 
            />
            <motion.div 
              animate={{ 
                y: [0, 20, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-black/5 rounded-full blur-3xl -z-0" 
            />
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
              className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white p-8 rounded-3xl shadow-2xl z-20 border border-zinc-100 hidden md:block"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="text-4xl font-black text-brand-red">100%</div>
                <div className="text-xs font-bold uppercase tracking-widest text-zinc-500 text-center">Commitment to <br /> Your Success</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
