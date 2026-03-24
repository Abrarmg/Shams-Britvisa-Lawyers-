import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { motion } from 'motion/react';
import { CheckCircle2, Clock, Phone, Check, AlertCircle, FileText, Info, Briefcase } from 'lucide-react';
import { BookingSection } from '../components/BookingSection';

// --- Main Page Component ---

export default function RefusalsAppeals() {
  const reasons = [
    {
      title: "1. Incomplete Application Form",
      content: "One of the most frequent — and entirely preventable — reasons for UK visa refusal is submitting an incomplete application form. UKVI will not contact you to request missing information. If any mandatory field is left blank or any required section is skipped, your application will be refused outright.",
      extra: "Many applicants underestimate the detail required. Every question on the form exists for a reason, and leaving fields empty — even those that seem irrelevant — signals carelessness to the decision-maker. A refused application means you will need to start the process again from scratch, paying the full application fee a second time.",
      tip: "Before submitting, review every section of your application form methodically. At Shams Britvisa Lawyers Ltd, we use a comprehensive checklist process to ensure no field is overlooked."
    },
    {
      title: "2. Errors and Inaccuracies in the Application",
      content: "Even minor errors — a misspelled name, an incorrect date, or a wrong passport number — can lead to a visa refusal. UKVI scrutinises every detail of your application for consistency. If information on your form does not match your supporting documents, this raises serious concerns.",
      extra: "More critically, if UKVI determines that an error was an intentional attempt to mislead or deceive, the consequences are severe. You could be issued a ban of up to 10 years, during which you will be unable to apply for any UK visa. What might seem like a harmless typo can have life-altering consequences.",
      warning: "A perceived attempt to deceive UKVI — even if unintentional — can result in a 10-year re-entry ban. Accuracy is not optional; it is essential."
    },
    {
      title: "3. Irregular or Unexplained Fund Transfers",
      content: "To demonstrate your ability to support yourself financially during your stay in the UK, you must provide clear and transparent bank statements. UKVI caseworkers are trained to identify irregularities in your financial history, including sudden large deposits, unexplained transfers, or inconsistencies in your account activity.",
      extra: "If a significant sum of money appears in your account shortly before your application, it may be interpreted as a temporary loan arranged solely to meet the visa requirements. This raises a red flag and can lead to refusal. The source and history of your funds matter as much as the amount itself. If you have transferred money from savings, investments, or another account, you must provide clear documentation explaining the origin and purpose of each transfer.",
      tip: "Maintain consistent banking activity for at least 3–6 months before applying. If large deposits are necessary, always retain evidence of their legitimate source — such as a property sale, salary credits, or inheritance documentation."
    },
    {
      title: "4. Selecting the Wrong Visa Category",
      content: "The UK visa system offers numerous categories — visitor visas, student visas, work visas, spouse visas, business visas, and more. Each category has distinct eligibility criteria, permitted activities, and duration limits. Applying under the wrong category is a surprisingly common error that leads to automatic refusal.",
      extra: "For example, if you apply for a Standard Visitor Visa but your true intention is to undertake paid employment, your application will be refused. Similarly, applying for a Business Visitor Visa while indicating a stay exceeding six months would be grounds for automatic rejection, as a Work Visa would be more appropriate in that scenario. An unclear or vague purpose for your visit is equally problematic. UKVI expects a well-defined plan — where you will stay, what you intend to do, and when you plan to return home.",
      tip: "Before beginning your application, consult with an immigration solicitor to confirm which visa category is right for your circumstances. Our team at Shams Britvisa Lawyers Ltd provides tailored assessments for every client."
    },
    {
      title: "5. Undisclosed Criminal Record",
      content: "All UK visa applications require honest disclosure of your criminal history. This includes not only serious offences but also minor convictions such as traffic violations, cautions, and spent convictions in certain categories. Many applicants make the mistake of omitting what they consider minor or irrelevant offences.",
      extra: "UKVI has extensive databases and information-sharing arrangements with international law enforcement agencies. If a conviction is discovered that you failed to declare, it will be treated as an attempt to deceive — regardless of your actual intent. The resulting refusal will be accompanied by far more serious consequences for your future applications.",
      warning: "Always disclose your full criminal history, no matter how minor. Omission is treated as deception. Honesty and transparency give you the best chance of a successful outcome."
    },
    {
      title: "6. Insufficient Financial Evidence",
      content: "The United Kingdom has a high cost of living, and UKVI requires robust evidence that you can financially sustain yourself — and any dependants — for the entire duration of your stay. This requirement exists to ensure that visitors do not become reliant on public funds.",
      extra: "The financial threshold varies depending on your visa type, the length of your stay, and the number of dependants. Simply having the required minimum in your account is often not enough. UKVI wants to see a consistent pattern of financial stability, not a single snapshot of your balance on the day of application. Bulk deposits made shortly before applying are particularly problematic, as they suggest the funds may have been temporarily borrowed to satisfy visa requirements rather than representing genuine financial standing.",
      tip: "Provide bank statements covering a minimum of six months. Show regular income, consistent savings, and avoid making large unexplained deposits in the weeks before your application."
    },
    {
      title: "7. Disorganised or Unclear Supporting Documents",
      content: "Your supporting documents serve as the evidence base for your application. They prove your identity, your financial standing, your ties to your home country, and your plans while in the UK. If these documents are poorly organised, illegible, or improperly labelled, UKVI caseworkers may disregard them entirely.",
      extra: "UKVI processes an enormous volume of applications. Decision-makers will not spend time deciphering unclear documents or searching for relevant information within a disorganised bundle. If key evidence is overlooked because it was buried in a poorly presented application, the outcome will be refusal. All documents submitted in a language other than English or Welsh must be accompanied by a certified professional translation. Failure to provide translations will result in those documents being excluded from consideration.",
      tip: "Organise your documents in the exact order specified by the visa category guidance. Label each document clearly, include a cover sheet summarising the contents, and ensure all photocopies and scans are sharp and fully legible."
    },
    {
      title: "8. Failure to Prove a Genuine Relationship",
      content: "For visa categories based on a relationship — such as a Spouse Visa, Partner Visa, or Family Visa — you must provide compelling evidence that your relationship is authentic and subsisting. UKVI applies rigorous scrutiny to relationship-based applications to prevent abuse of the immigration system.",
      extra: "Acceptable evidence includes your marriage or civil partnership certificate, evidence of shared financial responsibilities (such as joint bank accounts or shared bills), proof of cohabitation, correspondence addressed to both parties at the same address, photographs together over time, and communication records demonstrating an ongoing relationship. Applications that provide only a marriage certificate without broader supporting evidence are frequently refused. UKVI needs to be satisfied that the relationship is genuine and not entered into primarily for immigration purposes.",
      tip: "Build a comprehensive evidence bundle. Include documents spanning the full history of your relationship — not just recent items. Our solicitors at Shams Britvisa Lawyers Ltd can help you compile a persuasive portfolio of evidence."
    },
    {
      title: "9. Missing Documents or Incomplete Paperwork",
      content: "Failing to include essential documents is one of the most straightforward reasons for visa refusal, yet it remains remarkably common. Whether it is a forgotten passport photograph, an expired tuberculosis test certificate, or an unsigned declaration form, any omission can be grounds for refusal.",
      extra: "UKVI will not request missing documents after your application has been submitted. The decision is made solely on what you have provided. If a required document is missing, your application will be assessed without it — and in most cases, this means refusal. Equally important is the quality of the documents you submit. Blurred photocopies, expired certificates, and unsigned forms are treated the same as missing documents. If documents are not in English or Welsh, professionally certified translations must be included alongside the originals.",
      tip: "Use a document checklist specific to your visa category. Review your bundle at least twice before submission. Having a qualified immigration solicitor review your paperwork before you submit can prevent costly refusals."
    },
    {
      title: "10. Lack of Professional Legal Guidance",
      content: "While it is entirely possible to submit a UK visa application without professional help, the immigration rules are complex and constantly evolving. Even applicants with strong English language skills often misinterpret the requirements, misjudge the level of evidence required, or make procedural errors that lead to refusal.",
      extra: "Immigration law is one of the most frequently changing areas of UK legislation. Rules, financial thresholds, and documentary requirements are updated regularly, and what was acceptable in a previous application cycle may no longer suffice. Relying on outdated guidance or advice from unqualified sources is a significant risk. Professional legal representation does more than just fill in forms. An experienced immigration solicitor will assess your individual circumstances, advise you on the strongest strategy for your application, prepare and organise your evidence, and anticipate potential grounds for refusal before they arise.",
      tip: "Investing in expert guidance from the outset is significantly more cost-effective than dealing with the consequences of a refused application. At Shams Britvisa Lawyers Ltd, we offer a comprehensive application review service designed to maximise your chances of success."
    }
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
              Expert Advice 2026
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-7xl font-display font-black text-brand-black mb-8 leading-tight"
            >
              Top Reasons Your UK Visa Could Be <span className="text-brand-red">Refused in 2026</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-zinc-600 font-medium leading-relaxed"
            >
              Every year, thousands of UK visa applications are refused for avoidable reasons. Our immigration experts at Shams Britvisa Lawyers Ltd have compiled the most common refusal grounds — and how to prevent them.
            </motion.p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="container mx-auto px-6 mb-24">
          <div className="max-w-4xl mx-auto bg-zinc-50 p-12 rounded-[40px] border border-zinc-200">
            <h2 className="text-3xl font-display font-black mb-8 text-brand-black">Why Are UK Visa Applications Refused?</h2>
            <div className="space-y-6 text-lg text-zinc-700 leading-relaxed">
              <p>
                Applying for a UK visa can be a complex and stressful process. Whether you are looking to visit, work, study, or settle in the United Kingdom, a single mistake in your application can result in a refusal — costing you time, money, and future opportunities.
              </p>
              <p>
                At Shams Britvisa Lawyers Ltd, we have helped thousands of applicants navigate the UK immigration system successfully. Drawing on our extensive experience, we have identified the ten most common reasons visa applications are refused in 2026. Understanding these pitfalls can be the difference between approval and rejection.
              </p>
              <p>
                UK Visas and Immigration (UKVI) assesses every application against strict criteria. If your application fails to meet these requirements — even on a technicality — it will be refused without further correspondence. Below, we outline each common reason for refusal and provide expert guidance on how to avoid it.
              </p>
            </div>
          </div>
        </section>

        {/* Reasons List */}
        <section className="container mx-auto px-6 mb-24">
          <div className="max-w-4xl mx-auto space-y-16">
            {reasons.map((reason, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <h3 className="text-3xl md:text-4xl font-display font-black mb-6 text-brand-black group-hover:text-brand-red transition-colors">
                  {reason.title}
                </h3>
                <div className="space-y-6 text-lg text-zinc-700 leading-relaxed">
                  <p className="font-bold text-brand-black">{reason.content}</p>
                  <p>{reason.extra}</p>
                  
                  {reason.tip && (
                    <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-2xl">
                      <p className="text-emerald-900 font-bold mb-2 flex items-center gap-2">
                        <CheckCircle2 size={20} /> Expert Tip:
                      </p>
                      <p className="text-emerald-800 italic">{reason.tip}</p>
                    </div>
                  )}

                  {reason.warning && (
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-2xl">
                      <p className="text-amber-900 font-bold mb-2 flex items-center gap-2">
                        <AlertCircle size={20} /> Warning:
                      </p>
                      <p className="text-amber-800 italic">{reason.warning}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Booking Section */}
        <BookingSection 
          title="Don't Risk a Refusal"
          description="Our expert immigration solicitors can review your application and ensure it meets all UKVI requirements. Book your consultation today."
        />
      </main>

      <Footer />
    </div>
  );
}
