import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { motion } from 'motion/react';
import { CheckCircle2, AlertCircle, Clock, FileText, Mail, MapPin, Phone, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { BookingSection } from '../components/BookingSection';

const VisitorVisa = () => {
  return (
    <div className="min-h-screen bg-zinc-50 selection:bg-brand-red selection:text-white">
      <Navbar />
      
      <main className="pb-24">
        {/* Hero Section */}
        <section className="relative pt-40 pb-24 overflow-hidden mb-20">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=2000" 
              alt="London Background" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-white/90 backdrop-blur-[2px]" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <span className="inline-block bg-brand-red/10 text-brand-red px-4 py-2 rounded-full text-sm font-black uppercase tracking-widest mb-6">
                  Expert Legal Support in Manchester
                </span>
                <h1 className="text-4xl md:text-6xl font-display font-black text-brand-black mb-8 leading-tight">
                  UK <span className="text-brand-red">VISITOR VISA</span>
                </h1>
                <p className="text-xl text-zinc-600 font-medium leading-relaxed max-w-3xl mx-auto">
                  If you are planning to visit the United Kingdom for tourism, family visits, business meetings, or short-term study, the UK Visitor Visa is the route you need.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Introduction Cards */}
        <section className="container mx-auto px-6 mb-24">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[40px] shadow-xl border border-zinc-100"
            >
              <h2 className="text-3xl font-black text-brand-black mb-6">Professional Guidance</h2>
              <p className="text-lg text-zinc-600 font-medium leading-relaxed">
                At Shams Britvisa Lawyers, based in Manchester, we provide expert legal guidance to ensure your application is prepared professionally, accurately, and strategically to maximise approval chances.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-brand-black p-10 rounded-[40px] shadow-xl text-white"
            >
              <h2 className="text-3xl font-black mb-6">Comprehensive Support</h2>
              <p className="text-lg text-white/80 font-medium leading-relaxed">
                Whether you need help understanding UK visitor visa requirements, preparing documents, or submitting your application, our experienced immigration advisers are here to support you at every stage.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What is a UK Visitor Visa? */}
        <section className="container mx-auto px-6 mb-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-black text-brand-black mb-8">What Is a UK Visitor Visa?</h2>
                <p className="text-lg text-zinc-600 font-medium mb-8 leading-relaxed">
                  The UK Visitor Visa (Standard Visitor Visa) allows individuals from visa-required countries to enter the UK for various purposes.
                </p>
                <div className="space-y-4">
                  {[
                    "Tourism and holidays",
                    "Visiting family or friends",
                    "Business meetings and conferences",
                    "Medical treatment",
                    "Short-term study (up to 6 months)"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-zinc-100">
                      <CheckCircle2 className="text-brand-red shrink-0" />
                      <span className="font-bold text-brand-black">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-zinc-100 rounded-[40px] p-10 border border-zinc-200">
                <h3 className="text-2xl font-black text-brand-black mb-6">Visa Durations</h3>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-3xl shadow-sm">
                    <p className="font-black text-brand-red mb-2">Short Term</p>
                    <p className="text-zinc-600 font-bold">6 months standard visitor visa</p>
                  </div>
                  <div className="bg-white p-6 rounded-3xl shadow-sm">
                    <p className="font-black text-brand-red mb-2">Long Term</p>
                    <p className="text-zinc-600 font-bold">2 years, 5 years, or 10 years visitor visa UK</p>
                    <p className="text-sm text-zinc-400 mt-2 italic">Long-term visas allow multiple entries but limit each stay to 6 months per visit.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="bg-brand-black py-24 mb-24">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">UK Visitor Visa Requirements</h2>
                <p className="text-xl text-white/60 max-w-2xl mx-auto">
                  Understanding UK visitor visa requirements is crucial. The Home Office must be satisfied with three key areas.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "1. Genuine Visitor",
                    desc: "Prove you intend to leave the UK, won't live there through frequent visits, and have strong ties to your home country.",
                    icon: <ShieldCheck className="w-10 h-10" />
                  },
                  {
                    title: "2. Financial Stability",
                    desc: "Show sufficient funds to cover your stay, accommodation, and travel without intending to work illegally.",
                    icon: <FileText className="w-10 h-10" />
                  },
                  {
                    title: "3. Supporting Evidence",
                    desc: "Providing correct documents needed for UK visitor visa is essential to avoid refusal.",
                    icon: <CheckCircle2 className="w-10 h-10" />
                  }
                ].map((req, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[40px] hover:bg-white/10 transition-all group">
                    <div className="text-brand-red mb-6 group-hover:scale-110 transition-transform">{req.icon}</div>
                    <h3 className="text-2xl font-black text-white mb-4">{req.title}</h3>
                    <p className="text-white/60 font-medium leading-relaxed">{req.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Documents Checklist */}
        <section className="container mx-auto px-6 mb-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-brand-black mb-6">Documents Needed for UK Visitor Visa</h2>
              <p className="text-lg text-zinc-600 font-medium">The UK visitor visa document checklist generally includes:</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Mandatory",
                  items: ["Valid passport", "Completed application form", "Visa fee payment", "Appointment confirmation"]
                },
                {
                  title: "Financial",
                  items: ["Bank statements (6 months)", "Payslips", "Business income proof", "Tax documents"]
                },
                {
                  title: "Travel Details",
                  items: ["Flight booking (if available)", "Accommodation details", "Travel itinerary"]
                },
                {
                  title: "Supporting",
                  items: ["Employment letter", "Business registration", "Property ownership", "Marriage certificate"]
                }
              ].map((cat, i) => (
                <div key={i} className="bg-white p-8 rounded-[32px] shadow-lg border border-zinc-100">
                  <h3 className="text-xl font-black text-brand-red mb-6 uppercase tracking-tight">{cat.title}</h3>
                  <ul className="space-y-3">
                    {cat.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-zinc-600 font-bold text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-red mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-12 bg-zinc-100 p-8 rounded-[32px] text-center border border-zinc-200">
              <p className="text-lg font-bold text-zinc-600">
                Many applicants search for a UK visitor visa checklist PDF — our firm provides a <span className="text-brand-red">customised checklist</span> tailored to your case.
              </p>
            </div>
          </div>
        </section>

        {/* Letters Section */}
        <section className="container mx-auto px-6 mb-24">
          <div className="max-w-6xl mx-auto bg-brand-red rounded-[50px] p-12 text-white relative overflow-hidden">
            <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-black mb-8 leading-tight">UK Visitor Visa Invitation & Sponsor Letters</h2>
                <p className="text-xl text-white/80 mb-8 font-medium">
                  If you are visiting family or friends, an invitation letter UK visitor visa is highly recommended.
                </p>
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                  <h3 className="text-2xl font-black mb-4">What Should it Include?</h3>
                  <ul className="space-y-2 text-white/90 font-bold">
                    <li>• Host’s full name and address</li>
                    <li>• Immigration status in the UK</li>
                    <li>• Relationship with the visitor</li>
                    <li>• Duration and purpose of visit</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-8">
                <div className="bg-white p-10 rounded-[40px] text-brand-black shadow-2xl">
                  <h3 className="text-2xl font-black mb-4 text-brand-red">Sponsor Letter</h3>
                  <p className="text-zinc-600 font-medium mb-6">
                    If someone is financially supporting you, a sponsor letter must include:
                  </p>
                  <ul className="space-y-3 font-bold text-zinc-800">
                    <li className="flex items-center gap-3"><CheckCircle2 className="text-brand-red" size={18} /> Sponsor’s financial documents</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="text-brand-red" size={18} /> Proof of accommodation</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="text-brand-red" size={18} /> Passport and visa status copy</li>
                  </ul>
                </div>
                <p className="text-lg font-black text-center italic">
                  "We draft professionally structured invitation and sponsor letters to reduce refusal risks."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fees and Processing */}
        <section className="container mx-auto px-6 mb-24">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-[40px] shadow-xl border border-zinc-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-brand-red/10 text-brand-red rounded-2xl flex items-center justify-center">
                  <Clock size={32} />
                </div>
                <h2 className="text-3xl font-black text-brand-black">Processing Time</h2>
              </div>
              <div className="space-y-6">
                <div className="flex justify-between items-center p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
                  <span className="font-black text-brand-black">Standard Processing</span>
                  <span className="bg-brand-black text-white px-4 py-1 rounded-full text-sm font-black">3 Weeks</span>
                </div>
                <p className="text-zinc-600 font-medium leading-relaxed">
                  Priority services available (where eligible). Processing times may vary depending on country of application and peak seasons.
                </p>
                <div className="flex items-start gap-4 p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
                  <CheckCircle2 className="text-emerald-600 shrink-0 mt-1" />
                  <p className="text-emerald-800 font-bold">Our legal team ensures your file is decision-ready to avoid delays.</p>
                </div>
              </div>
            </div>
            <div className="bg-brand-black p-12 rounded-[40px] shadow-xl text-white">
              <h2 className="text-3xl font-black mb-8">Common Reasons for Refusal</h2>
              <div className="space-y-4">
                {[
                  "Insufficient financial evidence",
                  "Weak home country ties",
                  "Inconsistent application answers",
                  "Incomplete documents",
                  "Poorly written invitation letter"
                ].map((reason, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                    <AlertCircle className="text-brand-red shrink-0" />
                    <span className="font-bold text-white/80">{reason}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-white/60 font-medium">
                At Shams Britvisa Lawyers, we conduct a full eligibility assessment before submission to minimise refusal risk.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="container mx-auto px-6 mb-24">
          <div className="max-w-4xl mx-auto bg-white p-12 rounded-[50px] shadow-2xl border border-zinc-100 text-center">
            <h2 className="text-4xl font-black text-brand-black mb-12">Why Choose Shams Britvisa Lawyers?</h2>
            <div className="grid sm:grid-cols-2 gap-8 text-left">
              {[
                "Regulated immigration advisers",
                "Extensive experience in UK visitor visa applications",
                "Tailored document checklist",
                "Professional invitation & sponsor letter drafting",
                "Refusal prevention strategy",
                "Manchester-based legal support"
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle2 className="text-white" size={18} />
                  </div>
                  <span className="font-black text-brand-black">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <BookingSection 
          title="Get Expert Help with Your UK Visitor Visa"
          description="Our Manchester immigration specialists are ready to help you prepare a strong, compliant and well-documented application."
          className="bg-zinc-50"
        />
      </main>

      <Footer />
    </div>
  );
};

export default VisitorVisa;
