import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Globe, MapPin, ArrowRight, ShieldCheck, FileText, Briefcase, Users, Plane, Calendar, Clock, CreditCard, ChevronRight, Check, Video } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BookingSection } from '../components/BookingSection';

// --- Main Page Component ---

const GlobalVisas = () => {
  return (
    <div className="min-h-screen bg-zinc-50 selection:bg-brand-red selection:text-white">
      <Navbar />
      
      <main className="pb-24">
        {/* Hero Section */}
        <section className="relative pt-40 pb-24 overflow-hidden mb-20">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=2000" 
              alt="Global Travel" 
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
                  Expert Immigration Support
                </span>
                <h1 className="text-5xl md:text-7xl font-display font-black text-brand-black mb-8 leading-tight">
                  GLOBAL <span className="text-brand-red">VISAS</span>
                </h1>
                <p className="text-xl text-zinc-600 font-medium leading-relaxed max-w-3xl mx-auto">
                  Expert legal services for obtaining global visas to help you navigate complex immigration processes for various regions across the world.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="container mx-auto px-6 mb-24">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white p-12 rounded-[50px] shadow-xl border border-zinc-100">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-3xl font-black text-brand-black mb-6">International Travel Support</h2>
                  <p className="text-lg text-zinc-600 font-medium leading-relaxed mb-6">
                    At Shams Britvisa Lawyers, we offer expert legal services for obtaining global visas to help you navigate complex immigration processes for various regions across the world. Whether you are planning a trip to Schengen countries, North America, the Middle East, or East Asia, our team of experienced immigration lawyers will guide you through every step of your visa application.
                  </p>
                  <p className="text-lg text-zinc-600 font-medium leading-relaxed">
                    Our expertise in global visa applications ensures that you are fully prepared and your documents are in order, making your travel plans smoother and more efficient.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: <Globe className="text-brand-red" />, label: 'Schengen' },
                    { icon: <Plane className="text-brand-red" />, label: 'North America' },
                    { icon: <MapPin className="text-brand-red" />, label: 'Middle East' },
                    { icon: <Globe className="text-brand-red" />, label: 'East Asia' },
                  ].map((item, i) => (
                    <div key={i} className="bg-zinc-50 p-6 rounded-3xl border border-zinc-100 flex flex-col items-center text-center gap-3">
                      {item.icon}
                      <span className="font-bold text-brand-black">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Region Sections */}
        <div className="space-y-24">
          {/* Schengen */}
          <section className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-start">
                <div>
                  <h2 className="text-4xl font-black text-brand-black mb-8">Schengen Countries Visa – Travel Across Europe with Ease</h2>
                  <p className="text-lg text-zinc-600 font-medium mb-8 leading-relaxed">
                    The Schengen visa allows you to travel freely across the 27 European countries that are part of the Schengen Area. Whether you are traveling for business, tourism, or visiting family, obtaining a Schengen visa is essential for entry into most European countries.
                  </p>
                  <div className="space-y-6">
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100">
                      <h3 className="text-xl font-black text-brand-red mb-4">Schengen Visa Types</h3>
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="text-brand-red shrink-0 mt-1" size={18} />
                          <p className="font-bold text-zinc-700">Short Stay Schengen Visa (Type C): <span className="text-zinc-500 font-medium">For tourism, business, or family visits (up to 90 days).</span></p>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="text-brand-red shrink-0 mt-1" size={18} />
                          <p className="font-bold text-zinc-700">Long Stay Schengen Visa (Type D): <span className="text-zinc-500 font-medium">For stays longer than 90 days (study, work, or family reunification).</span></p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bg-brand-black p-10 rounded-[40px] text-white">
                  <h3 className="text-2xl font-black mb-8">Key Requirements for Schengen Visa</h3>
                  <div className="space-y-4">
                    {[
                      "Proof of travel itinerary",
                      "Financial stability evidence",
                      "Travel insurance",
                      "Valid passport and application form"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                        <CheckCircle2 className="text-brand-red shrink-0" />
                        <span className="font-bold text-white/80">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-8 text-white/60 font-medium">
                    Our Manchester-based immigration team will assist you with the entire application process, ensuring you meet all requirements to avoid delays or refusals.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* North America */}
          <section className="bg-zinc-100 py-24">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-black text-brand-black mb-12 text-center">North America Visas – USA, Canada, and Mexico</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      title: "USA Visa Categories",
                      items: [
                        "Tourist Visa (B-2): For visiting family, friends, or for leisure.",
                        "Business Visa (B-1): For attending business meetings, conferences, etc.",
                        "Work Visa (H-1B): For skilled workers in specialized occupations."
                      ]
                    },
                    {
                      title: "Canada Visa Categories",
                      items: [
                        "Visitor Visa: For tourism, visiting family, or business purposes.",
                        "Study Permit: For individuals intending to study in Canada.",
                        "Work Permit: For those employed by a Canadian employer."
                      ]
                    },
                    {
                      title: "Mexico Visa Categories",
                      items: [
                        "Tourist Visa: For short-term visits to Mexico for leisure.",
                        "Temporary Resident Visa: For stays longer than 180 days."
                      ]
                    }
                  ].map((region, i) => (
                    <div key={i} className="bg-white p-8 rounded-[32px] shadow-lg border border-zinc-200">
                      <h3 className="text-xl font-black text-brand-red mb-6">{region.title}</h3>
                      <ul className="space-y-4">
                        {region.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-3 text-zinc-600 font-bold text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-red mt-1.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <p className="mt-12 text-center text-zinc-500 font-medium max-w-3xl mx-auto">
                  Our legal team ensures that your North America visa application is completed accurately and promptly, taking into account specific embassy requirements for each country.
                </p>
              </div>
            </div>
          </section>

          {/* Middle East */}
          <section className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <div className="grid gap-6">
                    {[
                      {
                        title: "UAE Visa Categories",
                        items: ["Tourist Visa", "Work Visa", "Residence Visa"]
                      },
                      {
                        title: "Saudi Arabia Visa Categories",
                        items: ["Tourist Visa", "Work Visa", "Family Visit Visa"]
                      },
                      {
                        title: "Qatar Visa Categories",
                        items: ["Tourist Visa", "Work Visa", "Family Visit Visa"]
                      }
                    ].map((cat, i) => (
                      <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-zinc-100">
                        <h4 className="font-black text-brand-red mb-3">{cat.title}</h4>
                        <div className="flex flex-wrap gap-2">
                          {cat.items.map((item, j) => (
                            <span key={j} className="bg-zinc-50 px-3 py-1 rounded-full text-xs font-bold text-zinc-600 border border-zinc-100">{item}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <h2 className="text-4xl font-black text-brand-black mb-8">Middle East Visas – Explore the Diverse Cultures</h2>
                  <p className="text-lg text-zinc-600 font-medium mb-8 leading-relaxed">
                    The Middle East is home to some of the world’s most dynamic economies and cultural hubs, including the UAE, Saudi Arabia, and Qatar. Whether you're visiting for tourism, work, or family purposes, our lawyers can help you obtain the correct visa to your chosen Middle Eastern destination.
                  </p>
                  <p className="text-zinc-500 font-medium">
                    We provide comprehensive advice on visa requirements, application processes, and timelines for the Middle East, ensuring your journey is hassle-free.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* East Asia */}
          <section className="bg-brand-black py-24 text-white">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-black mb-6">East Asia Visas – Travel to Dynamic Economies</h2>
                  <p className="text-xl text-white/60 max-w-3xl mx-auto">
                    East Asia is a region rich in culture, history, and economic opportunities. Whether you're traveling to China, Japan, South Korea, or Hong Kong, our team can help you navigate the specific visa requirements for each destination.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { country: "China", types: ["Tourist Visa (L)", "Business Visa (M)", "Work Visa (Z)"] },
                    { country: "Japan", types: ["Tourist Visa", "Work Visa", "Student Visa"] },
                    { country: "South Korea", types: ["Short-Term Visa", "Work Visa", "Study Visa"] },
                    { country: "Hong Kong", types: ["Visitor Visa", "Employment Visa", "Student Visa"] }
                  ].map((item, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[32px] hover:bg-white/10 transition-all">
                      <h3 className="text-xl font-black text-brand-red mb-4">{item.country}</h3>
                      <ul className="space-y-2">
                        {item.types.map((type, j) => (
                          <li key={j} className="text-sm text-white/70 font-medium flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-brand-red" />
                            {type}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Why Choose Us */}
        <section className="container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto bg-white p-12 rounded-[50px] shadow-2xl border border-zinc-100 text-center">
            <h2 className="text-4xl font-black text-brand-black mb-12">Why Choose Shams Britvisa Lawyers for Your Global Visa?</h2>
            <div className="grid sm:grid-cols-2 gap-8 text-left">
              {[
                { title: "Expert Visa Assistance", desc: "Specialising in Schengen, North America, Middle East, and East Asia visa categories." },
                { title: "Clear Guidance", desc: "We provide detailed, step-by-step instructions on how to meet visa requirements." },
                { title: "Comprehensive Support", desc: "From document preparation to submission, our team ensures that you have everything you need to succeed." },
                { title: "Tailored Solutions", desc: "We offer personalised immigration strategies based on your specific travel or business needs." }
              ].map((point, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-brand-red" size={20} />
                    <h3 className="font-black text-brand-black">{point.title}</h3>
                  </div>
                  <p className="text-sm text-zinc-500 font-medium leading-relaxed pl-8">{point.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <BookingSection 
          title="Book Your Consultation"
          description="Explore your relocation strategy with our expert team. Consultation fee is fully refunded when you instruct us."
          className="bg-zinc-50"
        />
      </main>

      <Footer />
    </div>
  );
};

export default GlobalVisas;

