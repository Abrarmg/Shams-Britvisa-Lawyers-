import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { motion } from 'motion/react';
import { Calendar, CheckCircle2, Clock, Info, AlertCircle, FileText, Ban, GraduationCap, Briefcase, Wallet } from 'lucide-react';
import { BookingSection } from '../components/BookingSection';

export default function SeasonalWorkerVisa() {
  const eligibility = [
    "Be 18 or over at the time of application",
    "Hold a certificate of sponsorship reference number from your UK sponsor",
    "Have at least £1,270 in your bank account to show you can support yourself in the UK"
  ];

  const documents = [
    "Your certificate of sponsorship reference number, provided by your UK sponsor",
    "A valid passport or other document showing your identity and nationality",
    "Bank statements as evidence of at least £1,270 in personal savings (unless your sponsor is covering your costs)",
    "A certified translation of any documents that are not in English or Welsh — your passport is exempt from this requirement",
    "Any additional documents requested by the Home Office after your application is submitted"
  ];

  const canDo = [
    "Work in the job described in your certificate of sponsorship",
    "Study in the UK — note that some courses require an Academic Technology Approval Scheme certificate"
  ];

  const cannotDo = [
    "Take a permanent job",
    "Work in a second job or any role not listed on your certificate of sponsorship",
    "Access public funds",
    "Bring family members with you to the UK"
  ];

  const keyDates = [
    { label: "Poultry visa application deadline", value: "15 November each year" },
    { label: "Poultry work period", value: "2 October to 31 December" },
    { label: "Apply up to", value: "3 months before your start date" },
    { label: "Decision expected within", value: "3 weeks" },
    { label: "Enter the UK up to", value: "14 days before your start date" },
    { label: "Savings must be held for", value: "At least 28 consecutive days" }
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-brand-red selection:text-white">
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="container mx-auto px-6 mb-24">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block bg-brand-red/10 text-brand-red px-6 py-2 rounded-full font-black uppercase tracking-widest text-sm mb-6"
            >
              Temporary Work
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-7xl font-display font-black text-brand-black mb-8 leading-tight"
            >
              Seasonal Worker <span className="text-brand-red">Visa</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-zinc-600 font-medium leading-relaxed"
            >
              The Seasonal Worker visa allows you to come to the UK and work on a temporary basis in either horticulture or poultry. This visa has replaced the former Temporary Worker – Seasonal Worker visa (T5).
            </motion.p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="container mx-auto px-6 mb-24">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-50 p-10 rounded-[40px] border border-zinc-200">
              <div className="w-12 h-12 bg-brand-red text-white rounded-2xl flex items-center justify-center mb-6">
                <Briefcase size={24} />
              </div>
              <h2 className="text-2xl font-display font-black mb-4 text-brand-black uppercase">Horticulture</h2>
              <p className="text-zinc-600 leading-relaxed">
                Picking fruit, vegetables, or flowers for up to 6 months. You can apply at any time of year.
              </p>
            </div>
            <div className="bg-zinc-50 p-10 rounded-[40px] border border-zinc-200">
              <div className="w-12 h-12 bg-brand-red text-white rounded-2xl flex items-center justify-center mb-6">
                <Clock size={24} />
              </div>
              <h2 className="text-2xl font-display font-black mb-4 text-brand-black uppercase">Poultry</h2>
              <p className="text-zinc-600 leading-relaxed">
                Working in the poultry industry between 2 October and 31 December each year. You must apply by 15 November.
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto mt-8 p-8 bg-brand-black text-white rounded-[40px]">
            <div className="flex items-start gap-4">
              <Info className="text-brand-red shrink-0 mt-1" />
              <p className="text-lg leading-relaxed">
                You can apply for your visa up to 3 months before your start date. Decisions are usually received within 3 weeks. You may enter the UK up to 14 days before your job start date.
              </p>
            </div>
          </div>
        </section>

        {/* Eligibility Section */}
        <section className="container mx-auto px-6 mb-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-black mb-12 text-brand-black uppercase">Eligibility Requirements</h2>
            <div className="grid gap-6">
              {eligibility.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
                  <CheckCircle2 className="text-brand-red shrink-0 mt-1" size={24} />
                  <p className="text-lg font-bold text-brand-black">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 space-y-6 text-lg text-zinc-700 leading-relaxed">
              <p>
                Your savings must have been available for at least 28 consecutive days, and day 28 must fall within 31 days of your application date.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-2xl">
                <p className="text-amber-900 font-bold mb-2 flex items-center gap-2">
                  <AlertCircle size={20} /> Sponsor Maintenance:
                </p>
                <p className="text-amber-800 italic">
                  If your sponsor agrees to cover your costs during your first month in the UK (up to £1,270), you may not need to show personal savings. Your sponsor must confirm this in the "sponsor certifies maintenance" section on your certificate of sponsorship.
                </p>
              </div>
              <p>
                Your certificate of sponsorship is valid for 3 months from the date it is assigned to you and can only be used once. Your employer must ensure your job pays at least the minimum wage and follows UK rules on working hours.
              </p>
            </div>
          </div>
        </section>

        {/* Costs Section */}
        <section className="bg-brand-black py-24 text-white mb-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl font-display font-black mb-12 uppercase">Visa Costs</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-10 bg-white/5 rounded-[40px] border border-white/10">
                  <div className="text-brand-red text-5xl font-black mb-4">£319</div>
                  <div className="text-xl font-bold uppercase tracking-widest">Application Fee</div>
                </div>
                <div className="p-10 bg-white/5 rounded-[40px] border border-white/10">
                  <div className="text-brand-red text-5xl font-black mb-4">£1,270</div>
                  <div className="text-xl font-bold uppercase tracking-widest">Personal Savings</div>
                  <p className="text-white/50 mt-4 text-sm italic">Unless covered by sponsor</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Documents Section */}
        <section className="container mx-auto px-6 mb-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-black mb-12 text-brand-black uppercase">Documents Required</h2>
            <div className="grid gap-4">
              {documents.map((doc, idx) => (
                <div key={idx} className="flex items-center gap-4 p-6 bg-zinc-50 rounded-2xl border border-zinc-100 group hover:bg-brand-red hover:text-white transition-all duration-300">
                  <FileText className="shrink-0 group-hover:text-white text-brand-red" size={24} />
                  <p className="font-bold">{doc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Can and Cannot Do Section */}
        <section className="container mx-auto px-6 mb-24">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-display font-black mb-8 text-brand-black uppercase flex items-center gap-3">
                <CheckCircle2 className="text-emerald-500" /> You Can
              </h2>
              <ul className="space-y-4">
                {canDo.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-zinc-700 leading-relaxed">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-display font-black mb-8 text-brand-black uppercase flex items-center gap-3">
                <Ban className="text-brand-red" /> You Cannot
              </h2>
              <ul className="space-y-4">
                {cannotDo.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-zinc-700 leading-relaxed">
                    <div className="w-1.5 h-1.5 bg-brand-red rounded-full mt-2.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Key Dates Section */}
        <section className="container mx-auto px-6 mb-24">
          <div className="max-w-4xl mx-auto bg-zinc-50 p-12 rounded-[40px] border border-zinc-200">
            <h2 className="text-3xl font-display font-black mb-12 text-brand-black uppercase text-center">Key Dates at a Glance</h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {keyDates.map((date, idx) => (
                <div key={idx} className="border-b border-zinc-200 pb-4">
                  <div className="text-xs font-black text-brand-red uppercase tracking-widest mb-1">{date.label}</div>
                  <div className="text-lg font-bold text-brand-black">{date.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <BookingSection 
          title="Apply for Your Seasonal Worker Visa"
          description="Our expert immigration solicitors can help you with your Seasonal Worker visa application, ensuring all requirements are met for a successful outcome."
        />
      </main>

      <Footer />
    </div>
  );
}
