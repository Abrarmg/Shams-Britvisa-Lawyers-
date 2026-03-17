import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  User, Mail, Phone, CheckCircle2, ChevronRight, 
  ChevronLeft, ShieldCheck, Briefcase, Users, Plane,
  AlertCircle, Calendar, ArrowRight
} from 'lucide-react';

type VisaType = 'WORK' | 'FAMILY' | 'VISITOR' | 'SELF_SPONSORSHIP' | 'INNOVATOR_FOUNDER' | null;

interface LeadData {
  name: string;
  email: string;
  phone: string;
  consent: boolean;
}

interface AssessmentData {
  visaType: VisaType;
  // Work
  hasJobOffer: boolean | null;
  salaryMet: boolean | null;
  englishMet: boolean | null;
  // Family
  partnerStatus: boolean | null;
  incomeMet: boolean | null;
  relationshipMet: boolean | null;
  // Visitor
  shortStay: boolean | null;
  fundsMet: boolean | null;
  // Self-Sponsorship
  hasUKCompany: boolean | null;
  hasBusinessFunds: boolean | null;
  // Innovator Founder
  isInnovative: boolean | null;
  isEndorsed: boolean | null;
}

export const EligibilityCheck = () => {
  const [step, setStep] = useState(0); // 0: Lead, 1: Visa Select, 2: Questions, 3: Results
  const [lead, setLead] = useState<LeadData>({
    name: '',
    email: '',
    phone: '',
    consent: false
  });
  const [assessment, setAssessment] = useState<AssessmentData>({
    visaType: null,
    hasJobOffer: null,
    salaryMet: null,
    englishMet: null,
    partnerStatus: null,
    incomeMet: null,
    relationshipMet: null,
    shortStay: null,
    fundsMet: null,
    hasUKCompany: null,
    hasBusinessFunds: null,
    isInnovative: null,
    isEndorsed: null
  });

  const totalSteps = 4;
  const progress = ((step + 1) / totalSteps) * 100;

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!lead.consent) return;

    setIsSubmitting(true);
    try {
      await fetch('https://services.leadconnectorhq.com/hooks/gEY2yP0FBNyOkcRGfJCm/webhook-trigger/9b52fa3b-5551-426f-9d99-a0d424607429', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(lead),
      });
      // We proceed even if webhook fails to not block the user's assessment
      setStep(1);
    } catch (error) {
      console.error('Lead submission error:', error);
      // Still proceed to step 1 so user can use the tool
      setStep(1);
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectVisa = (type: VisaType) => {
    setAssessment({ ...assessment, visaType: type });
    setStep(2);
  };

  const calculateResults = () => {
    let score: 'High' | 'Medium' | 'Low' = 'Low';
    let summary = '';

    if (assessment.visaType === 'WORK') {
      const criteria = [assessment.hasJobOffer, assessment.salaryMet, assessment.englishMet];
      const metCount = criteria.filter(c => c === true).length;
      if (metCount === 3) score = 'High';
      else if (metCount === 2) score = 'Medium';
      
      if (assessment.hasJobOffer === false || assessment.salaryMet === false) {
        summary = "Based on your answers, you may not currently meet the strict sponsorship or salary requirements for a Skilled Worker visa. A professional consultation is highly recommended to explore alternative routes or exemptions.";
      } else {
        summary = "You appear to meet the core criteria for a Skilled Worker Visa. However, UKVI requirements regarding SOC codes and specific job roles are complex.";
      }
    } else if (assessment.visaType === 'FAMILY') {
      const criteria = [assessment.partnerStatus, assessment.incomeMet, assessment.relationshipMet];
      const metCount = criteria.filter(c => c === true).length;
      if (metCount === 3) score = 'High';
      else if (metCount === 2) score = 'Medium';
      summary = "Based on your answers, you appear to meet the core criteria for a Family Visa. Note that the financial requirement of £29,000 can be complex if using savings or non-standard income.";
    } else if (assessment.visaType === 'VISITOR') {
      const criteria = [assessment.shortStay, assessment.fundsMet];
      const metCount = criteria.filter(c => c === true).length;
      if (metCount === 2) score = 'High';
      else if (metCount === 1) score = 'Medium';
      summary = "You appear to meet the basic requirements for a Standard Visitor Visa. The key challenge is often proving 'ties to home country' and intention to leave.";
    } else if (assessment.visaType === 'SELF_SPONSORSHIP') {
      const criteria = [assessment.hasUKCompany, assessment.hasBusinessFunds, assessment.englishMet];
      const metCount = criteria.filter(c => c === true).length;
      if (metCount === 3) score = 'High';
      else if (metCount === 2) score = 'Medium';
      summary = "Self-Sponsorship is a complex route involving setting up a UK entity. You appear to have the foundations, but corporate compliance is critical.";
    } else if (assessment.visaType === 'INNOVATOR_FOUNDER') {
      const criteria = [assessment.isInnovative, assessment.isEndorsed, assessment.englishMet];
      const metCount = criteria.filter(c => c === true).length;
      if (metCount === 3) score = 'High';
      else if (metCount === 2) score = 'Medium';
      summary = "The Innovator Founder route requires a high level of innovation and endorsement. Meeting these criteria is a strong start for this prestigious visa.";
    }

    return { score, summary };
  };

  const results = calculateResults();

  return (
    <section className="py-16 sm:py-24 bg-zinc-50 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-1 bg-brand-red" />
      
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-brand-black mb-4">
            Free UK Visa Eligibility Check
          </h2>
          <p className="text-zinc-500 text-sm sm:text-base font-medium">Assessment based on 2026 UK Immigration Rules</p>
        </div>

        <div className="bg-white rounded-[24px] sm:rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-zinc-100 overflow-hidden">
          {/* Progress Bar */}
          <div className="h-1.5 w-full bg-zinc-100">
            <motion.div 
              className="h-full bg-brand-red"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          <div className="p-6 sm:p-8 md:p-12">
            <AnimatePresence mode="wait">
              {/* STEP 0: LEAD CAPTURE */}
              {step === 0 && (
                <motion.div
                  key="lead"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <div className="flex items-center gap-3 mb-8 text-brand-black">
                    <ShieldCheck className="text-brand-red" size={28} />
                    <h3 className="text-2xl font-bold">Secure Your Assessment</h3>
                  </div>
                  <form onSubmit={handleLeadSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">Full Name</label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                          <input
                            required
                            type="text"
                            className="w-full bg-zinc-50 border border-zinc-100 rounded-xl py-4 pl-12 pr-4 focus:border-brand-red outline-none transition-all"
                            placeholder="John Doe"
                            value={lead.name}
                            onChange={e => setLead({...lead, name: e.target.value})}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">Email Address</label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                          <input
                            required
                            type="email"
                            className="w-full bg-zinc-50 border border-zinc-100 rounded-xl py-4 pl-12 pr-4 focus:border-brand-red outline-none transition-all"
                            placeholder="john@example.com"
                            value={lead.email}
                            onChange={e => setLead({...lead, email: e.target.value})}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">Phone Number (with Country Code)</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                        <input
                          required
                          type="tel"
                          className="w-full bg-zinc-50 border border-zinc-100 rounded-xl py-4 pl-12 pr-4 focus:border-brand-red outline-none transition-all"
                          placeholder="0330 133 8857"
                          value={lead.phone}
                          onChange={e => setLead({...lead, phone: e.target.value})}
                        />
                      </div>
                    </div>
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        required
                        className="mt-1 w-5 h-5 rounded border-zinc-300 text-brand-red focus:ring-brand-red"
                        checked={lead.consent}
                        onChange={e => setLead({...lead, consent: e.target.checked})}
                      />
                      <span className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-700 transition-colors">
                        I agree to the privacy policy and consent to being contacted regarding my visa inquiry. (GDPR Compliant)
                      </span>
                    </label>
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-brand-red text-white py-5 rounded-xl font-bold text-lg hover:bg-brand-black transition-all flex items-center justify-center gap-3 shadow-xl shadow-red-500/10 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? 'Processing...' : 'Start Free Assessment'}
                      {!isSubmitting && <ChevronRight size={20} />}
                    </button>
                  </form>
                </motion.div>
              )}

              {/* STEP 1: VISA SELECT */}
              {step === 1 && (
                <motion.div
                  key="visa-select"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-brand-black mb-6 sm:mb-8 text-center">Which visa route are you interested in?</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {[
                      { id: 'WORK', label: 'Skilled Worker', icon: <Briefcase size={28} />, desc: 'Employment based' },
                      { id: 'FAMILY', label: 'Family / Spouse', icon: <Users size={28} />, desc: 'Partner based' },
                      { id: 'VISITOR', label: 'Visitor Visa', icon: <Plane size={28} />, desc: 'Tourism or Business' },
                      { id: 'SELF_SPONSORSHIP', label: 'Self-Sponsorship', icon: <ShieldCheck size={28} />, desc: 'Own your business' },
                      { id: 'INNOVATOR_FOUNDER', label: 'Innovator Founder', icon: <ArrowRight size={28} />, desc: 'New business idea' },
                    ].map((type) => (
                      <button
                        key={type.id}
                        onClick={() => selectVisa(type.id as VisaType)}
                        className="p-6 sm:p-8 rounded-2xl border-2 border-zinc-100 hover:border-brand-red hover:bg-zinc-50 transition-all text-center group flex sm:flex-col items-center gap-4 sm:gap-0"
                      >
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-zinc-50 rounded-full flex items-center justify-center sm:mx-auto sm:mb-4 text-brand-black group-hover:text-brand-red transition-colors shrink-0">
                          {type.icon}
                        </div>
                        <div className="text-left sm:text-center">
                          <p className="font-bold text-brand-black mb-0.5 sm:mb-1">{type.label}</p>
                          <p className="text-[10px] sm:text-xs text-zinc-400 uppercase tracking-widest">{type.desc}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                  <button 
                    onClick={() => setStep(0)}
                    className="mt-8 text-zinc-400 font-bold flex items-center gap-2 hover:text-brand-black transition-colors mx-auto"
                  >
                    <ChevronLeft size={18} /> Back
                  </button>
                </motion.div>
              )}

              {/* STEP 2: QUESTIONS */}
              {step === 2 && (
                <motion.div
                  key="questions"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-brand-black text-white rounded-full flex items-center justify-center font-bold">
                      {assessment.visaType === 'WORK' ? 'W' : assessment.visaType === 'FAMILY' ? 'F' : 'V'}
                    </div>
                    <h3 className="text-2xl font-bold text-brand-black">
                      {assessment.visaType === 'WORK' ? 'Skilled Worker Assessment' : 
                       assessment.visaType === 'FAMILY' ? 'Family Visa Assessment' : 
                       assessment.visaType === 'VISITOR' ? 'Visitor Visa Assessment' :
                       assessment.visaType === 'SELF_SPONSORSHIP' ? 'Self-Sponsorship Assessment' :
                       'Innovator Founder Assessment'}
                    </h3>
                  </div>

                  <div className="space-y-8">
                    {assessment.visaType === 'WORK' && (
                      <>
                        <Question 
                          label="Do you have a job offer from a UK licensed sponsor?" 
                          value={assessment.hasJobOffer}
                          onChange={(v) => setAssessment({...assessment, hasJobOffer: v})}
                        />
                        <Question 
                          label="Is the salary at least £41,700 per year (or the going rate)?" 
                          value={assessment.salaryMet}
                          onChange={(v) => setAssessment({...assessment, salaryMet: v})}
                        />
                        <Question 
                          label="Is your English level at B2 or higher?" 
                          value={assessment.englishMet}
                          onChange={(v) => setAssessment({...assessment, englishMet: v})}
                        />
                      </>
                    )}
                    {assessment.visaType === 'FAMILY' && (
                      <>
                        <Question 
                          label="Is your partner a British Citizen or settled person (ILR)?" 
                          value={assessment.partnerStatus}
                          onChange={(v) => setAssessment({...assessment, partnerStatus: v})}
                        />
                        <Question 
                          label="Is your combined annual income at least £29,000?" 
                          value={assessment.incomeMet}
                          onChange={(v) => setAssessment({...assessment, incomeMet: v})}
                        />
                        <Question 
                          label="Is your relationship genuine and subsisting?" 
                          value={assessment.relationshipMet}
                          onChange={(v) => setAssessment({...assessment, relationshipMet: v})}
                        />
                      </>
                    )}
                    {assessment.visaType === 'VISITOR' && (
                      <>
                        <Question 
                          label="Do you intend to stay for less than 6 months?" 
                          value={assessment.shortStay}
                          onChange={(v) => setAssessment({...assessment, shortStay: v})}
                        />
                        <Question 
                          label="Can you prove you have sufficient funds for your stay?" 
                          value={assessment.fundsMet}
                          onChange={(v) => setAssessment({...assessment, fundsMet: v})}
                        />
                      </>
                    )}
                    {assessment.visaType === 'SELF_SPONSORSHIP' && (
                      <>
                        <Question 
                          label="Do you have a UK company or intend to set one up?" 
                          value={assessment.hasUKCompany}
                          onChange={(v) => setAssessment({...assessment, hasUKCompany: v})}
                        />
                        <Question 
                          label="Do you have sufficient funds for business operations?" 
                          value={assessment.hasBusinessFunds}
                          onChange={(v) => setAssessment({...assessment, hasBusinessFunds: v})}
                        />
                        <Question 
                          label="Is your English level at B2 or higher?" 
                          value={assessment.englishMet}
                          onChange={(v) => setAssessment({...assessment, englishMet: v})}
                        />
                      </>
                    )}
                    {assessment.visaType === 'INNOVATOR_FOUNDER' && (
                      <>
                        <Question 
                          label="Do you have an innovative, viable, and scalable business idea?" 
                          value={assessment.isInnovative}
                          onChange={(v) => setAssessment({...assessment, isInnovative: v})}
                        />
                        <Question 
                          label="Has your idea been endorsed by an approved body?" 
                          value={assessment.isEndorsed}
                          onChange={(v) => setAssessment({...assessment, isEndorsed: v})}
                        />
                        <Question 
                          label="Is your English level at B2 or higher?" 
                          value={assessment.englishMet}
                          onChange={(v) => setAssessment({...assessment, englishMet: v})}
                        />
                      </>
                    )}
                  </div>

                  <div className="flex justify-between mt-12">
                    <button 
                      onClick={() => setStep(1)}
                      className="text-zinc-400 font-bold flex items-center gap-2 hover:text-brand-black transition-colors"
                    >
                      <ChevronLeft size={18} /> Back
                    </button>
                    <button 
                      onClick={() => setStep(3)}
                      disabled={
                        assessment.visaType === 'WORK' ? (assessment.hasJobOffer === null || assessment.salaryMet === null || assessment.englishMet === null) :
                        assessment.visaType === 'FAMILY' ? (assessment.partnerStatus === null || assessment.incomeMet === null || assessment.relationshipMet === null) :
                        assessment.visaType === 'VISITOR' ? (assessment.shortStay === null || assessment.fundsMet === null) :
                        assessment.visaType === 'SELF_SPONSORSHIP' ? (assessment.hasUKCompany === null || assessment.hasBusinessFunds === null || assessment.englishMet === null) :
                        (assessment.isInnovative === null || assessment.isEndorsed === null || assessment.englishMet === null)
                      }
                      className="bg-brand-red text-white px-10 py-4 rounded-xl font-bold hover:bg-red-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-red-500/20"
                    >
                      View Results
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: RESULTS */}
              {step === 3 && (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-zinc-50 mb-6 border-4 border-white shadow-sm">
                    {results.score === 'High' ? (
                      <CheckCircle2 className="text-green-500" size={48} />
                    ) : results.score === 'Medium' ? (
                      <AlertCircle className="text-amber-500" size={48} />
                    ) : (
                      <AlertCircle className="text-red-500" size={48} />
                    )}
                  </div>

                  <h3 className="text-3xl font-black text-brand-black mb-2">Assessment Complete</h3>
                  <div className="flex items-center justify-center gap-2 mb-8">
                    <span className="text-zinc-400 font-bold uppercase tracking-widest text-xs">Likelihood Score:</span>
                    <span className={`font-black uppercase tracking-widest text-sm ${
                      results.score === 'High' ? 'text-green-600' : 
                      results.score === 'Medium' ? 'text-amber-600' : 'text-red-600'
                    }`}>
                      {results.score}
                    </span>
                  </div>

                  <div className="bg-zinc-50 p-8 rounded-3xl border border-zinc-100 mb-10 text-left">
                    <p className="text-brand-black leading-relaxed font-medium">
                      {results.summary}
                    </p>
                  </div>

                  <div className="grid gap-4">
                    <Link 
                      to="/booking"
                      className="w-full bg-brand-red text-white py-5 rounded-xl font-black text-lg hover:bg-brand-black transition-all flex items-center justify-center gap-3 shadow-xl shadow-red-500/20"
                    >
                      <Calendar size={20} />
                      Book Professional Review
                    </Link>
                    <button 
                      onClick={() => {
                        setStep(1);
                        setAssessment({
                          visaType: null,
                          hasJobOffer: null,
                          salaryMet: null,
                          englishMet: null,
                          partnerStatus: null,
                          incomeMet: null,
                          relationshipMet: null,
                          shortStay: null,
                          fundsMet: null,
                          hasUKCompany: null,
                          hasBusinessFunds: null,
                          isInnovative: null,
                          isEndorsed: null
                        });
                      }}
                      className="text-zinc-400 font-bold hover:text-brand-black transition-colors"
                    >
                      Start New Assessment
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-[32px] p-8 md:p-12 border border-zinc-100 shadow-sm"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-display font-bold text-brand-black mb-2">How It Works</h3>
              <p className="text-zinc-500 font-medium mb-4">Simple. Strategic. Forensic.</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-zinc-400 font-bold uppercase tracking-wider">
                <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-brand-red" /> Initial Contact</span>
                <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-brand-red" /> Consultation</span>
                <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-brand-red" /> Action Plan</span>
              </div>
            </div>
            <Link 
              to="/how-it-works"
              className="group flex items-center gap-3 bg-brand-black text-white px-8 py-4 rounded-full font-bold hover:bg-brand-red transition-all shrink-0"
            >
              Read More
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        <p className="text-center mt-8 text-xs text-zinc-400 font-bold uppercase tracking-[0.2em]">
          IAA Regulated Advice • 2026 Compliance Checked
        </p>
      </div>
    </section>
  );
};

const Question = ({ label, value, onChange }: { label: string, value: boolean | null, onChange: (v: boolean) => void }) => (
  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl bg-zinc-50 border border-zinc-100">
    <p className="font-bold text-brand-black">{label}</p>
    <div className="flex gap-3">
      <button
        onClick={() => onChange(true)}
        className={`px-8 py-3 rounded-xl font-bold transition-all ${value === true ? 'bg-brand-black text-white shadow-lg shadow-black/20' : 'bg-white text-zinc-400 border border-zinc-100 hover:border-zinc-300'}`}
      >
        Yes
      </button>
      <button
        onClick={() => onChange(false)}
        className={`px-8 py-3 rounded-xl font-bold transition-all ${value === false ? 'bg-brand-black text-white shadow-lg shadow-black/20' : 'bg-white text-zinc-400 border border-zinc-100 hover:border-zinc-300'}`}
      >
        No
      </button>
    </div>
  </div>
);
