import React from 'react';
import { motion } from 'motion/react';
import { Info, FileCheck, Files, MessageSquare, History, ShieldAlert } from 'lucide-react';

export const ClientRequirements = () => {
  const requirements = [
    {
      id: '01',
      title: 'Clear & Honest Information',
      description: 'During your consultation, you must provide full, honest and accurate details of your immigration history. This includes disclosing any previous refusals, overstays, breaches, or Home Office issues.',
      icon: <Info size={24} />
    },
    {
      id: '02',
      title: 'Genuine & Proper Documents',
      description: 'All documents that you provide us with, must be genuine and honestly prepared. We will NOT proceed with your case if we suspect that you intend to provide forged, false, or misleading documents for the purpose of deceiving the Home Office.',
      icon: <FileCheck size={24} />
    },
    {
      id: '03',
      title: 'Required Supporting Evidence',
      description: 'You must provide the requested documents in clear and readable format, in line with the checklist provided.',
      icon: <Files size={24} />
    },
    {
      id: '04',
      title: 'Availability & Communication',
      description: 'We request that you are available for consultations when booked for you and respond promptly to requests for information. Communication must take place strictly during office hours only. For urgent matters, you may contact us via email.',
      icon: <MessageSquare size={24} />
    },
    {
      id: '05',
      title: 'Previous Home Office Correspondence',
      description: 'Please provide any prior Home Office letters, refusal notices, emails, or decision documents relevant to your case.',
      icon: <History size={24} />
    }
  ];

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
            Our Expectations
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-black text-brand-black mb-6"
          >
            What We <span className="text-brand-red">Need From You</span>
          </motion.h2>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            To provide proper and professional advice, we require full cooperation and transparency from our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {requirements.map((req, idx) => (
            <motion.div
              key={req.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-[32px] border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-brand-red/5 text-brand-red rounded-2xl flex items-center justify-center group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                  {req.icon}
                </div>
                <span className="text-brand-red/20 font-black text-3xl group-hover:text-brand-red/40 transition-colors">
                  {req.id}
                </span>
              </div>
              <h3 className="text-xl font-bold text-brand-black mb-4">{req.title}</h3>
              <p className="text-zinc-500 leading-relaxed">
                {req.description}
              </p>
            </motion.div>
          ))}
          
          {/* Professional Integrity Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-1 bg-brand-black p-8 rounded-[32px] flex flex-col justify-center items-center text-center text-white relative overflow-hidden"
          >
            <div className="relative z-10">
              <ShieldAlert size={48} className="text-brand-red mb-6 mx-auto" />
              <h3 className="text-2xl font-bold mb-4">Professional Integrity</h3>
              <p className="text-white/70 leading-relaxed">
                We operate with professionalism and integrity — and we expect full honesty and cooperation from our clients.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/10 rounded-full -mr-16 -mt-16 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
