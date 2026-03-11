import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  FileText, 
  Building2, 
  ShieldCheck, 
  ArrowRight, 
  Search, 
  RefreshCw, 
  HelpCircle,
  Briefcase,
  Users,
  Scale,
  Check,
  MapPin,
  Phone
} from 'lucide-react';
import { BookingSection } from '../components/BookingSection';
import { Link } from 'react-router-dom';

const SponsorLicence = () => {
  return (
    <div className="min-h-screen bg-zinc-50 selection:bg-brand-red selection:text-white">
      <Navbar />
      
      <main className="pb-24">
        {/* Hero Section */}
        <section className="relative pt-40 pb-24 overflow-hidden mb-20">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
              alt="Manchester Business District" 
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
                  SPONSOR <span className="text-brand-red">LICENCE</span>
                </h1>
                <p className="text-xl text-zinc-600 font-medium leading-relaxed max-w-3xl mx-auto">
                  If your business wants to hire skilled workers from overseas, you must obtain a Sponsor Licence from the UK Home Office.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link 
                    to="/#booking"
                    className="bg-brand-red text-white px-8 py-4 rounded-full font-black text-lg hover:bg-brand-black transition-all shadow-xl flex items-center gap-2"
                  >
                    Apply for Licence <ArrowRight size={20} />
                  </Link>
                  <Link 
                    to="/#booking"
                    className="bg-white text-brand-black border-2 border-brand-black px-8 py-4 rounded-full font-black text-lg hover:bg-zinc-50 transition-all flex items-center gap-2"
                  >
                    Check Eligibility
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="container mx-auto px-6 mb-24">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white p-12 rounded-[50px] shadow-2xl border border-zinc-100 relative overflow-hidden">
              <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-black text-brand-black mb-6">Empower Your Business</h2>
                  <p className="text-lg text-zinc-600 font-medium leading-relaxed mb-6">
                    Without a Sponsor Licence, you cannot legally sponsor migrant workers under the Skilled Worker or other sponsored routes.
                  </p>
                  <p className="text-lg text-zinc-600 font-medium leading-relaxed">
                    At Shams Britvisa Lawyers, based in Manchester, we provide specialist legal support for businesses seeking to apply for a sponsor licence, manage compliance duties, and navigate the full sponsor licence route with confidence.
                  </p>
                </div>
                <div className="bg-brand-red/5 p-8 rounded-3xl border border-brand-red/10">
                  <h3 className="text-2xl font-black text-brand-red mb-6">What Is a Sponsor Licence?</h3>
                  <p className="text-zinc-700 font-bold mb-6">
                    Official permission granted by the UK Home Office allowing UK-based employers to sponsor eligible overseas workers.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Assign Certificates of Sponsorship (CoS)",
                      "Sponsor Skilled Worker visa applicants",
                      "Expand your workforce internationally",
                      "Fill skill shortages legally"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-brand-black font-bold">
                        <CheckCircle2 className="text-brand-red shrink-0" size={20} />
                        {item}
                      </li>
                    ))}
                  </ul>
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
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Sponsor Licence Requirements</h2>
                <p className="text-xl text-white/60 max-w-2xl mx-auto">
                  Before you apply, your business must meet strict Home Office criteria.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "1. Genuine Business",
                    desc: "Must be legally registered in the UK, have an active trading presence, and provide corporate documentation.",
                    icon: <Building2 className="w-10 h-10" />
                  },
                  {
                    title: "2. Compliance & HR",
                    desc: "Requires proper HR record-keeping, ability to monitor workers, and reporting mechanisms for changes.",
                    icon: <Users className="w-10 h-10" />
                  },
                  {
                    title: "3. Key Personnel",
                    desc: "You must appoint an Authorising Officer, Key Contact, and Level 1 User to manage the licence.",
                    icon: <ShieldCheck className="w-10 h-10" />
                  }
                ].map((req, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[40px] hover:bg-white/10 transition-all group">
                    <div className="text-brand-red mb-6 group-hover:scale-110 transition-transform">{req.icon}</div>
                    <h3 className="text-2xl font-black text-white mb-4">{req.title}</h3>
                    <p className="text-white/60 font-medium leading-relaxed">{req.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-16 text-center">
                <Link 
                  to="/#booking"
                  className="inline-flex items-center gap-3 bg-brand-red text-white px-10 py-5 rounded-full font-black text-lg hover:bg-white hover:text-brand-red transition-all shadow-2xl"
                >
                  Book a Compliance Audit <ArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Process & Costs */}
        <section className="container mx-auto px-6 mb-24">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Step-by-Step Process */}
            <div className="bg-white p-12 rounded-[40px] shadow-xl border border-zinc-100">
              <h2 className="text-3xl font-black text-brand-black mb-8">Step-by-Step Process</h2>
              <div className="space-y-8">
                {[
                  { step: "01", title: "Online Application", desc: "Complete the official Home Office application form." },
                  { step: "02", title: "Fee Payment", desc: "Pay the correct sponsor licence application fee." },
                  { step: "03", title: "Document Submission", desc: "Submit all required supporting corporate documents." },
                  { step: "04", title: "Compliance Visit", desc: "Prepare for a possible visit from Home Office inspectors." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="text-4xl font-black text-brand-red/20">{item.step}</div>
                    <div>
                      <h3 className="text-xl font-black text-brand-black mb-2">{item.title}</h3>
                      <p className="text-zinc-600 font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fees & Costs */}
            <div className="bg-brand-black p-12 rounded-[40px] shadow-xl text-white">
              <h2 className="text-3xl font-black mb-8">Application Fees & Costs</h2>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
                    <p className="text-brand-red font-black text-sm uppercase tracking-widest mb-2">Small/Charity</p>
                    <p className="text-2xl font-black">Lower Fee</p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
                    <p className="text-brand-red font-black text-sm uppercase tracking-widest mb-2">Medium/Large</p>
                    <p className="text-2xl font-black">Higher Fee</p>
                  </div>
                </div>
                <div className="pt-6 border-t border-white/10">
                  <h3 className="text-xl font-black mb-4">Additional Costs:</h3>
                  <ul className="space-y-3">
                    {[
                      "Certificate of Sponsorship (CoS) fees",
                      "Immigration Skills Charge",
                      "Legal compliance services"
                    ].map((cost, i) => (
                      <li key={i} className="flex items-center gap-3 text-white/70 font-bold">
                        <Check className="text-brand-red" size={18} />
                        {cost}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8 p-6 bg-brand-red/10 rounded-2xl border border-brand-red/20">
                  <p className="text-sm font-bold text-white/80">
                    Our Manchester-based legal team provides transparent guidance on all fees before submission.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Renewal & Compliance */}
        <section className="container mx-auto px-6 mb-24">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white p-10 rounded-[40px] shadow-xl border border-zinc-100 mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-brand-red/10 text-brand-red rounded-2xl flex items-center justify-center">
                    <RefreshCw size={24} />
                  </div>
                  <h2 className="text-2xl font-black text-brand-black">Licence Renewal</h2>
                </div>
                <p className="text-zinc-600 font-medium mb-6">
                  A sponsor licence is typically valid for 4 years. Failure to renew can result in licence revocation and sponsored workers losing status.
                </p>
                <Link to="/#booking" className="text-brand-red font-black flex items-center gap-2 hover:gap-3 transition-all">
                  Renew Your Licence <ArrowRight size={18} />
                </Link>
              </div>
              <div className="bg-white p-10 rounded-[40px] shadow-xl border border-zinc-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-brand-red/10 text-brand-red rounded-2xl flex items-center justify-center">
                    <Scale size={24} />
                  </div>
                  <h2 className="text-2xl font-black text-brand-black">Compliance Duties</h2>
                </div>
                <p className="text-zinc-600 font-medium mb-4">
                  Employers must monitor attendance, report changes, and maintain accurate records.
                </p>
                <ul className="space-y-2 text-sm font-bold text-zinc-500">
                  <li>• Monitor attendance of sponsored workers</li>
                  <li>• Report changes in employment</li>
                  <li>• Maintain accurate records</li>
                </ul>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-black text-brand-black mb-6">Sponsor Licence Guidance</h2>
              <p className="text-xl text-zinc-600 font-medium leading-relaxed mb-8">
                Holding a sponsor licence comes with serious responsibilities. Non-compliance can result in civil penalties or licence revocation.
              </p>
              <div className="bg-brand-red p-10 rounded-[40px] text-white shadow-2xl">
                <h3 className="text-2xl font-black mb-6">Eligibility Checker</h3>
                <div className="space-y-4">
                  {[
                    "Is your business legally registered?",
                    "Do you have HR systems in place?",
                    "Can you offer genuine skilled roles?",
                    "Can you meet salary thresholds?"
                  ].map((q, i) => (
                    <div key={i} className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl border border-white/20">
                      <HelpCircle className="text-white shrink-0" size={20} />
                      <span className="font-bold">{q}</span>
                    </div>
                  ))}
                </div>
                <Link 
                  to="/#booking"
                  className="mt-8 w-full bg-white text-brand-red py-4 rounded-2xl font-black text-center block hover:bg-brand-black hover:text-white transition-all"
                >
                  Start Eligibility Check
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Refusal Reasons */}
        <section className="container mx-auto px-6 mb-24">
          <div className="max-w-4xl mx-auto bg-zinc-100 p-12 rounded-[50px] border border-zinc-200">
            <h2 className="text-3xl font-black text-brand-black mb-8 text-center">Common Reasons for Refusal</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Incomplete documentation",
                "Weak HR compliance systems",
                "Inaccurate application forms",
                "Failure to meet requirements",
                "Poorly prepared key personnel"
              ].map((reason, i) => (
                <div key={i} className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-zinc-200">
                  <AlertCircle className="text-brand-red shrink-0" />
                  <span className="font-bold text-brand-black">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="container mx-auto px-6 mb-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-brand-black mb-6">Why Choose Shams Britvisa Lawyers?</h2>
              <p className="text-lg text-zinc-600 font-medium">Manchester-based legal expertise for businesses across the UK.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Specialist Lawyers", icon: <Briefcase /> },
                { title: "Extensive Experience", icon: <Clock /> },
                { title: "Compliance Audits", icon: <Search /> },
                { title: "Strategic Advice", icon: <ShieldCheck /> },
                { title: "Renewal Support", icon: <RefreshCw /> },
                { title: "Manchester Based", icon: <MapPin /> }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-[32px] shadow-lg border border-zinc-100 flex flex-col items-center text-center group hover:border-brand-red transition-all">
                  <div className="w-12 h-12 bg-brand-red/10 text-brand-red rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-black text-brand-black">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <BookingSection 
          title="Ready to Hire Global Talent?"
          description="We support SMEs, start-ups, healthcare providers, and corporations across the UK. Get your Sponsor Licence decision-ready."
          className="bg-zinc-50"
        />
      </main>

      <Footer />
    </div>
  );
};

export default SponsorLicence;
