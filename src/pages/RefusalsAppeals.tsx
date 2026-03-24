import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { motion } from 'motion/react';
import { CheckCircle2, Clock, Phone, Check, AlertCircle, FileText, Info, Briefcase } from 'lucide-react';
import { BookingSection } from '../components/BookingSection';

// --- Main Page Component ---

export default function RefusalsAppeals() {
  return (
    <div className="min-h-screen bg-zinc-50 selection:bg-brand-red selection:text-white">
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="container mx-auto px-6 mb-24">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block bg-brand-red/10 text-brand-red px-6 py-2 rounded-full font-black uppercase tracking-widest text-sm mb-6"
            >
              Legal Remedies & Solutions
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-display font-black text-brand-black mb-8 leading-tight"
            >
              Visa Refusals & <span className="text-brand-red">Immigration Appeals</span> – Expert Legal Support in Manchester
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-zinc-600 font-medium leading-relaxed mb-12"
            >
              Receiving a visa refusal can be stressful, frustrating, and overwhelming. Whether your application was refused inside or outside the UK, taking the correct legal action quickly is critical.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-zinc-500 leading-relaxed mb-12 max-w-3xl mx-auto"
            >
              At Shams Britvisa Lawyers, based in Manchester, we specialise in visa refusals, administrative reviews, and immigration appeals. Our experienced immigration lawyers carefully analyse refusal decisions and build strong legal arguments to challenge incorrect Home Office outcomes.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-20">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-10 rounded-[40px] shadow-2xl border border-zinc-100"
            >
              <h2 className="text-3xl font-black text-brand-black mb-8">UK Visa Refusal – What Happens Next?</h2>
              <p className="text-zinc-600 mb-6 leading-relaxed">
                A UK visa refusal does not always mean the end of your immigration journey. Depending on your case, you may have the right to:
              </p>
              <div className="grid gap-4">
                {[
                  'Submit an Administrative Review',
                  'Lodge an Immigration Appeal',
                  'File a Human Rights Appeal',
                  'Submit a fresh application',
                  'Challenge the decision via Judicial Review'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
                    <div className="w-8 h-8 bg-brand-red text-white rounded-full flex items-center justify-center shrink-0">
                      <Check size={18} />
                    </div>
                    <span className="text-lg font-bold text-brand-black">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 p-6 bg-brand-red/5 rounded-2xl border border-brand-red/10 text-brand-black font-bold">
                Understanding the correct route is essential. Acting incorrectly or delaying action can result in loss of appeal rights.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1000" 
                alt="Visa Refusal Support" 
                className="w-full rounded-[40px] shadow-2xl h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 bg-brand-black text-white p-10 rounded-[40px] shadow-2xl max-w-xs">
                <div className="text-4xl font-black text-brand-red mb-2">Urgent</div>
                <div className="text-lg font-bold leading-tight">Deadlines are strict. Act now to protect your rights.</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Common Reasons */}
        <section className="bg-brand-black py-24 text-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-display font-black mb-16 text-center">Common Reasons for Visa Refusal</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                'Insufficient financial evidence',
                'Failure to meet Immigration Rules',
                'Incorrect or incomplete documentation',
                'English language requirement issues',
                'Genuineness concerns',
                'Sponsor compliance issues',
                'Relationship requirements (Spouse Visa)',
                'Salary threshold issues (Skilled Worker)',
                'Immigration history concerns'
              ].map((reason, idx) => (
                <div key={idx} className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all group">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-brand-red text-white rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <AlertCircle size={18} />
                    </div>
                    <p className="text-lg font-bold leading-tight">{reason}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-12 text-center text-white/50 italic max-w-3xl mx-auto">
              Our Manchester immigration lawyers conduct a detailed refusal analysis to identify legal weaknesses in the Home Office decision.
            </p>
          </div>
        </section>

        {/* Administrative Review */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-6 mb-12">
                <div className="w-16 h-16 bg-brand-red text-white rounded-2xl flex items-center justify-center shadow-xl">
                  <FileText size={32} />
                </div>
                <h2 className="text-4xl font-black text-brand-black">Administrative Review</h2>
              </div>
              <p className="text-xl text-zinc-600 mb-12 leading-relaxed">
                An Administrative Review is available in certain cases where you believe the Home Office made a caseworking error.
              </p>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-zinc-50 p-10 rounded-[40px] border border-zinc-100">
                  <h3 className="text-2xl font-black text-brand-black mb-6">When Is It Appropriate?</h3>
                  <ul className="space-y-4">
                    {[
                      'Skilled Worker visa refusals',
                      'Sponsor Licence refusals',
                      'Points-based system errors',
                      'Miscalculation of documents or salary'
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 text-zinc-600 font-bold">
                        <CheckCircle2 className="text-brand-red shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                    Administrative Reviews must usually be submitted within strict deadlines. Missing the deadline can remove your right to challenge the decision.
                  </p>
                  <p className="text-lg font-bold text-brand-red">
                    We prepare legally structured review submissions addressing the specific errors made by the Home Office.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Sponsor Licence & Specific Refusals */}
        <section className="py-24 bg-brand-black text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-16">
                <div>
                  <h2 className="text-3xl font-black mb-8 flex items-center gap-4">
                    <Briefcase className="text-brand-red" /> Sponsor Licence Issues
                  </h2>
                  <p className="text-white/70 mb-8 leading-relaxed">
                    Businesses may face licence refusal, suspension, or revocation. This can severely impact sponsored workers and business operations.
                  </p>
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                    <p className="font-bold text-brand-red">
                      We provide urgent legal intervention for businesses across Manchester and the UK facing compliance enforcement action.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-black mb-8">Specialist Support For:</h2>
                  <div className="space-y-4">
                    {[
                      'Spouse visa refusals (Financial/Genuineness)',
                      'Skilled Worker visa refusals (Salary thresholds)',
                      'Dependent visa refusals',
                      'Extension refusals'
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                        <Check size={18} className="text-brand-red" />
                        <span className="font-bold text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-6 text-white/50 text-sm">
                    Each refusal requires a tailored legal strategy rather than a generic response.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* What To Do Section */}
        <section className="py-24 bg-zinc-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-black text-brand-black mb-12">What To Do If You Have Received a Refusal</h2>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { title: 'Do not panic', icon: <Info /> },
                  { title: 'Do not reapply without advice', icon: <AlertCircle /> },
                  { title: 'Check your deadline', icon: <Clock /> },
                  { title: 'Contact us urgently', icon: <Phone /> }
                ].map((step, i) => (
                  <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-zinc-100">
                    <div className="w-12 h-12 bg-zinc-50 text-brand-red rounded-2xl flex items-center justify-center mx-auto mb-4">
                      {React.cloneElement(step.icon as React.ReactElement<any>, { size: 24 })}
                    </div>
                    <p className="font-bold text-brand-black text-sm">{step.title}</p>
                  </div>
                ))}
              </div>
              <p className="mt-12 text-xl text-zinc-600 font-medium">
                Every refusal case is different. The correct legal response can protect your immigration status and future in the UK.
              </p>
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <BookingSection 
          title="Book Your Consultation"
          description="If your UK visa has been refused or your sponsor licence has been suspended or revoked, Shams Britvisa Lawyers in Manchester are here to help."
        />
      </main>

      <Footer />
    </div>
  );
}
