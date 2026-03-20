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
    <section className="py-12 sm:py-24 bg-[#F9FAFB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE: CONTENT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <motion.span 
                variants={itemVariants}
                className="text-brand-red font-bold tracking-[0.2em] uppercase text-xs mb-6 block"
              >
                GET EXPERT ADVICE
              </motion.span>
              <motion.h2 
                variants={itemVariants}
                className="text-3xl sm:text-5xl md:text-7xl font-display font-black text-brand-black mb-6 sm:mb-8 leading-[1.1]"
              >
                Request a <br className="hidden sm:block" />
                <span className="text-brand-red">CallBack</span>
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-base sm:text-lg text-zinc-500 max-w-lg leading-relaxed mb-8 sm:mb-12"
              >
                Fill out the form below and one of our IAA regulated experts will get back to you within 24 hours with professional guidance.
              </motion.p>
            </div>

            <div className="space-y-4 sm:space-y-6">
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
                  className="flex items-center gap-4 sm:gap-6 group"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-xl sm:rounded-2xl shadow-sm flex items-center justify-center text-brand-red border border-zinc-100 group-hover:scale-105 transition-all duration-300 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-bold text-brand-black text-lg sm:text-xl">{item.title}</p>
                    <p className="text-zinc-500 text-sm sm:text-base">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE: FORM CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white p-6 sm:p-10 md:p-16 rounded-[32px] sm:rounded-[60px] shadow-[0_40px_100px_rgba(0,0,0,0.05)] border border-zinc-50 relative"
          >
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-400 ml-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                    <input
                      required
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-[#F9FAFB] border-none rounded-2xl py-5 pl-14 pr-6 outline-none focus:ring-2 focus:ring-brand-red/10 transition-all text-brand-black font-medium"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-400 ml-1">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                    <input
                      required
                      type="tel"
                      placeholder="+44 7776 668557"
                      className="w-full bg-[#F9FAFB] border-none rounded-2xl py-5 pl-14 pr-6 outline-none focus:ring-2 focus:ring-brand-red/10 transition-all text-brand-black font-medium"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-400 ml-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                  <input
                    required
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-[#F9FAFB] border-none rounded-2xl py-5 pl-14 pr-6 outline-none focus:ring-2 focus:ring-brand-red/10 transition-all text-brand-black font-medium"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-400 ml-1">Your Question</label>
                <div className="relative">
                  <MessageSquare className="absolute left-5 top-6 text-zinc-400" size={18} />
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us about your immigration needs..."
                    className="w-full bg-[#F9FAFB] border-none rounded-2xl py-5 pl-14 pr-6 outline-none focus:ring-2 focus:ring-brand-red/10 transition-all text-brand-black font-medium resize-none"
                    value={formData.question}
                    onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                  />
                </div>
              </div>

              <div className="pt-4">
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-brand-red text-white py-5 sm:py-6 rounded-xl sm:rounded-2xl font-black text-base sm:text-lg hover:bg-[#E31E24] transition-all shadow-[0_20px_40px_rgba(227,30,36,0.2)] flex items-center justify-center gap-4 group min-h-[44px] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Submitting...' : 'Request a CallBack'}
                  {!isSubmitting && <Send size={20} className="transition-transform group-hover:translate-x-1" />}
                </motion.button>
                
                <p className="text-[10px] text-center text-zinc-400 uppercase tracking-[0.2em] font-bold mt-8">
                  By submitting, you agree to our privacy policy.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
