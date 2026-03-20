import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Is your firm registered and regulated?",
    answer: (
      <div className="space-y-2">
        <p>Yes. We are registered with the Immigration Advice Authority (IAA).</p>
        <p className="font-bold text-brand-red">Registration Number: F202200117</p>
      </div>
    )
  },
  {
    question: "How can I verify your organisation?",
    answer: (
      <p>You can verify our registration either by clicking on our regulator logo (which will take you directly to the official regulator website) or by searching for us under “Find an immigration adviser” on GOV.UK. You are in safe hands.</p>
    )
  },
  {
    question: "Where are you located?",
    answer: (
      <div className="space-y-2">
        <p>Our office is based at:</p>
        <p className="font-bold">291 Slade Lane, Manchester, M19 2HR, United Kingdom</p>
        <p>We serve clients across the UK and globally.</p>
      </div>
    )
  },
  {
    question: "What are your main areas of expertise?",
    answer: (
      <div className="space-y-4">
        <p>We provide advice across all areas of UK immigration law. However, we have particularly strong expertise in business immigration, including:</p>
        <ul className="grid md:grid-cols-2 gap-2">
          {['Indefinite Leave to Remain (ILR)', 'Sponsor Licence applications', 'Self-Sponsorship strategies', 'Innovator Founder Visa', 'Scale-up sponsor licence', 'Temporary Worker licences', 'Skilled Worker applications'].map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-sm">
              <div className="w-1.5 h-1.5 bg-brand-red rounded-full" />
              {item}
            </li>
          ))}
        </ul>
        <p>We also handle family visas, nationality applications, and mainstream immigration matters.</p>
      </div>
    )
  },
  {
    question: "Do you handle complex or asylum/human rights cases?",
    answer: (
      <div className="space-y-3">
        <p>Currently, our firm is registered at IAA Level 1, and we deal with Level 1 immigration matters. This covers most mainstream immigration applications.</p>
        <p>We do not currently deal with complex matters such as asylum claims, human rights cases, or court appeals.</p>
        <p>As we upgrade our firm’s registration level in the future, we intend to expand our services accordingly. In the meantime, if you contact us regarding a complex matter, we can signpost you to the appropriate regulated adviser free of charge.</p>
      </div>
    )
  },
  {
    question: "Do you assist with sponsor licence compliance?",
    answer: (
      <p>Yes. We have strong expertise in sponsor licence applications and ongoing compliance matters.</p>
    )
  },
  {
    question: "Do you provide business immigration advice for companies?",
    answer: (
      <p>Yes. We provide strategic immigration advice for UK businesses, directors, entrepreneurs, and sponsors.</p>
    )
  },
  {
    question: "Do you assist with appeals and Administrative Reviews?",
    answer: (
      <p>We do not deal with court appeals. However, we assist with Administrative Review applications, excluding cases refused on deception grounds.</p>
    )
  },
  {
    question: "What other services do you provide?",
    answer: (
      <ul className="space-y-2">
        {[
          'Educational webinars on Self-Sponsorship and Innovator Founder routes',
          'Document checking and application review services',
          'Paid immigration guidance eBooks',
          'Strategy sessions for entrepreneurs and business founders'
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 bg-brand-red rounded-full mt-2 shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    )
  },
  {
    question: "What is your success rate?",
    answer: (
      <p>We maintain a high success rate across our immigration services. Each case depends on individual circumstances and compliance with Immigration Rules.</p>
    )
  },
  {
    question: "Are your costs affordable?",
    answer: (
      <p>Yes. Our fees are transparent, affordable, and clearly explained from the outset. We also offer flexible instalment options in suitable cases.</p>
    )
  },
  {
    question: "Is the consultation free?",
    answer: (
      <div className="space-y-3">
        <p>We offer a short initial call to understand your matter. For detailed legal advice, we recommend booking a formal consultation:</p>
        <ul className="space-y-2 font-bold text-brand-red">
          <li>• £50 – Phone / Zoom Consultation (up to 30 minutes)</li>
          <li>• £150 – Face-to-Face Consultation (up to 1 hour at our Manchester office)</li>
        </ul>
      </div>
    )
  },
  {
    question: "Are consultation fees refunded?",
    answer: (
      <p>Yes. Consultation fees are fully refunded if you formally instruct us to proceed with your case.</p>
    )
  }
];

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
  key?: number | string;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
  return (
    <div className={`border-b border-zinc-100 transition-all duration-300 ${isOpen ? 'bg-zinc-50/50' : ''}`}>
      <button
        onClick={onClick}
        className="w-full py-5 sm:py-6 px-4 flex items-center justify-between text-left group min-h-[48px]"
      >
        <span className={`text-base sm:text-lg font-bold transition-colors ${isOpen ? 'text-brand-red' : 'text-brand-black group-hover:text-brand-red'}`}>
          {question}
        </span>
        <div className={`shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-red' : 'text-zinc-400'}`}>
          <ChevronDown size={20} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-5 sm:pb-6 text-zinc-600 text-sm sm:text-base leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-12 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-brand-red/10 text-brand-red px-4 py-2 rounded-full font-black uppercase tracking-widest text-[10px] sm:text-xs mb-3 sm:mb-4"
          >
            <HelpCircle size={14} />
            Common Questions
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-4xl md:text-5xl font-display font-black text-brand-black mb-4 sm:mb-6"
          >
            Frequently Asked <span className="text-brand-red">Questions</span>
          </motion.h2>
          <p className="text-zinc-500 text-sm sm:text-base max-w-2xl mx-auto">
            Everything you need to know about our firm, our services, and how we can help you with your UK immigration journey.
          </p>
        </div>

        <div className="bg-white rounded-[20px] sm:rounded-[32px] border border-zinc-100 shadow-sm overflow-hidden">
          {faqs.map((faq, idx) => (
            <FAQItem
              key={idx}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === idx}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-zinc-500 mb-6">Still have questions? We're here to help.</p>
          <a
            href="tel:03301338857"
            className="inline-flex items-center gap-2 text-brand-red font-black hover:underline"
          >
            Call us directly at 0330 133 8857
          </a>
        </motion.div>
      </div>
    </section>
  );
};
