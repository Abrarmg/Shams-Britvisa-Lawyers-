import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export const InstallmentBanner = () => {
  return (
    <section className="bg-black py-12 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/installments" className="block">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-center items-center cursor-pointer group"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white text-center leading-tight group-hover:text-zinc-200 transition-colors">
              Pay in <span className="text-brand-red group-hover:text-red-500 transition-colors">Installment</span> Option Available
            </h2>
          </motion.div>
        </Link>
      </div>
    </section>
  );
};
