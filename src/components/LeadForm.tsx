import React, { useState } from 'react';
import { Send, User, Phone, Mail, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

export const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    question: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://services.leadconnectorhq.com/hooks/gEY2yP0FBNyOkcRGfJCm/webhook-trigger/6708523a-7b48-43f2-8808-93a1cfd845b4', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Thank you for your query. Our experts will contact you shortly.');
        setFormData({ name: '', phone: '', email: '', question: '' });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your query. Please try again later or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 bg-zinc-50 border-b border-zinc-200 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-red/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span 
              variants={itemVariants}
              className="text-brand-red font-bold tracking-widest uppercase text-sm mb-4 block"
            >
              Get Expert Advice
            </motion.span>
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-display font-black text-brand-black mb-6 leading-tight"
            >
              Have an Immigration <br />
              <span className="text-brand-red">Query?</span>
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-lg text-zinc-600 mb-10 max-w-lg leading-relaxed"
            >
              Fill out the form below and one of our IAA regulated experts will get back to you within 24 hours with professional guidance.
            </motion.p>
            
            <div className="space-y-8">
              {[
                { 
                  icon: <Send size={20} />, 
                  title: 'Fast Response', 
                  desc: 'We aim to reply to all queries within 24 hours.' 
                },
                { 
                  icon: <User size={20} />, 
                  title: 'Expert Review', 
                  desc: 'Your query is reviewed by IAA regulated lawyers.' 
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  variants={itemVariants}
                  className="flex items-center gap-5 group"
                >
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-brand-red border border-zinc-100 group-hover:scale-110 group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-bold text-brand-black text-lg">{item.title}</p>
                    <p className="text-zinc-500">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white p-8 md:p-12 rounded-[40px] shadow-[0_30px_60px_rgba(0,0,0,0.08)] border border-zinc-100 relative"
          >
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-red/10 rounded-full blur-2xl pointer-events-none" />
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 ml-1">Full Name</label>
                  <motion.div 
                    whileFocus={{ scale: 1.01 }}
                    className="relative"
                  >
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                    <input
                      required
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-brand-red focus:ring-4 focus:ring-brand-red/5 transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </motion.div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 ml-1">Phone Number</label>
                  <motion.div 
                    whileFocus={{ scale: 1.01 }}
                    className="relative"
                  >
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                    <input
                      required
                      type="tel"
                      placeholder="+44 7776 668557"
                      className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-brand-red focus:ring-4 focus:ring-brand-red/5 transition-all"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </motion.div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 ml-1">Email Address</label>
                <motion.div 
                  whileFocus={{ scale: 1.01 }}
                  className="relative"
                >
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                  <input
                    required
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-brand-red focus:ring-4 focus:ring-brand-red/5 transition-all"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </motion.div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 ml-1">Your Question</label>
                <motion.div 
                  whileFocus={{ scale: 1.01 }}
                  className="relative"
                >
                  <MessageSquare className="absolute left-4 top-4 text-zinc-400" size={18} />
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your immigration needs..."
                    className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-brand-red focus:ring-4 focus:ring-brand-red/5 transition-all resize-none"
                    value={formData.question}
                    onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                  />
                </motion.div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-brand-red text-white py-5 rounded-2xl font-black text-lg hover:bg-brand-black transition-all shadow-xl shadow-red-500/20 hover:shadow-brand-black/20 flex items-center justify-center gap-3 group ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Immigration Query'}
                {!isSubmitting && <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </motion.button>
              
              <p className="text-[10px] text-center text-zinc-400 uppercase tracking-widest font-bold">
                By submitting, you agree to our privacy policy.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
