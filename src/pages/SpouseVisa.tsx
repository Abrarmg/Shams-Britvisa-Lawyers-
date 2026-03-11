import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { motion } from 'motion/react';
import { CheckCircle2, Calendar, Clock, MapPin, Phone, Video, CreditCard, ArrowRight, ChevronRight, Check, Users, Shield, Heart, FileText, AlertCircle, Info, Landmark, GraduationCap } from 'lucide-react';
import { BookingSection } from '../components/BookingSection';

// --- Main Page Component ---

export default function SpouseVisa() {

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
              Family & Partner Visas
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-display font-black text-brand-black mb-8 leading-tight"
            >
              Spouse Visa – <span className="text-brand-red">Expert UK Immigration Lawyers</span> in Manchester
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-zinc-600 font-medium leading-relaxed mb-12"
            >
              If you want to join your husband or wife in the UK, the Spouse Visa (also known as the UK Partner Visa) allows you to live, work, and build your life together legally. However, the application process is complex and heavily document-based.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-zinc-500 leading-relaxed mb-12 max-w-3xl mx-auto"
            >
              At Shams Britvisa Lawyers, based in Manchester, we specialise in Spouse visa applications, extensions, renewals, and settlement (ILR). Our expert immigration team ensures your case is fully compliant with the latest UK spouse visa new rules 2025 and Home Office guidance.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-20">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-10 rounded-[40px] shadow-2xl border border-zinc-100"
            >
              <h2 className="text-3xl font-black text-brand-black mb-8">What Is a UK Spouse Visa?</h2>
              <p className="text-zinc-600 mb-6 leading-relaxed">
                A Spouse Visa allows the husband or wife of a British citizen, person settled in the UK (ILR), person with refugee status, or holder of certain work visas to live in the UK.
              </p>
              <p className="text-zinc-600 mb-6 leading-relaxed">
                The initial visa is usually granted for 2.5 years, after which you must apply for a spouse visa extension. After 5 years, you may qualify for ILR.
              </p>
              <div className="grid gap-4">
                {[
                  'British Citizen Sponsor',
                  'Settled Person (ILR) Sponsor',
                  'Refugee Status Sponsor',
                  'Certain Work Visa Holder Sponsor'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
                    <div className="w-8 h-8 bg-brand-red text-white rounded-full flex items-center justify-center shrink-0">
                      <Check size={18} />
                    </div>
                    <span className="text-lg font-bold text-brand-black">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <img 
                src="https://i.ibb.co/LhrCk9Mh/image.png" 
                alt="UK Spouse Visa" 
                className="w-full rounded-[40px] shadow-2xl h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 bg-brand-black text-white p-10 rounded-[40px] shadow-2xl max-w-xs">
                <div className="text-4xl font-black text-brand-red mb-2">2.5 Yrs</div>
                <div className="text-lg font-bold leading-tight">Initial Grant Period Before Extension</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Requirements Grid */}
        <section className="bg-brand-black py-24 text-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-display font-black mb-16 text-center">UK Spouse Visa Requirements</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Relationship', desc: 'Genuine and subsisting marriage, legally recognised certificate, ongoing evidence.', icon: <Heart /> },
                { title: 'Financial', desc: 'Minimum income threshold, employment, self-employment, or savings.', icon: <CreditCard /> },
                { title: 'Accommodation', desc: 'Adequate accommodation in the UK with no overcrowding.', icon: <Landmark /> },
                { title: 'English Language', desc: 'Pass an approved English test or hold a qualifying degree.', icon: <GraduationCap /> },
              ].map((req, idx) => (
                <div key={idx} className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all group">
                  <div className="w-12 h-12 bg-brand-red text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {React.cloneElement(req.icon as React.ReactElement<any>, { size: 24 })}
                  </div>
                  <h3 className="text-xl font-black mb-4">{req.title}</h3>
                  <p className="text-white/60 leading-relaxed text-sm">{req.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-12 text-center text-white/50 italic">Our Manchester immigration lawyers carefully review every document before submission.</p>
          </div>
        </section>

        {/* Document Checklist */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-6 mb-12">
                <div className="w-16 h-16 bg-brand-red text-white rounded-2xl flex items-center justify-center">
                  <FileText size={32} />
                </div>
                <h2 className="text-4xl font-black text-brand-black">Document Checklist for UK Spouse Visa</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  {[
                    'Passport copies',
                    'Marriage certificate',
                    'Proof of genuine relationship'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-5 bg-zinc-50 rounded-2xl border border-zinc-100">
                      <CheckCircle2 className="text-brand-red shrink-0" />
                      <span className="font-bold text-brand-black">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  {[
                    'Financial evidence',
                    'Accommodation evidence',
                    'English language certificate'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-5 bg-zinc-50 rounded-2xl border border-zinc-100">
                      <CheckCircle2 className="text-brand-red shrink-0" />
                      <span className="font-bold text-brand-black">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-12 p-8 bg-red-50 rounded-3xl border border-red-100 text-brand-black font-bold text-center">
                Mistakes in documentation are the leading cause of refusal. We prepare a fully tailored checklist based on your circumstances.
              </p>
            </div>
          </div>
        </section>

        {/* Processing & Extensions */}
        <section className="py-24 bg-zinc-50">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-black text-brand-black mb-8 flex items-center gap-4">
                  <Clock className="text-brand-red" /> Processing Time After Biometrics
                </h2>
                <div className="space-y-6">
                  <div className="flex justify-between items-center p-6 bg-white rounded-2xl shadow-sm border border-zinc-100">
                    <span className="font-bold text-brand-black">Outside UK</span>
                    <span className="bg-brand-red/10 text-brand-red px-4 py-1 rounded-full font-black">~12 Weeks</span>
                  </div>
                  <div className="flex justify-between items-center p-6 bg-white rounded-2xl shadow-sm border border-zinc-100">
                    <span className="font-bold text-brand-black">Inside UK (Extension)</span>
                    <span className="bg-brand-red/10 text-brand-red px-4 py-1 rounded-full font-black">~8 Weeks</span>
                  </div>
                </div>
                <p className="mt-6 text-zinc-500 italic">Priority services may be available. Our legal team ensures your file is decision-ready to avoid unnecessary delays.</p>
              </div>

              <div>
                <h2 className="text-3xl font-black text-brand-black mb-8 flex items-center gap-4">
                  <ArrowRight className="text-brand-red" /> Extension & Renewal
                </h2>
                <p className="text-zinc-600 mb-6 leading-relaxed">
                  After 2.5 years, you must apply for a Spouse visa extension to continue living in the UK.
                </p>
                <div className="p-8 bg-white rounded-3xl border border-zinc-100 shadow-sm">
                  <h4 className="font-black text-brand-black mb-4">Renewal Requirements:</h4>
                  <ul className="space-y-3">
                    <li className="flex gap-3 text-zinc-600 font-medium"><Check size={18} className="text-brand-red shrink-0" /> Still meet financial requirements</li>
                    <li className="flex gap-3 text-zinc-600 font-medium"><Check size={18} className="text-brand-red shrink-0" /> Continue living together</li>
                    <li className="flex gap-3 text-zinc-600 font-medium"><Check size={18} className="text-brand-red shrink-0" /> Provide updated relationship evidence</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* New Rules & Common Questions */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-brand-black text-white p-10 rounded-[40px] shadow-2xl">
                  <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
                    <Info className="text-brand-red" /> UK Spouse Visa New Rules 2025
                  </h2>
                  <p className="text-white/70 mb-8 leading-relaxed">
                    Immigration laws change regularly. The 2025 rules may impact financial thresholds, evidence requirements, and salary calculations.
                  </p>
                  <div className="space-y-3">
                    {['Financial thresholds', 'Evidence requirements', 'Salary calculations', 'Dependent rules'].map((rule, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm font-bold">
                        <div className="w-1.5 h-1.5 bg-brand-red rounded-full" /> {rule}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-zinc-50 p-10 rounded-[40px] border border-zinc-100">
                  <h2 className="text-2xl font-black text-brand-black mb-6">Common Questions</h2>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-black text-brand-red mb-2">Can my wife cancel my spouse visa?</h4>
                      <p className="text-sm text-zinc-600 leading-relaxed">
                        A spouse cannot directly "cancel" your visa. However, if the relationship breaks down, the sponsor must inform the Home Office, which may lead to curtailment.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-black text-brand-red mb-2">Dependent & Related Extensions</h4>
                      <p className="text-sm text-zinc-600 leading-relaxed">
                        If you entered as a dependent under another route (like Skilled Worker), you may require a specific dependent extension. We assess your history to determine the secure pathway.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Refusals & Why Us */}
        <section className="py-24 bg-zinc-50">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-16">
                <div>
                  <h2 className="text-3xl font-black text-brand-black mb-8 flex items-center gap-4">
                    <AlertCircle className="text-brand-red" /> Common Refusal Reasons
                  </h2>
                  <div className="space-y-4">
                    {[
                      'Incorrect financial documents',
                      'Failure to meet financial requirements',
                      'Insufficient relationship evidence',
                      'Incorrect document checklist',
                      'Errors in application form'
                    ].map((reason, idx) => (
                      <div key={idx} className="flex items-center gap-4 p-4 bg-red-50 rounded-2xl border border-red-100">
                        <div className="w-2 h-2 bg-brand-red rounded-full" />
                        <span className="font-bold text-brand-black">{reason}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-black text-brand-black mb-8">Why Choose Shams Britvisa?</h2>
                  <div className="grid gap-3">
                    {[
                      'Specialist UK spouse visa expertise',
                      'In-depth financial requirement analysis',
                      'Accurate document checklist preparation',
                      'Extension and renewal services',
                      'Up-to-date knowledge of 2025 rules',
                      'Manchester-based immigration lawyers'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-zinc-600 font-bold">
                        <Check size={18} className="text-emerald-500" /> {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <BookingSection 
          title="Book Your Consultation"
          description="Start your Spouse visa application today. Book your consultation and let our experienced team guide you through every stage."
          className="bg-white"
        />
      </main>

      <Footer />
    </div>
  );
}
