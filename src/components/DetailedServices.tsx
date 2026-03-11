import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  image: string;
}

interface ServiceCategory {
  category: string;
  services: Service[];
}

const serviceData: ServiceCategory[] = [
  {
    category: 'Business & Corporate Immigration',
    services: [
      {
        title: 'Sponsor Licence for UK Businesses',
        description: 'We provide A-Z assistance—from initial company formation (if required) to HR systems setup and UKVI compliance. We support start-ups, SMEs, and large businesses in securing their sponsor licences to hire overseas talent.',
        image: 'https://i.ibb.co/fVVkx1s7/image.png'
      },
      {
        title: 'Skilled Worker Visa',
        description: 'Comprehensive support for initial applications, extensions, and switching inside the UK. We also provide ongoing employer and employee compliance guidance to protect your sponsor status.',
        image: 'https://i.ibb.co/ynYmqCF5/image.png'
      },
      {
        title: 'Global Business Mobility (GBM) Routes',
        description: 'Strategic advice on transferring overseas staff to the UK. We handle all five GBM routes: Senior or Specialist Worker, Graduate Trainee, UK Expansion Worker, Service Supplier, and Secondment Worker.',
        image: 'https://i.ibb.co/DfVdjZ8Y/image.png'
      },
      {
        title: 'Temporary Worker Licences',
        description: 'We assist UK employers in recruiting overseas talent for short-term roles, including Creative Worker and Charity Worker Sponsor Licences, along with Certificate of Sponsorship (CoS) issuance.',
        image: 'https://i.ibb.co/QvZxBKgz/image.png'
      }
    ]
  },
  {
    category: 'Entrepreneurs, Investors & Self-Sponsorship',
    services: [
      {
        title: 'Self-Sponsorship Route (Strategy-Based)',
        description: 'Looking to start or run your own business in the UK? We offer an end-to-end, compliance-led approach to business setup, combining a Sponsor Licence with the Skilled Worker route to create a long-term pathway to settlement.',
        image: 'https://i.ibb.co/Vck4DQpd/image.png'
      },
      {
        title: 'Innovator Founder Visa',
        description: 'Designed for individuals establishing an innovative business in the UK. We provide comprehensive support, including endorsing body strategy, business plan formulation, financial forecasts, and visa application assistance.',
        image: 'https://i.ibb.co/27ZvtXtW/image.png'
      },
      {
        title: 'Global Talent & High-Potential Routes',
        description: 'Step-by-step guidance for the Global Talent Visa (including endorsement strategy) and the High Potential Individual (HPI) Visa eligibility assessments.',
        image: 'https://i.ibb.co/zW1XzHgb/image.png'
      }
    ]
  },
  {
    category: 'Personal, Family & Settlement Visas',
    services: [
      {
        title: 'Family & Spouse Visas',
        description: 'Uniting families in the UK. We manage initial applications and extensions for spouses, partners, dependants, and family members.',
        image: 'https://i.ibb.co/vxxphgn8/image.png'
      },
      {
        title: 'Settlement (Indefinite Leave to Remain)',
        description: 'Strategic planning for ILR under the 5-year and 10-year routes, allowing you to live, work, and study in the UK indefinitely.',
        image: 'https://i.ibb.co/gbFp58S9/image.png'
      },
      {
        title: 'British Citizenship',
        description: 'Full application support for adult naturalisation and the registration of minors as British Citizens.',
        image: 'https://i.ibb.co/S4dZ6zcS/image.png'
      }
    ]
  },
  {
    category: 'Refusals, Reviews & Legal Remedies',
    services: [
      {
        title: 'Administrative Review & Appeals',
        description: 'If your visa has been refused, do not lose hope. We provide in-depth refusal analysis, strategic advice on evidential and procedural issues, and formulate robust re-application strategies. Get a professional review before reapplying.',
        image: 'https://i.ibb.co/fz7yKX80/image.png'
      }
    ]
  }
];

const allServices = serviceData.flatMap(cat => cat.services);

export const DetailedServices = () => {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-black text-brand-black mb-6"
          >
            Our Premium <span className="text-brand-red">Visa & Immigration Services</span>
          </motion.h2>
          <div className="w-24 h-1.5 bg-brand-red mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group relative h-[480px] rounded-[40px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/70 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <h4 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-brand-red transition-colors">
                  {service.title}
                </h4>
                <p className="text-white/70 text-sm leading-relaxed mb-8 line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                  {service.description}
                </p>
                
                <motion.a 
                  href="/services" 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-brand-red text-white py-4 px-8 rounded-2xl font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-red-500/20 hover:bg-white hover:text-brand-red transition-all group/btn"
                >
                  Learn More
                  <ArrowUpRight size={18} className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
