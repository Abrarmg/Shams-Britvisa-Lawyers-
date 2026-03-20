import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { motion } from 'motion/react';
import { 
  MessageSquare, 
  Calendar, 
  Target, 
  FileText, 
  Send, 
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { BookingSection } from '../components/BookingSection';

const steps = [
  {
    number: "1",
    title: "Initial Contact – Brief Discussion",
    icon: <MessageSquare className="w-8 h-8" />,
    description: "You contact us via WhatsApp, phone, or email and briefly explain your immigration issue.",
    details: [
      "We assess whether your matter can be addressed quickly or whether it requires a detailed consultation.",
      "If your case involves complexity, previous refusals, risks, or long-term planning, we will advise you to book a full consultation."
    ]
  },
  {
    number: "2",
    title: "Detailed Consultation",
    icon: <Calendar className="w-8 h-8" />,
    description: "We offer two consultation options: Phone/Zoom (£50) or Face-to-Face (£150).",
    details: [
      "During this session, we carefully review your immigration history, documents, refusals (if any), risks, and long-term goals in detail.",
      "Consultation fees are fully refunded if you formally instruct us to proceed with your case."
    ]
  },
  {
    number: "3",
    title: "Strategic Action Plan",
    icon: <Target className="w-8 h-8" />,
    description: "Following the consultation, we provide a clear path forward.",
    details: [
      "A clear legal action plan",
      "A tailored document checklist",
      "Risk assessment (where applicable)",
      "Advice on timelines and next steps"
    ]
  },
  {
    number: "4",
    title: "Document Preparation & Drafting",
    icon: <FileText className="w-8 h-8" />,
    description: "Once formally instructed, we handle the heavy lifting of your application.",
    details: [
      "Prepare and draft your application and send it to you so you can double check",
      "Structure and review supporting evidence",
      "Draft detailed legal representations with Home Office",
      "Ensure all documents meet UKVI evidential and procedural requirements"
    ]
  },
  {
    number: "5",
    title: "Submission & Management",
    icon: <Send className="w-8 h-8" />,
    description: "We manage the technical process so you avoid errors.",
    details: [
      "Submit the application on your behalf",
      "Upload supporting documents to the UKVI portal",
      "Book biometric appointments with TLScontact or VFS Global",
      "Ensure full compliance with Immigration Rules and Home Office guidance"
    ]
  },
  {
    number: "6",
    title: "Post-Submission Support",
    icon: <ShieldCheck className="w-8 h-8" />,
    description: "We remain your dedicated point of contact after submission.",
    details: [
      "We monitor progress and respond to UKVI correspondence if required.",
      "We continue advising you until a final decision is received."
    ]
  }
];

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <Navbar />
      
      <main className="pt-24 sm:pt-32 pb-12 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-20">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl md:text-7xl font-display font-extrabold text-brand-black mb-4 sm:mb-6"
            >
              How It Works
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg sm:text-2xl text-zinc-500 font-medium"
            >
              Simple. Strategic. Forensic.
            </motion.p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[24px] sm:rounded-[40px] p-6 sm:p-12 shadow-sm border border-zinc-100 relative overflow-hidden group"
              >
                <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-start relative z-10">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-brand-red/5 rounded-2xl sm:rounded-3xl flex items-center justify-center text-brand-red shrink-0 group-hover:scale-110 transition-transform duration-500">
                    {React.cloneElement(step.icon as React.ReactElement<any>, { className: "w-6 h-6 sm:w-8 sm:h-8" })}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <span className="text-brand-red font-display font-black text-3xl sm:text-4xl opacity-20">
                        {step.number}
                      </span>
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-brand-black">
                        {step.title}
                      </h2>
                    </div>
                    
                    <p className="text-base sm:text-xl text-zinc-600 mb-4 sm:mb-6 font-medium">
                      {step.description}
                    </p>
                    
                    <ul className="space-y-2 sm:space-y-3">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3 text-zinc-500 text-sm sm:text-base">
                          <div className="w-1.5 h-1.5 bg-brand-red rounded-full mt-2 shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-zinc-50 rounded-full -mr-32 -mt-32 blur-3xl opacity-50 group-hover:bg-brand-red/5 transition-colors duration-500" />
              </motion.div>
            ))}
          </div>

          {/* Booking Section */}
          <BookingSection 
            title="Ready to get started?"
            description="Book your consultation today and let us handle your UK immigration journey with precision."
            className="bg-zinc-50"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
