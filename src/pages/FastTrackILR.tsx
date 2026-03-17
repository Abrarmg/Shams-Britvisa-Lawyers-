import React from 'react';
import { VisaPageTemplate } from '../components/VisaPageTemplate';

export default function FastTrackILR() {
  return (
    <VisaPageTemplate
      title="Fast Track ILR"
      description="Accelerated pathways to permanent residency for high-value migrants and innovators."
      whatIs="Fast Track Indefinite Leave to Remain (ILR) allows certain visa holders to apply for settlement in the UK earlier than the standard 5-year period. This is typically available to those on Global Talent or Innovator Founder visas who meet specific high-value criteria."
      whoIsItFor={[
        'Global Talent visa holders (3-year route)',
        'Innovator Founder visa holders (3-year route)',
        'High-value investors (under old routes)',
        'Exceptional talent in science, arts, or digital tech'
      ]}
      keyRequirements={[
        '3 years of continuous residence in the UK',
        'Meeting specific business growth or endorsement criteria',
        'Passing the Life in the UK test',
        'Meeting English language requirements'
      ]}
      fees={[
        { type: 'ILR Application Fee', amount: '£2,885', notes: 'Per person' },
        { type: 'Priority Service', amount: '£500', notes: '5 working days' },
        { type: 'Super Priority Service', amount: '£1,000', notes: 'Next working day' }
      ]}
      processingTime="Standard processing takes up to 6 months, but priority services can reduce this to 1-5 working days."
      howWeHelp="We specialize in accelerated settlement routes. Our team meticulously reviews your business achievements or professional endorsements to ensure you meet the 'fast-track' criteria before submitting your ILR application."
    />
  );
}
