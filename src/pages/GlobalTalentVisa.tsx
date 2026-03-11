import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  Zap, 
  Globe, 
  Users,
  Briefcase,
  TrendingUp,
  ChevronRight
} from 'lucide-react';
import { BookingSection } from '../components/BookingSection';

export default function GlobalTalentVisa() {
  const benefits = [
    "ILR in 3 or 5 years (depending on route)",
    "No job offers or sponsor required",
    "Work for any employer, freelance, or run a business",
    "Freedom to change jobs",
    "Bring dependants (spouse & children)"
  ];

  const stages = [
    {
      title: "Stage 1 – Eligibility Assessment",
      timeline: "Up to 1 week",
      items: [
        "Free CV review to check basic eligibility",
        "Determine the correct endorsement pathway",
        "Assess Exceptional Talent or Exceptional Promise"
      ],
      optional: "Detailed zoom consultation to discuss further steps (£50) - Refundable if you proceed with us"
    },
    {
      title: "Stage 2 – Evidence Strategy & Preparation",
      timeline: "Approx. 2–4 weeks",
      description: "If your CV and consultation show you are a strong Global Talent candidate, we proceed with full preparation.",
      items: [
        "Mapping evidence against endorsement criteria",
        "Identifying strongest achievements",
        "Structuring the evidence portfolio",
        "Guidance on up to 10 pieces of evidence",
        "Guidance on 3 recommendation letters"
      ]
    },
    {
      title: "Stage 3 – Full Endorsement Application",
      timeline: "Included in Stage 2 timeline",
      items: [
        "Personal statement drafting",
        "Evidence portfolio preparation",
        "Recommendation letter guidance",
        "Document formatting & compliance checks",
        "Final draft shared with you for approval"
      ],
      important: [
        "Our success rate is high, but endorsement cannot be guaranteed",
        "Client must review and approve the application before submission"
      ]
    },
    {
      title: "Stage 4 – Endorsement Submission",
      timeline: "4–8 weeks for decision",
      description: "Application submitted to the relevant endorsing body.",
      fee: "Endorsement fee: £561"
    },
    {
      title: "Stage 5 – Visa Application",
      timeline: "Final Stage",
      description: "Once endorsement is granted, we proceed with the visa application stage.",
      items: [
        "Visa application preparation",
        "Document review",
        "Immigration history checks"
      ],
      fees: [
        "£205 visa fee per applicant",
        "Immigration Health Surcharge: £1,035 per year per applicant"
      ],
      goodwill: "Visa application prepared free for the main applicant (Dependants may incur separate legal fees.)"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand-red selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-brand-black overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=1920" 
            alt="Global Talent"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/80 via-brand-black to-brand-black z-0" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-brand-red text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                Exceptional Talent Route
              </span>
              <h1 className="text-4xl md:text-6xl font-display font-black text-white mb-8 leading-tight">
                UK Global Talent <span className="text-brand-red">Visa</span>
              </h1>
              <p className="text-xl text-white/70 mb-12 leading-relaxed">
                The most prestigious UK visa for leaders or potential leaders in academia, research, arts, and digital technology. No job offer required.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center gap-2 text-white font-bold">
                  <CheckCircle2 className="text-brand-red" size={20} />
                  <span>ILR in 3 Years</span>
                </div>
                <div className="flex items-center gap-2 text-white font-bold">
                  <Globe className="text-brand-red" size={20} />
                  <span>Work Anywhere</span>
                </div>
                <div className="flex items-center gap-2 text-white font-bold">
                  <Zap className="text-brand-red" size={20} />
                  <span>No Sponsor Needed</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 bg-zinc-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-display font-black text-brand-black mb-8">
                  Why Choose the <span className="text-brand-red">Global Talent</span> Route?
                </h2>
                <div className="space-y-4">
                  {benefits.map((benefit, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm border border-zinc-100"
                    >
                      <div className="mt-1 bg-brand-red/10 p-1 rounded-full">
                        <CheckCircle2 className="text-brand-red" size={18} />
                      </div>
                      <span className="font-bold text-zinc-700">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800" 
                  alt="Success"
                  className="rounded-[40px] shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-10 -left-10 bg-brand-red text-white p-8 rounded-3xl shadow-xl">
                  <p className="text-4xl font-black mb-1">98%</p>
                  <p className="text-sm font-bold uppercase tracking-widest opacity-80">Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Ladder */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-display font-black text-brand-black mb-6">The Process <span className="text-brand-red">Ladder</span></h2>
              <p className="text-zinc-500 font-medium">Step-by-step guidance from assessment to visa grant.</p>
            </div>

            <div className="space-y-12 relative">
              {/* Vertical Line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-zinc-100 hidden md:block" />

              {stages.map((stage, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative pl-0 md:pl-20"
                >
                  {/* Circle Marker */}
                  <div className="absolute left-6 top-0 w-5 h-5 bg-brand-red rounded-full border-4 border-white shadow-lg hidden md:block z-10" />
                  
                  <div className="bg-zinc-50 rounded-[32px] p-8 md:p-10 border border-zinc-100 hover:border-brand-red/30 transition-all shadow-sm">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                      <h3 className="text-2xl font-bold text-brand-black">{stage.title}</h3>
                      <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-zinc-200 text-zinc-500 text-sm font-bold">
                        <Clock size={16} />
                        {stage.timeline}
                      </div>
                    </div>

                    {stage.description && (
                      <p className="text-zinc-600 mb-6 font-medium">{stage.description}</p>
                    )}

                    {stage.items && (
                      <ul className="grid md:grid-cols-2 gap-4 mb-6">
                        {stage.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-zinc-500 font-medium">
                            <ChevronRight size={16} className="text-brand-red mt-0.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}

                    {stage.optional && (
                      <div className="bg-brand-red/5 p-4 rounded-xl border border-brand-red/10 text-sm font-bold text-brand-red mb-4">
                        <span className="uppercase tracking-widest mr-2">Optional:</span>
                        {stage.optional}
                      </div>
                    )}

                    {stage.fee && (
                      <div className="text-brand-black font-bold text-lg mb-4">{stage.fee}</div>
                    )}

                    {stage.fees && (
                      <div className="space-y-2 mb-4">
                        <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Home Office Fees:</p>
                        {stage.fees.map((fee, idx) => (
                          <p key={idx} className="text-brand-black font-bold">{fee}</p>
                        ))}
                      </div>
                    )}

                    {stage.important && (
                      <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-100">
                        <p className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-2">Important:</p>
                        <ul className="space-y-1">
                          {stage.important.map((imp, idx) => (
                            <li key={idx} className="text-xs text-amber-700 font-medium">• {imp}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {stage.goodwill && (
                      <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-100">
                        <p className="text-xs font-bold text-green-600 uppercase tracking-widest mb-1">Goodwill Gesture:</p>
                        <p className="text-sm text-green-700 font-bold">{stage.goodwill}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Legal Fees & Timeline Summary */}
      <section className="py-24 bg-brand-black text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl font-display font-black mb-8">Legal Fees & <span className="text-brand-red">Payment</span></h2>
                <div className="space-y-8">
                  <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
                    <p className="text-zinc-400 font-bold uppercase tracking-widest text-xs mb-2">Our Legal Fee</p>
                    <p className="text-4xl font-black text-brand-red mb-4">£2,500 – £4,500</p>
                    <p className="text-sm text-white/60 leading-relaxed">Depending on the complexity of the case. Transparent pricing with no hidden costs.</p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-bold text-lg">Payment Options:</h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                        <p className="font-bold text-brand-red mb-2">Option 1</p>
                        <p className="text-sm font-medium">Pay in full upfront</p>
                      </div>
                      <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                        <p className="font-bold text-brand-red mb-2">Option 2</p>
                        <p className="text-sm font-medium">2 Instalments</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-brand-red/10 rounded-2xl border border-brand-red/20">
                    <p className="text-xs font-bold text-brand-red uppercase tracking-widest mb-2">Important Note:</p>
                    <p className="text-sm leading-relaxed">Legal fees are non-refundable if endorsement is refused. However, we assist with refusal review and re-application strategy for <strong>FREE</strong>.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <div className="bg-white text-brand-black p-10 rounded-[40px] shadow-2xl relative overflow-hidden">
                  <h3 className="text-3xl font-display font-black mb-8">Typical <span className="text-brand-red">Timeline</span></h3>
                  <div className="space-y-6">
                    {[
                      { label: "Eligibility check", time: "Up to 1 week" },
                      { label: "Evidence preparation", time: "2–4 weeks" },
                      { label: "Endorsement decision", time: "4–8 weeks" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between border-b border-zinc-100 pb-4">
                        <span className="font-bold text-zinc-500">{item.label}</span>
                        <span className="font-black text-brand-black">{item.time}</span>
                      </div>
                    ))}
                    <div className="pt-6">
                      <div className="bg-brand-red text-white p-6 rounded-2xl text-center">
                        <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">Total before visa stage</p>
                        <p className="text-3xl font-black">Approx 6–12 weeks</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-full -mr-16 -mt-16 blur-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <BookingSection 
        title="Book Your Global Talent Assessment"
        description="Speak with our Global Talent specialists to evaluate your profile and map out your endorsement strategy."
      />

      <Footer />
    </div>
  );
}
