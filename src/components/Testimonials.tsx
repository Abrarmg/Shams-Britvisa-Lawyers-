import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, ExternalLink } from 'lucide-react';

const testimonials = [
  {
    name: "Ibrahim",
    role: "Naturalisation",
    content: "Thank you very much for your hard work! We will definitely recommend your excellent service”. “Just a brief note to say Thank you so much for your help in the progression of my wife's application for Naturalisation So much appreciated.” I thought it will be stressful and a long process but luckily you made it so easy for us the application approved in 10 weeks. Thanks Again",
    rating: 5
  },
  {
    name: "Kamil Safi",
    role: "Immigration Advice",
    content: "Shams britvisa helped me with my visa application and made the whole process so easy. They were knowledgeable, responsive, and kept everything clear and straightforward. No hidden costs, and my application was approved quickly. Would definitely recommend to anyone needing immigration help.",
    rating: 5
  },
  {
    name: "Nouman Ahmad Khattak",
    role: "Spouse Visa",
    content: "I had an excellent experience working with this lawyer for my wife’s visa application. The entire process was handled very smoothly and professionally. Thanks to their expertise and efficient handling, my wife received her visa in just two weeks, which was much quicker than we expected. Communication was clear throughout, and we always felt well-informed and supported. Highly recommended.",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-red font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Client Success Stories
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-black text-brand-black mb-6"
          >
            What Our <span className="text-brand-red">Clients Say</span>
          </motion.h2>
          <div className="w-24 h-1.5 bg-brand-red mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 rounded-[40px] shadow-xl border border-zinc-100 relative group hover:border-brand-red/20 transition-all"
            >
              <Quote className="absolute top-8 right-8 text-brand-red/10 group-hover:text-brand-red/20 transition-colors" size={48} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-zinc-600 font-medium leading-relaxed mb-8 relative z-10">
                "{testimonial.content}"
              </p>

              <div>
                <p className="font-black text-brand-black text-lg">{testimonial.name}</p>
                <p className="text-brand-red text-sm font-bold uppercase tracking-wider">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a 
            href="https://share.google/nmdBv77qvd63htL6G"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-brand-black text-white px-10 py-5 rounded-full font-black text-lg hover:bg-brand-red transition-all shadow-2xl group"
          >
            View All Reviews on Google
            <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
